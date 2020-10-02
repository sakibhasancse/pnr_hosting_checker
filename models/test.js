const mongoose = require('mongoose')
const testSchema = mongoose.Schema({
    name: {
        type: String
    }

})

modeule.exports = mongoose.model('Test',testSchema)