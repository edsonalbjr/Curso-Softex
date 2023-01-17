(PT-br)
=======

Projeto Login/Cadastro Node.js + MySQL
----------------

Projeto Básico;
Foi desensolvido com HTML5, CSS, JavaScript, Node.js e MySQL

Página WEB de login/cadastro com validação no banco de dados.

Como rodar a aplicação:
-----------------------
O `models/nodelogin_accounts.sql` é uma exportação do banco de dados já cadastrado no sistema, basta importar ele no `MySQL Workbench 8.0 CE +` e executar o programa;

Basta executar o arquivo login.js 
  -npx nodemon login.js
  ou
  -node login.js
  
O APP inicializará na porta `http://localhost:3000`

o Banco de dados está configurado para não ter usuário e email duplicados `models/Accounts.js` as colunas username e email receberam o atributo `unique: true`.

(EN-us)
=======

Login/Registration Project Node.js + MySQL

Basic project;
It was developed with HTML5, CSS, JavaScript, Node.js and MySQL

Login/registration WEB page with database validation.

How to run the application:

`models/nodelogin_accounts.sql` is an export of the database already registered in the system, just import it into `MySQL Workbench 8.0 CE +` and run the program;

Just run the login.js file
   -npx nodemon login.js
   or
   -node login.js
  
APP will start on port `http://localhost:3000`

the Database is configured to not have duplicate user and email `models/Accounts.js` the username and email columns received the `unique: true` attribute.
