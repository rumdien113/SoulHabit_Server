const Daily = require('../model/daily.model')

class DailyController {

    // [POST] /api/daily/store
    async store(req, res, next) {
        const { startDate, every } = req.body
        if (startDate === endDate) {

        }
        const startDateObj = parseISO(startDate)
        if (startDate === endDate) {

        }
        const endDate = addDays(startDateObj, every - 1)
        if (startDate === endDate) {

        }
        const daily = new Daily({
            ...req.body,
            startDate: startDateObj,
            endDate: endDate
        })
        await daily
            .save()
            .then(() => res.json({status: true, success: daily}))
            .catch(next)
    }

    // [GET] /api/daily/getByUserId/:id
    async show(req, res, next) {
        await Daily.find({ userId: req.params.id })
            .then(daily => res.json({ status: 200, success: daily}))
            .catch(next)
    }

    // [DELETE] /api/daily/deleteById/:id
    async delete(req, res, next) {
        Daily.deleteOne({ _id: req.params.id })
            .then(daily => res.json({status: 200, success: daily}))
            .catch(next)
    }

    // [GET] /api/daily/getTaskById:id
    async getTaskById(req, res, next) {
        await Daily.findById(req.params.id)
            .then(daily => res.json({status: 200, success: daily}))
            .catch(next)
    }

    // [PUT] /api/daily/update/:id
    async update(req, res, next) {
        Daily.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.json({status: 200, success: req.body, message: 'Updated successfully'}))
            .catch(next)
    }

    // [PUT] /api/daily/counter/:id/:slug
    async counter(req, res, next) {
        if (req.params.slug == 'increase') {
            await Daily.findOneAndUpdate({ _id: req.params.id }, { $inc: { counter: 1 }})
                .then(daily => res.json({status: 200, success: daily, message: 'Counter increased' }))
                .catch(next)
        } else if (req.params.slug == 'decrease') {
            await Daily.findOneAndUpdate({ _id: req.params.id }, { $inc: { counter: -1}})
                .then(daily => res.json({status: 200, success: daily, message: 'Counter decreased' }))
                .catch(next)
        } else {
            res.json({status: 400, message: 'Invalid slug'})
        }
    }

    // [PUT] /api/daily/reset/:id/:slug
    async reset(req, res, next) {
        const { startDate, endDate } = req.body
        if (startDate === endDate) {
            await Daily.findOneAndUpdate({ _id: req.params.id }, { counter: 0, state: false })
                .then(daily => res.json({status: 200, success: daily, message: 'Counter reset' }))
                .catch(next)
        }
    }

    async updateState(req, res, next) {
        await Daily.findOneAndUpdate({ _id: req.params.id }, { state: req.params.slug })
            .then(daily => res.json({status: 200, success: daily, message: 'State updated' }))
            .catch(next)
    }
}

module.exports = new DailyController()