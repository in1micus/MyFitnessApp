// Imports


// Initialize express js and database connection

const express = require('express');
const connection = require('./config/database'); // Assuming you have a db.js file that exports a database connection
const cors = require('cors');
const users_table = require("./models/users")
const db = connection.promise();
const app = express();

const PORT = 3000

// Require the route modules

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/usersRoutes");
const foodRouter = require("./routes/foodRoutes");

// app.use(cors()) to allow cross-origin requests

app.use(cors());

// app.use(express.json()) to parse JSON request bodies

app.use(express.json());

// Require dotenv to load environment variables from .env file

require('dotenv').config();

// Add routes to middleware stack

app.use("/users", usersRouter);
/// app.use("/foods", foodRouter);
app.use("/", indexRouter);

/* GET USERS TABLE example
app.get('/users', async (req, res) => {
  const [users] = await db.query('SELECT * FROM users');
  res.json(users);
});
*/


// Start the server

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

