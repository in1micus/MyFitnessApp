

const db = require('../config/database');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secrets = require("../config/secrets");

const JWT_SECRET = secrets.jwtSecret; /// Secret key for JWT, should be stored securely in environment variables

/// Register a new user

exports.register = async ({ email, password }) => {
    const hashedPassword = await bcrypt.hash(password, 10);

    const [result] = await db.execute(
        'INSERT INTO users (email, password) VALUES (?, ?)',
        [email, hashedPassword]
    );
    return result.insertId;
};

/// Login a user and return a JWT token

exports.login = async ({ email, password }) => {
    const [rows] = await db.execute('SELECT * FROM users WHERE email = ?', [email]);
    const user = rows[0];
    if (!user) throw new Error("Invalid credentials");

    const match = await bcrypt.compare(password, user.password);
    if (!match) throw new Error("Invalid credentials");

    const token = jwt.sign({userId: user.id }, JWT_SECRET, {expiresIn: "1h"});
    return token;
};



