// Instale o Express.js usando o npm: npm install express

const express = require("express");
const app = express();

app.get("/users/:id", (req, res) => {
  res.send(`Exibindo informações do usuário com ID ${req.params.id}`);
});
// GET: utilizado para obter informações de um recurso específico.
// Exemplo: "GET /users/123" retornaria as informações do usuário com ID
// 123. Este método deve ser utilizado quando se deseja apenas visualizar
// ou obter informações de um recurso sem modificá-lo.

app.post("/users", (req, res) => {
  res.send("Criando um novo usuário");
});
// POST: utilizado para criar um novo recurso. Exemplo: "POST /users" com
// o corpo da requisição contendo os dados do novo usuário cria um novo
// usuário. Este método deve ser utilizado quando se deseja criar um novo
// recurso.

app.put("/users/:id", (req, res) => {
  res.send(`Atualizando o usuário com ID ${req.params.id}`);
});
// PUT: utilizado para atualizar um recurso existente. Exemplo:
// "PUT /users/123" com o corpo da requisição contendo as novas informações
// do usuário atualiza as informações do usuário com ID 123. Este método
// deve ser utilizado quando se deseja atualizar completamente um recurso existente.

app.delete("/users/:id", (req, res) => {
  res.send(`Excluindo o usuário com ID ${req.params.id}`);
});
// DELETE: utilizado para excluir um recurso existente. Exemplo:
// "DELETE /users/123" exclui o usuário com ID 123. Este método deve ser
// utilizado quando se deseja excluir um recurso existente.

app.listen(3000, () => {
  console.log("Servidor iniciado na porta 3000");
});

// Além disso, para o projeto, é importante citar o WSDL, ou Web Service
// Definition Language, que é uma linguagem para descrever serviços web.
// Ele fornece informações sobre as operações disponíveis, os parâmetros
// de entrada e saída, e outras informações relacionadas ao serviço.
// Isso permite que os clientes entendam como utilizar o serviço e permite
// que diferentes sistemas se comuniquem de forma fácil e padronizada.
