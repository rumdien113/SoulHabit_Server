const TodoModel = require('../models/todo.model')

class TodoServices {
    static async createTodo(userId, title, desc) {
        const createTodo = new TodoModel({userId, title, desc})
        return await createTodo.save()
    }
}

module.exports = TodoServices