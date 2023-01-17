//<sequelize>
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('nodelogin', 'edson-user', '123456', {
    host: 'localhost',
    dialect: 'mysql'
  });

sequelize.authenticate().then(function(){
    console.log("Conexão realizada com sucesso com o BD.")
}).catch(function(err){
    console.log("Erro ao realizar a conexão com o BD: " + err)
});

//Apagar registro no BD
// sequelize.query("delete from accounts where id = 1")

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}
//</sequelize>
