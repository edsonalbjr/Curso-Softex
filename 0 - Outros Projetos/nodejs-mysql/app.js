const express = require('express')
const app = express();
const { engine } = require('express-handlebars');
const bodyParser = require('body-parser');
const form = require('./models/Form');

app.engine('handlebars', engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/form', function(req, res){
    res.render('form');
});

app.post("/form-done", function(req, res){
    form.create({
        nome: req.body.nome,
        cpf: req.body.cpf,
        email: req.body.email,
        telefone: req.body.telefone,
        data: req.body.data,
        genero: req.body.genero
    }).then(function(){
        res.send("<title>Cadastro concluído</title><h1>Cadastro realizado com sucesso.</h1>")
    }).catch(function(erro){
        res.send("<title>Cadastro concluído</title><h1>Cadastro não realizado.</h1>" + erro)
    })
});

app.listen(8080, function(){
    console.log("Servidor rodando na url http://localhost:8080");
});