const express = require('express')
const app = express()
const mongoose = require('mongoose')

// mongoose.connect(process.env.MONGODBURL || 'mongodb://127.0.0.1/testhost')

// var db = mongoose.connection
// db.on('error',console.error.bind(console,'MOngodb is not connected'))



app.get('/', (req, res) => {
    res.json({ 'hello': 'hi' })
})


const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log('server is running')
})