const express = require("express");
const app = express();

// Habilitando o uso de JSON
app.use(express.json());

// Dummy data
let products = [
  { id: 1, name: "Product 1", price: 10.99 },
  { id: 2, name: "Product 2", price: 15.99 },
  { id: 3, name: "Product 3", price: 20.99 },
];

// Rota para listar todos os produtos
app.get("/products", (req, res) => {
  res.json(products);
});

// Rota para criar um novo produto
app.post("/products", (req, res) => {
  let product = req.body;
  product.id = products.length + 1;
  products.push(product);
  res.json(product);
});

// Iniciando o servidor
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
