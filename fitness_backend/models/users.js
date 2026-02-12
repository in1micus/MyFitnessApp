
/// Defining functions to interact with My_fitness_db through MySQL

const db = require('../config/database');

exports.getAllUsers = function(callback) {
    db.query('SELECT * FROM users', callback);
};

exports.getUserById = function(id, callback) {
    db.query('SELECT * FROM users WHERE id = ?', [id], callback);
};

/// Create user with async function

exports.createUser = async function createUser(email, passwordHash, cal_goal) {

    const sql = 'INSERT INTO users (email, password_hash, daily_calorie_goal) VALUES (?, ?, ?)';

    const [result] = await db.promise().query(sql, [email, passwordHash, cal_goal]);

    return result.insertId; // Return the ID of the newly created user

};


exports.updateUser = function(id, updatedUser, callback) {
    db.query('UPDATE users SET ? WHERE id = ?', [updatedUser, id], callback);
};

exports.deleteUser = function(id, callback) {
    db.query('DELETE FROM users WHERE id = ?', [id], callback);
};



