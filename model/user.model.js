const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const db = require('../config/db')

const { Schema } = mongoose

const userSchema = new Schema({
    username: {
        type: String,
        require: true,
        unique: true
    },
    email: {
        type: String,
        lowercase: true,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
        unique: true
    }
})

userSchema.pre('save', async function() {
    try {
        var user = this
        const salt = await(bcrypt.genSalt(10))
        const hashpass = await bcrypt.hash(user.password, salt)

        user.password = hashpass
    } catch (err) {
        throw err
    }
})

userSchema.methods.comparePassword = async function(userPassword) {
    try {
        const isMatch = await bcrypt.compare(userPassword, this.password)
        return isMatch
    } catch (err) {
        throw err
    }
}

const UserModel = db.model('user', userSchema)

module.exports = UserModel