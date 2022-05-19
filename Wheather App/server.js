const path = require("path");
var bodyParser = require('body-parser')
const express = require('express')
const app = express()
const api = require('./server/routes/api')
const City = require('./server/models/City')

app.use(express.static(path.join(__dirname, "dist")));
app.use(express.static(path.join(__dirname, "node_modules")));

app.use(express.json())
app.use(express.urlencoded({extended:false}))

// Mongoose setup
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/CityDB', { useNewUrlParser: true })

app.use('/', api)

const port = 3333
app.listen(port, function () {
    console.log(`Running on port ${port}`)
})