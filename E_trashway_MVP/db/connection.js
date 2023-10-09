const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('e_trashway','root','Sen@iDev77!.',{
    host:'127.0.0.1',
    port:3306,
    dialect:'mysql'
})

try{
    sequelize.authenticate()
    console.log('Mysql conectado')
}catch(error){
    console.error(`Não foi possível realizar a conexão. Erro: ${error}`)
}

module.exports = sequelize