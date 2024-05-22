const express = require('express')
const router = express.Router()
const HabitController = require('../controller/habit.controller')

router.post('/api/habit/store', HabitController.store)
router.get('/api/habit/:id', HabitController.show)

module.exports = router