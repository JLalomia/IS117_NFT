const express = require('express');
const path = require('path');

const app = express();

// Set the static folder for serving HTML files
app.use(express.static(path.join(__dirname, 'docs')));
app.use('/images', express.static(path.join(__dirname, 'images')));

// Define the route for the homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'docs', 'Homepage.html')); 
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});