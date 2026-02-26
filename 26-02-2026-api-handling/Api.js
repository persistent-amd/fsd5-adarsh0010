const express = require('express');
const app = express();
const PORT = 3000;

// Sample bookstore data
const books = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', price: 12.99 },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', price: 14.99 }
];

// Route to get all books
app.get('/api/books', (req, res) => {
  res.json(books);
});

// Route to get a specific book by ID
app.get('/api/books/:id', (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Bookstore API running on http://localhost:${PORT}`);
});
