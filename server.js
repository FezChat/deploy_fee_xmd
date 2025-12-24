const express = require('express'); // Import the Express framework
const bodyParser = require("body-parser"); // Import body-parser
const path = require('path'); // Import path module for handling file paths

const app = express(); // Initialize the Express application
const PORT = process.env.PORT || 8000; // Set the port

// Use body-parser middleware to parse JSON and URL-encoded bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define a route for the root URL
app.use('/', async (req, res, next) => {
    res.sendFile(path.join(__dirname, 'index.html')); // Send the index.html file
});

// Start the server
app.listen(PORT, () => {
    console.log(`Fr El Ez 🚨 Server running on http://localhost:${PORT}`); // Log the server URL
});

// Export the app for testing or further usage
module.exports = app;
