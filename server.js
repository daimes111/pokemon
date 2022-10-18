require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const app = express()
const db = require('./models/db')

app.use((req, res, next) => {
    res.locals.data= {}
    next()
})
app.use(express.urlencoded({extended: true}))
app.engine('jsx', require('jsx-view-engine').createEngine())
app.set('view engine', 'jsx')

db.once('open', () => {
    console.log('DB Connected')
})


app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use('/pokemon', require('./controllers/routeController'))


app.listen(3002, () => {
    console.log('Listening to Port 3002')
})