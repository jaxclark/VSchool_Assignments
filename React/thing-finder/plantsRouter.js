const express = require('express')
const plantsRouter = express.Router()
const plantsDB = require('./plants.json')
const uuid = require('uuid/v4')

plantsRouter.route('/')
    .get((req, res) => {
        if(req.query.family){
            res.send(plantsDB.filter(plant => plant.family === req.query.family))
        } else if(req.query.variety){
            res.send(plantsDB.filter(plant => plant.variety === req.query.variety))
        } else if(req.query.name){
            res.send(plantsDB.filter(plant => plant.name === req.query.name))
        } else if(req.query.commonName){
            res.send(plantsDB.filter(plant => plant.commonName === req.query.commonName))
        } else {
            res.send(plantsDB)
        }
    })
    .post((req, res) => {
        req.body._id = uuid()
        plantsDB.push(req.body)
        res.send(plantsDB)
    })

plantsRouter.route('/:_id')
    .get((req, res) => {
        const specificPlant = plantsDB.find(plant => plant._id === req.params._id)
        res.send(specificPlant)
    })
    .delete((req, res) => {
        let deletedPlant = plantsDB.findIndex(plant => plant._id === req.params._id)
        plantsDB.splice(deletedPlant, 1)
        res.send(plantsDB)
    })
    .put((req, res) => {
        let updatedPlant = req.body
        plantsDB.forEach(plant => plant._id === req.params._id && Object.assign(plant, updatedPlant))
        res.send(plantsDB)
    })

module.exports = plantsRouter