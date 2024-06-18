const express = require('express')
const router = express.Router()
const TodoController = require('../controller/todo.controller')

router.post('/api/todo/store', TodoController.store)
router.get('/api/todo/getByUserId/:id', TodoController.show)
router.delete('/api/todo/delete/:id', TodoController.delete)
router.put('/api/todo/update/:id', TodoController.update)

module.exports = router