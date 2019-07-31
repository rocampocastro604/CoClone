const mongoose = require('mongoose')
const URI = 'mongodb://localhost/coclone'

//Inside connect va el url de Atlas
mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err))

module.exports = mongoose