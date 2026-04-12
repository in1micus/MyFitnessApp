
/// MySQL Database configuration for My_fitness

const mysql = require("mysql2/promise");

require('dotenv').config();

// Using Single Connection, to avoid unnecessary overhead. With increased traffic, we can switch to Connection Pooling.

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,

    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});
    
console.log('Connection pool created successfully');

module.exports = pool;

