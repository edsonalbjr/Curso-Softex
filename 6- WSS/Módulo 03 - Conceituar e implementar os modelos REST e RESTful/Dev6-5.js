const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// Configurando o body-parser
app.use(bodyParser.json());

// Criar (Create)
app.post("/books", (req, res) => {
  const book = req.body;
  // Adicionar livro ao estoque
  books.push(book);
  res.status(201).json(book);
});

// Ler (Read)
app.get("/books/:isbn", (req, res) => {
  const isbn = req.params.isbn;
  const book = books.find((b) => b.isbn === isbn);
  if (!book) {
    res.status(404).json({ message: "Livro não encontrado" });
  } else {
    res.json(book);
  }
});

// Atualizar (Update)
app.put("/books/:isbn", (req, res) => {
  const isbn = req.params.isbn;
  const updatedBook = req.body;
  const index = books.findIndex((b) => b.isbn === isbn);
  if (index === -1) {
    res.status(404).json({ message: "Livro não encontrado" });
  } else {
    books[index] = updatedBook;
    res.json(updatedBook);
  }
});

// Deletar (Delete)
app.delete("/books/:isbn", (req, res) => {
  const isbn = req.params.isbn;
  const index = books.findIndex((b) => b.isbn === isbn);
  if (index === -1) {
    res.status(404).json({ message: "Livro não encontrado" });
  } else {
    books.splice(index, 1);
    res.status(204).send();
  }
});
