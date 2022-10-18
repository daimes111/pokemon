const mongoose = require('mongoose')

const pokemonSchema = new mongoose.Schema({
    name: { type: String, required: true },
    imgLink: { type: String, rquired: true }
})

const Pokemon = mongoose.model('pokemon', pokemonSchema)

module.exports = Pokemon