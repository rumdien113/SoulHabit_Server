const db = require('../config/db')
const mongoose = require('mongoose')
const UserModel = require('./user.model')
const { Schema } = mongoose

const Habit = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: UserModel.modelName
    },
    title: {
        type: String,
        require: true
    },
    note: {
        type: String,
    },
    difficulty: {
        type: String,
        require: true
    },
    resetCounter: {
        type: String,
        require: true
    },
    counter: {
        type: Number,
        require: true
    }
})

const habitModel = db.model('habit', Habit)

module.exports = habitModel