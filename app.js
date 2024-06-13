const body_parser = require('body-parser')
const userRouter = require('./routers/user.router')
const habitRouter = require('./routers/habit.router')
const dailyRouter = require('./routers/daily.router')

const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.use(body_parser.json())

app.use('/', userRouter)
app.use('/', habitRouter)
app.use('/', dailyRouter)

module.exports = app