const User = require('../model/user.model')
const jwt = require('jsonwebtoken')

class UserController {
    async register(req, res, next) {
        const user = new User(req.body)
        await user
            .save()
            .then(() => res.json({
                status: true, success: user, message: "User Registered successfully"
            }))
            .catch(next)
    }

    async login(req, res, next) {
        const {email, password} = req.body
        await User
            .findOne({email: email})
            .then(user => {
                if(!user)
                    return res.json({status: false, message: "User not found"})
                if(user.comparePassword(password) === false)
                    return res.json({status: false, message: "Password InValid"})
                let tokenData = {
                    _id: user._id,
                    email: user.email,
                    username: user.username
                }
                
                const token = jwt.sign(tokenData, 'secretKey', {expiresIn: '24h'})

                res.status(200).json({status: true, token: token})
            })
            .catch(next)
    }
}

module.exports = new UserController()
