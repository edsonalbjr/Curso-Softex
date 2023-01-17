// Esse código cria um servidor Express que possui quatro rotas: uma para cada método HTTP (GET, POST, PUT, DELETE). Cada rota possui uma função de callback que envia uma mensagem de resposta para o cliente quando uma requisição é feita para a rota correspondente.

// Para rodar o código, basta salvar o arquivo como server.js ou qualquer outro nome e, em seguida, usar o comando node no terminal ou prompt de comando:

// node server.js

const express = require('express');

const app = express();

app.get('/', (request, response) => {
  response.send('Recebi uma requisição GET na rota raiz');
});

app.post('/', (request, response) => {
  response.send('Recebi uma requisição POST na rota raiz');
});

app.put('/', (request, response) => {
  response.send('Recebi uma requisição PUT na rota raiz');
});

app.delete('/', (request, response) => {
  response.send('Recebi uma requisição DELETE na rota raiz');
});

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});
