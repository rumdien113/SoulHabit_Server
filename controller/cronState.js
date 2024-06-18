const cron = require('node-cron')
const todoModel = require('../model/todo.model')
const dailyModel = require('../model/daily.model')

// Đặt lại state của tất cả Todo về false vào lúc 0h hàng ngày
cron.schedule('0 0 * * *', async () => {
    try {
        await dailyModel.updateMany({}, { state: false })
        console.log('All Todo states have been reset to false')
    } catch (error) {
        console.error('Error resetting Todo states:', error)
    }
})