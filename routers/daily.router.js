const express = require('express')
const router = express.Router()
const DailyController = require('../controller/daily.controller')

router.post('/api/daily/store', DailyController.store)
router.get('/api/daily/getByUserId/:id', DailyController.show)
// router.delete('/api/habit/deleteById/:id', HabitController.delete)
// router.get('/api/habit/getById/:id', HabitController.getTaskById)
// router.put('/api/habit/update/:id', HabitController.update)
// router.put('/api/habit/counter/:id/:slug', HabitController.counter)

module.exports = router