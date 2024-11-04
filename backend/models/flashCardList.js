const mongoose = require('mongoose')

const flashCardListSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    flashcardIds: {
        type: [String],
        default: [],
        required: true
    }
}, {timestamps: true})

const FlashCardList = mongoose.model('flashCardList', flashCardListSchema)

module.exports = FlashCardList
