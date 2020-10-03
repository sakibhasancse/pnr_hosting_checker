const mongoose = require('mongoose')
const testSchema = mongoose.Schema({
    name: {
        type: String,
        require:true
    }

})

module.exports = mongoose.model('Test',testSchema)