const UserService = require('../services/user.services')

exports.register = async(req, res, next) => {
    try {
        const {email, password} = req.body

        const successRes = await UserService.registerUser(email, password)

        res.json({status: true, success:"User Registered successfully"})
    } catch (err) {
        throw err
    }
}

exports.login = async(req, res, next) => {
    try {
        const {email, password} = req.body
        console.log(email, password)
        const user = await UserService.checkUser(email)

        if(!user)
            return ('User not found')
        
        const isMatch = await user.comparePassword(password)
        if (isMatch === false)
            return ('Password InValid')
        
        let tokenData = {
            _id: user._id,
            email: user.email
        }

        const token = await UserService.generateToken(tokenData, "secretKey", '24h')

        res.status(200).json({status: true, token: token})

    } catch (err) {
        throw err
        next(err)
    }
}