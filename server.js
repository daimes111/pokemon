require('dotenv').config()

const express = require('express')
// const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const Pokemon = require('./models/pokemon')

const app = express()

app.use(express.urlencoded({extended: true}))
app.engine('jsx', require('jsx-view-engine').createEngine())
app.set('view engine', 'jsx')

mongoose.connect(process.env.MONGO_URI, {useNewURLParser: true, useUnifiedTopology:true})
mongoose.connection.once('open', () => {
    console.log('MongoDB Connected')
})

// app.use(bodyParser())
app.use(methodOverride('_method'))


//index


//new
app.get('/pokemon/new', (req,res) => {
    res.render('pokemon/New')
})


//delete


//update


//create
app.post('/pokemon', (req,res) => {
    Pokemon.create(req.body, (err, createdPokemon) => {
        if(err) {
            console.log(err)
            res.status(400).send(err)
        } else {
            res.redirect('/pokemon')
        }
    })
})

//edit


//show


app.listen(3002, () => {
    console.log('Listening to Port 3002')
})