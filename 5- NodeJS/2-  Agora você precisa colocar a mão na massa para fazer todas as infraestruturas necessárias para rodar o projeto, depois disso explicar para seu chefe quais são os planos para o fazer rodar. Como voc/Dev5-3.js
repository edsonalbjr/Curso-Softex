const express = require('express');

const app = express();

app.get('/get', (request, response) => {
  response.send('Recebi uma requisição GET');
});

app.post('/post', (request, response) => {
  response.send('Recebi uma requisição POST');
});

app.listen(8080, () => {
  console.log('Servidor iniciado na porta 8080');
});

// localhost/8080
// localhost/8080/get
// localhost/8080/post
