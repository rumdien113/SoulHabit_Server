const express = require('express')
const router = express.Router()
const HabitController = require('../controller/habit.controller')

router.post('/api/habit/store', HabitController.store)
router.get('/api/habit/getByUserId/:id', HabitController.show)
router.delete('/api/habit/deleteById/:id', HabitController.delete)
router.get('/api/habit/getById/:id', HabitController.getTaskById)
router.put('/api/habit/update/:id', HabitController.update)
router.put('/api/habit/counter/:id/:slug', HabitController.counter)

module.exports = router