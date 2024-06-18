const Habit = require('../model/habit.model')

class HabitController {

    // [POST] /api/habit/store
    async store(req, res, next) {
        const habit = new Habit(req.body)
        await habit
            .save()
            .then(() => res.json({status: true, success: habit}))
            .catch(next)
    }

    // [GET] /api/habit/getByUserId/:id
    async show(req, res, next) {
        await Habit.find({ userId: req.params.id })
            .then(habit => res.json({ status: 200, success: habit}))
            .catch(next)
    }

    // [DELETE] /api/habit/deleteById/:id
    async delete(req, res, next) {
        Habit.deleteOne({ _id: req.params.id })
            .then(habit => res.json({status: 200, success: habit}))
            .catch(next)
    }

    // [GET] /api/habit/getTaskById:id
    async getTaskById(req, res, next) {
        await Habit.findById(req.params.id)
            .then(habit => res.json({status: 200, success: habit}))
            .catch(next)
    }

    // [PUT] /api/habit/update/:id
    async update(req, res, next) {
        Habit.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.json({status: 200, success: req.body, message: 'Updated successfully'}))
            .catch(next)
    }


    // [PUT] /api/habit/counter/:id/:slug
    async counter(req, res, next) {
        if (req.params.slug == 'increase') {
            await Habit.findOneAndUpdate({ _id: req.params.id }, { $inc: { counter: 1 }})
                .then(habit => res.json({status: 200, message: 'Counter increased' }))
                .catch(next)
        } else if (req.params.slug == 'decrease') {
            await Habit.findOneAndUpdate({ _id: req.params.id }, { $inc: { counter: -1}})
                .then(habit => res.json({status: 200, message: 'Counter decreased' }))
                .catch(next)
        } else {
            res.json({status: 400, message: 'Invalid slug'})
        }
    }
}

module.exports = new HabitController()