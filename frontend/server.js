const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 4200;

// Serve static files from the frontend directory
app.use(express.static(path.join(__dirname, 'dist/scholarship-dashboard')));

// Send all requests to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/scholarship-dashboard/index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
