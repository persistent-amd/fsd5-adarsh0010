const express = require('express');
const app = express();

// middleware for parsing json bodies
app.use(express.json());

// in-memory user list with five existing records
let users = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' },
  { id: 3, name: 'Charlie', email: 'charlie@example.com' },
  { id: 4, name: 'Diana', email: 'diana@example.com' },
  { id: 5, name: 'Eve', email: 'eve@example.com' }
];

// GET all users
app.get('/api/users', (req, res) => {
  res.json(users);
});

// GET a single user by id
app.get('/api/users/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const user = users.find(u => u.id === id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'user not found' });
  }
});

// POST create a new user
app.post('/api/users', (req, res) => {
  const { id, name, email } = req.body;
  if (!id || !name || !email) {
    return res.status(400).json({ message: 'missing fields' });
  }
  const newUser = { id, name, email };
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT update an existing user completely
app.put('/api/users/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const user = users.find(u => u.id === id);
  if (!user) {
    return res.status(404).json({ message: 'user not found' });
  }
  user.name = req.body.name;
  user.email = req.body.email;
  res.json(user);
});

// DELETE remove a user by id
app.delete('/api/users/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const idx = users.findIndex(u => u.id === id);
  if (idx === -1) {
    return res.status(404).json({ message: 'user not found' });
  }
  const removed = users.splice(idx, 1);
  res.json(removed[0]);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`server running on ${PORT}`));
