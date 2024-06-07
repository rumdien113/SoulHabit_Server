const db = require('../config/db')
const mongoose = require('mongoose')
const mongoose_delete = require('mongoose-delete')
const slug = require('mongoose-slug-generator')
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
        slug: ['increase', 'decrease'],
        require: true
    }
})

mongoose.plugin(slug)
Habit.plugin(mongoose_delete)

const habitModel = db.model('habit', Habit)

module.exports = habitModel