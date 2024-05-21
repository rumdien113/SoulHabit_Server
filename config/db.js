const mongoose = require('mongoose')

const connection = mongoose.createConnection('mongodb://localhost:27017/Todo')
    .on('open', () => {
        console.log("Mongodb Connected") 
    })
    .on('error', () => {
        console.log("Mongodb connection error")
    })

module.exports = connection