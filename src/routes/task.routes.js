const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    //Aca se define la REST API
    res.json({
        status: 'API FUNCIONANDO'
    })
})
2
module.exports = router