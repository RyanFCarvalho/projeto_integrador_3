const express = require('express')
const expHandlebars = require('express-handlebars')

const connection = require('./db/connection')

// Importando o arquivo de rotas de tasks
const authRoutes = require('./routes/authRoutes')

//Importando controller da página de home
const E_trashwayController = require('./controllers/E_trashwayController')


const hbsPartials = expHandlebars.create({ partialsDir: ['views/partials'] })
const app = express()

const port = 4004

app.engine('handlebars', hbsPartials.engine)
app.set('view engine', 'handlebars')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static('public'))

// Rotas
app.use('/', authRoutes)
app.get('/e_trashway', E_trashwayController)
app.get('/', E_trashwayController.homePage)

connection.sync().then(() => {
    app.listen(port, () => { console.log(`Servidor inciado - Porta:${port}`) })
}).catch((error)=>{ console.error(`Não foi possível sincronizar os dados do banco de dados. Erro: ${error}`)})
