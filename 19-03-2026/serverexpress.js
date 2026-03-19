const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from 'public' directory
app.use(express.static('public'));

// Routes

// GET route - Home page
app.get('/', (req, res) => {
  res.send('Welcome to the Express App!');
});

// GET route with parameter
app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User ID: ${userId}`);
});

// POST route
app.post('/data', (req, res) => {
  const data = req.body;
  res.json({ message: 'Data received', data: data });
});

// PUT route
app.put('/user/:id', (req, res) => {
  const userId = req.params.id;
  const updateData = req.body;
  res.json({ message: `User ${userId} updated`, data: updateData });
});

// DELETE route
app.delete('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.json({ message: `User ${userId} deleted` });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});