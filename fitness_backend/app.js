
// Initialize express js

const express = require('express');
const app = express();



// Respond to GET request on the root route
app.get('/', (req, res) => {
  res.send('GET request to the homepage');
});

// Middleware function parameters
// req = request object
// res = response object
// next = function to pass control to the next middleware

// Respond to POST request on the root route
app.post('/', (req, res) => {
  res.send('POST request to the homepage');
});

// Respond to GET request on the /about route
app.get('/about', (req, res) => {
  res.send('About page');
});


// Start the server

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});


