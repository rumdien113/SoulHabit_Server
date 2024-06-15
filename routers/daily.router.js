const express = require('express')
const router = express.Router()
const DailyController = require('../controller/daily.controller')

router.post('/api/daily/store', DailyController.store)
router.get('/api/daily/getByUserId/:id', DailyController.show)
router.delete('/api/daily/deleteById/:id', DailyController.delete)
router.get('/api/daily/getById/:id', DailyController.getTaskById)
router.put('/api/daily/update/:id', DailyController.update)
router.put('/api/daily/counter/:id/:slug', DailyController.counter)
router.put('/api/daily/state/:id/:slug', DailyController.updateState)

module.exports = router