const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the public directory
app.use(express.static('public'));

// Create a basic API endpoint
app.get('/api/greeting', (req, res) => {
  res.json({ message: 'Hello from the Execute-dev!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});