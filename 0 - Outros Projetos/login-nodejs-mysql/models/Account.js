const db = require('./db')

const Account = db.sequelize.define('accounts',{
    username: {
        type: db.Sequelize.STRING, unique: true
    },
    email: {
        type: db.Sequelize.STRING, unique: true
    },
    password: {
        type: db.Sequelize.STRING
    }
})

// Account.sync({force: true})

module.exports = Account