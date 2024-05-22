const HabitModel = require('../model/habit.model')

class HabitServices {
    static async createHabit(userId, title, note, difficulty, resetCounter, counter) {
        const createHabit = new HabitModel({userId, title, note, difficulty, resetCounter, counter})
        return await createHabit.save()
    }
}

module.exports = HabitServices