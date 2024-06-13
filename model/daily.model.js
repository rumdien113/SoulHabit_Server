const db = require('../config/db')
const mongoose = require('mongoose')
const mongoose_delete = require('mongoose-delete')
const slug = require('mongoose-slug-generator')
const UserModel = require('./user.model')
const { Schema } = mongoose

const Daily = new Schema({
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
    startDate: {
        type: Date,
        require: true
    },
    repeats: {
        type: String,
        require: true,
        default: 'Daily'
    },
    every: {
        type: Number,
        require: true,
        default: 1
    },
    counter: {
        type: Number,
        slug: ['increase', 'decrease'],
        require: true,
        default: 0
    }
})

mongoose.plugin(slug)
Daily.plugin(mongoose_delete)

const dailyModel = db.model('daily', Daily)

module.exports = dailyModel