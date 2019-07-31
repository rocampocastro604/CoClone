const express = require('express')
const router = express.Router()
const Task = require('../models/task')

//Aca se define la REST API
router.get('/', async (req, res) => {
    const tasks = await Task.find(function(err, tasks) {
        
        //Obtener tareas de la db
        res.json(tasks)
    })
    router.post('/', async (req, res) => {
        console.log(req.body)
        res.json('recibido')
    })
/*     res.json({
        status: 'API FUNCIONANDO'
    }) */
})
module.exports = router