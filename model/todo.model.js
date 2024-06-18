const db = require('../config/db')
const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')
const UserModel = require('./user.model')
const { Schema } = mongoose

const Todo = new Schema({
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
        require: true,
        default: 'Easy'
    },
    dueDate: {
        type: Date,
        require: true,
        default: Date.now()
    },
})

mongoose.plugin(slug)

const todoModel = db.model('todo', Todo)

module.exports = todoModel