const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Test =require('./models/test')
const path =require('path')
const bodyParser =require('body-parser')

mongoose.connect(process.env.MONGODBURL || 'mongodb://127.0.0.1/testhost',
{ useNewUrlParser: true, useUnifiedTopology: true })
var db = mongoose.connection
db.on('error',console.error.bind(console,'MOngodb is not connected'))

app.set("view engine", "ejs");
app.set("views", "views");


app.use(bodyParser.urlencoded({ limit: "50mb", extended: false, parameterLimit: 50000 }));
app.use(bodyParser.json())


app.get('/', (req, res) => {
    try { 
        Test.find().then(result => {
console.log(result);            
            res.render('from/indes',{test:result})

           
        }).catch(err => {
            console.log(err)
        })
    } catch (err) {
        console.log(err)
    }
})


app.post('/add', (req, res) => {
    const newuser = new Test({
        name:req.body.name
        
    })
    newuser.save()
    res.redirect('/')
  
})

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log('server is running')
})