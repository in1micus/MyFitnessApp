// Imports


// Initialize express js and database connection

const express = require('express');
const connection = require('./config/database'); // Assuming you have a db.js file that exports a database connection
const cors = require('cors');
const db = require('./config/database');
const app = express();

const PORT = 3000

// Require the route modules

const indexRouter = require("./routes/index");
const authRouter = require("./routes/authRoutes");
const foodRouter = require("./routes/foodRoutes");
const entriesRouter = require("./routes/entriesRoutes");

// Require dotenv to load environment variables from .env file

require('dotenv').config();


// app.use(cors()) to allow cross-origin requests

app.use(cors());

// app.use(express.json()) to parse JSON request bodies

app.use(express.json());


// Add routes to middleware stack


app.use("/foods", foodRouter);
app.use("/", indexRouter);
app.use("/entries", entriesRouter);
app.use("/auth", authRouter);

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


