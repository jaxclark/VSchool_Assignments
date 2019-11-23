const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bountySchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: String,
    living: {
        type: Boolean,
        default: true
    },
    bountyAmount: {
        type: Number,
        default: 0
    },
    type: {
        type: String,
        enum: ['Jedi', 'Sith']
    },

})

module.exports = mongoose.model('Bounty', bountySchema)