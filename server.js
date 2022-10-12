require('dotenv').config()

const express = require('express')

const app = express()

//index


//new
app.get('/pokemon', (req,res) => {
    res.render('pokemon/New')
})


//delete


//update


//create


//edit


//show


app.listen(3002, () => {
    console.log('Listening to Port 3002')
})