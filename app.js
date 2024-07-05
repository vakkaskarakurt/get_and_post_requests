// Require necessary modules
const express = require('express'); // Express.js framework
const bodyParser = require('body-parser'); // Middleware to parse request bodies
const path = require('path'); // Core Node.js module for working with file paths

// Create an Express application
const app = express();

// Define the port number
const port = 3000;

// Middleware to parse request body
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(bodyParser.json()); // Parse JSON bodies

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve index.html on the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html')); // Send index.html file
});

// GET request handler for '/get-data' endpoint
app.get('/get-data', (req, res) => {
  const query = req.query; // Extract query parameters from request URL
  // Respond with a JSON object containing a message and the received query
  res.json({ message: 'GET request received', query });
});

// POST request handler for '/post-data' endpoint
app.post('/post-data', (req, res) => {
  const body = req.body; // Extract JSON body from incoming POST request
  // Respond with a JSON object containing a message and the received body
  res.json({ message: 'POST request received', body });
});

// Start the server and listen on specified port
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
