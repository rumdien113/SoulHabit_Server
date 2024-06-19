const Todo = require('../model/todo.model')
const cron = require('node-cron')

class TodoController {

    // [POST] /api/todo/store
    async store(req, res, next) {
        const todo = new Todo(req.body)
        await todo
            .save()
            .then(todo => res.json({ status: true, success: todo }))
            .catch(next)
    }

    // [GET] /api/todo/getByUserId/:id
    async show(req, res, next) {
        await Todo.find({ userId: req.params.id })
            .then(todo => res.json({ status: 200, success: todo }))
            .catch(next)
    }

    // [DELETE] /api/todo/deleteById/:id
    async delete(req, res, next) {
        Todo.deleteOne({ _id: req.params.id })
            .then(res.json({ status: 200, message: 'Delete successfully' }))
            .catch(next)
    }

    // [PUT] /api/todo/update/:id
    async update(req, res, next) {
        Todo.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.json({ status: 200, success: req.body, message: 'Updated successfully' }))
            .catch(next)
    }
}

module.exports = new TodoController()