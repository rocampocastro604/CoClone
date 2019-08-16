const express = require('express')
const app = express()
const morgan = require('morgan')
const path = require('path')

const {mongoose} = require('./database')

//Configuracion
app.set('port', process.env.PORT || 80)
//Middlewares
//Funciones que se ejecutan antes de que lleguen a nuestras rutas
app.use(morgan('dev'))
app.use(express.json())

//Routes
app.use('/api/tasks' ,require('./routes/task.routes'))
//Static files
//path concatena para cualquier SO
//console.log(path.join(__dirname, 'public'))
app.use(express.static(path.join(__dirname, 'public')))

//Starting server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`)
})
