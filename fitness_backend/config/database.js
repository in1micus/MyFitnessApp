
/// MySQL Database configuration for My_fitness

const mysql = require("mysql2");
const { deleteFood } = require("../models/foods");

require('dotenv').config();

// Using Single Connection, to avoid unnecessary overhead. With increased traffic, we can switch to Connection Pooling.

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database')
})

module.exports = connection;

