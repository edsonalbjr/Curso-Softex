// Esse código cria um servidor web usando o framework Express para Node.js. O servidor possui três rotas: uma rota estática que responde a requisições GET na rota raiz ("/"), uma rota dinâmica que usa um placeholder para aceitar um ID de usuário e uma rota que usa o objeto request.query para acessar os parâmetros da query string.
// A rota estática é criada usando o método get do objeto app e especificando a rota raiz ("/") como parâmetro. Quando uma requisição GET é feita para a rota raiz, a função de callback é chamada e envia uma mensagem de resposta para o cliente.
// A rota dinâmica é criada usando o método get do objeto app e especificando um placeholder na rota (:id). O placeholder é um parâmetro com nome (:id) que pode ser substituído por qualquer valor. Quando uma requisição GET é feita para a rota, o valor do placeholder é disponibilizado no objeto request.params com o mesmo nome (request.params.id). A função de callback usa o valor do placeholder para enviar uma mensagem de resposta para o cliente.
// A terceira rota usa o objeto request.query para acessar os parâmetros da query string da requisição. Quando uma requisição GET é feita para a rota com um parâmetro de query string, o valor do parâmetro é disponibilizado no objeto request.query com o mesmo nome. A função de callback usa o valor do parâmetro de query string para enviar uma mensagem de resposta para o cliente.
// Por fim, o servidor é iniciado na porta 3000 usando o método listen do objeto app. Isso significa que o servidor estará disponível para receber requisições na porta 3000.

const express = require('express');

const app = express();

// Rota estática que responde a requisições GET na rota raiz
app.get('/', (request, response) => {
  response.send('Recebi uma requisição GET na rota raiz');
});

// Rota dinâmica que usa um placeholder para aceitar um ID de usuário
app.get('/usuarios/:id', (request, response) => {
  const id = request.params.id;
  response.send(`Recebi uma requisição GET para o usuário com ID ${id}`);
});

// Rota que usa o objeto request.query para ler os parâmetros da query string
app.get('/produtos', (request, response) => {
  const nome = request.query.nome;
  const preco = request.query.preco;
  response.send(`Recebi uma requisição GET para o produto com nome ${nome} e preço ${preco}`);
});

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});
