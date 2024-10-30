const mongoose = require('mongoose')

const flashCardListSchema = mongoose.Schema({
    flashcardIds: {
        type: [String],
        default: [],
        required: true
    }
})

const FlashCardList = mongoose.model('flashCardList', flashCardListSchema)

module.exports = FlashCardList
