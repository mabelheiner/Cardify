const mongoose = require('mongoose')

const cardSchema = mongoose.Schema({
    term: {
        type: String,
        required: true
    },
    definition: {
        type: String,
        required: true
    }
}, {timestamps: true})

const Card = mongoose.model('flashCard', cardSchema)

module.exports = Card