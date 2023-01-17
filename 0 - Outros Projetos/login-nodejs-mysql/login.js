const mysql = require('mysql');
const express = require('express');
const session = require('express-session');
const path = require('path');
const Account = require('./models/Account');

const connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'edson-user',
	password : '123456',
	database : 'nodelogin'
});

const app = express();

app.use(session({
	secret: 'rVr%Ko&784Rb',
	resave: true,
	saveUninitialized: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));

app.get('/', function(request, response) {
	// Renderizar modelo de login
	response.sendFile(path.join(__dirname + '/views/login.html'));
});

app.get('/criar-conta', function(request, response) {
	// Modelo de cadastro de renderização
	response.sendFile(path.join(__dirname + '/views/cadastro.html'));
});

app.post("/home", function(req, res){
    Account.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    }).then(function(){
        res.sendFile(path.join(__dirname + '/views/cadastro-done.html') );
    }).catch(function(erro){
        res.send("<title>Cadastro</title><h1>Cadastro não realizado.</h1><h4>Verifique o nome de usuário ou email.</h4>" + erro)
    })
});

app.post('/auth', function(request, response) {
	// Capturar os campos de entrada
	let username = request.body.username;
	let password = request.body.password;
	// Verifique se os campos de entrada existem e não estão vazios
	if (username && password) {
		// Execute a consulta SQL que selecionará a conta do banco de dados com base no nome de usuário e senha especificados
		connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			// Se houver um problema com a consulta, emita o erro
			if (error) throw error;
			// Se a conta existir
			if (results.length > 0) {
				// Autenticar o usuário
				request.session.loggedin = true;
				request.session.username = username;
				// Redirecionar para a página inicial
				response.redirect('/home');
			} else {
				response.send('<h1>Usuário e/ou senha incorretos!</h1>');
			}			
			response.end();
		});
	} else {
		response.send('<h1>Por favor, digite o usuário e a senha!</h1>');
		response.end();
	}
});

app.get('/home', function(request, response) {
	// Se o usuário estiver logado
	if (request.session.loggedin) {
		// Nome de usuário de saída
		response.send('<h1>Bem vindo de volta, ' + request.session.username + '!</h1>');
	} else {
		// Não logado
		response.send('<h1>Por favor, faça o login para ver esta página!</h1>');
	}
	response.end();
});

app.listen(3000, function(){
    console.log("Servidor rodando na url http://localhost:3000");
});