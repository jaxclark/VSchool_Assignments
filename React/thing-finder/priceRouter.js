const express = require('express')
const priceRouter = express.Router()
const plantsDB = require('./plants.json')

priceRouter.route('/')
    .get((req, res) => {
        if(req.query.minPrice) {
            res.send('min price:', plantsDB.filter(plant => plant.price >= +req.query.price))
        } else if(req.query.maxPrice) {
            res.send('max price:', plantsDB.filter(plant => plant.price <= +req.query.price))
        } else if(req.query.minPrice && req.query.maxPrice) {
            const mins = plantsDB.filter(plant => plant.price >= +req.query.price)
            res.send(mins.filter(plant => plant.price <= +req.query.price))
        } else {
            res.send(plantsDB)
        }
    })

module.exports = priceRouter