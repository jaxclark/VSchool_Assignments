const express = require('express')
const bountyRouter = express.Router()
const uuid = require("uuid/v4")
const bounties = require('../bounties.json')

bountyRouter.route('/')
    .get((req, res) => {
        res.send(bounties)
    })
    .post((req, res) => {
        req.body._id = uuid()
        bounties.push(req.body)
        res.send(req.body)
    })

bountyRouter.route('/:_id')
    .get((req, res) => {
        const specificBounty = bounties.find(bounty => bounty._id === req.params._id)
        res.send(specificBounty)
    })
    .delete((req, res) => {
        const deletedBounty = bounties.findIndex(bounty => bounty._id === req.params._id)
        bounties.splice(deletedBounty, 1)
        res.send(bounties)
    })
    .put((req, res) => {
        const bountyToUpdate = bounties.find(bounty => bounty._id === req.params._id)
        const bountyIndex = bounties.findIndex(bounty => bounty._id === req.params._id)
        const updatedBounty = Object.assign(bountyToUpdate, req.body)
        bounties.splice(bountyIndex, 1, updatedBounty)
        res.send(bounties)
    })

module.exports = bountyRouter