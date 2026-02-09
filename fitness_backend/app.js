// Imports


// Initialize express js and database connection

const express = require('express');
const connection = require('./config/database'); // Assuming you have a db.js file that exports a database connection
const cors = require('cors');

const db = connection.promise();
const app = express();

const PORT = 3000

// app.use(cors()) to allow cross-origin requests

app.use(cors());

// app.use(express.json()) to parse JSON request bodies

app.use(express.json());

// Require dotenv to load environment variables from .env file

require('dotenv').config();

// Get request for root endpoint

app.get('/', (req, res) => {
  res.send('Welcome to the My Fitness API');
});


// Get users table from database for localhoset:3000/users endpoint

app.get('/users', async (req, res) => {
  const [users] = await db.query('SELECT * FROM users');
  res.json(users);
});


// Get foods table from database for localhoset:3000/foods endpoint

app.get('/foods', async (req, res) => {
  const [foods] = await db.query('SELECT * FROM foods');
  res.json(foods);
});


// Get users table from database for localhoset:3000/users endpoint

app.get('/entries', async (req, res) => {
  const [entries] = await db.query('SELECT * FROM entries');
  res.json(entries);
});


// Start the server

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

