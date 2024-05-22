const Habit = require('../model/habit.model')
const HabitServices = require('../services/habit.services')

class HabitController {

    // [POST] /api/habit/store
    async store(req, res, next) {
        habit = new Habit(req.body)
        await habit
            .save()
            .then(() => res.json({status: true, success: habit}))
            .catch(next)
    }

    // [GET] /api/habit/:id
    async show(req, res, next) {
        Habit.find({ userId: req.params.id })
            .then(habit => res.json({ status: 200, success: habit}))
            .catch(next)
    }
}

module.exports = new HabitController()

// exports.createHabit = async (req, res, next) => {
//     try {
//         const {userId, title, note, difficulty, resetCounter, counter} = req.body

//         let habit = await HabitServices.createHabit(userId, title, note, difficulty, resetCounter, counter)

//         res.json({status:true, success: habit})
//     } catch (err) {
//         next(err)
//     }
// }