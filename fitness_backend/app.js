// Imports


// Initialize express js and database connection

const express = require('express');
const connection = require('./config/database'); // Assuming you have a db.js file that exports a database connection
const cors = require('cors');
const users_table = require("./services/users")
const db = require('./config/database');
const app = express();

const PORT = 3000

// Require the route modules

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/usersRoutes");
const foodRouter = require("./routes/foodRoutes");
const entriesRouter = require("./routes/entriesRoutes");

console.log("usersRouter:", usersRouter);
console.log("foodRouter:", foodRouter);

// app.use(cors()) to allow cross-origin requests

app.use(cors());

// app.use(express.json()) to parse JSON request bodies

app.use(express.json());

// Require dotenv to load environment variables from .env file

require('dotenv').config();

// Add routes to middleware stack

app.use("/users", usersRouter);
app.use("/foods", foodRouter);
app.use("/", indexRouter);
app.use("/entries", entriesRouter);

/* GET USERS TABLE example
app.get('/users', async (req, res) => {
  const [users] = await db.query('SELECT * FROM users');
  res.json(users);
});
*/


// Start the server

(async () => {
    try {
      await db.getConnection(); // Test the database connection
      console.log('Database connection successful');
    } catch (err) {
      console.error('Database connection failed:', err);
      process.exit(1); // Exit the application if the database connection fails
    }
    })();



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


