const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {
    useNewURLParser: true, 
    useUnifiedTopology:true
})

module.exports = mongoose.connection