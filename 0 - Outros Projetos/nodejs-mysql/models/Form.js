const db = require('./db')

const Form = db.sequelize.define('forms',{
    nome: {
        type: db.Sequelize.STRING
    },
    cpf: {
        type: db.Sequelize.STRING
    },
    email: {
        type: db.Sequelize.STRING
    },
    telefone: {
        type: db.Sequelize.STRING
    },
    data: {
        type: db.Sequelize.DATE

    },
    genero: {
        type: db.Sequelize.STRING
    },
})

//Form.sync({force: true})

module.exports = Form