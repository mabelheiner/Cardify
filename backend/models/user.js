const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: {
        type: String, 
        required: true
    },
    email: {
        type: String,
        required: true
    },
    passwordHash: {
        type: String,
        required: true
    },
    flashCardListIds : {
        type: [String],
        default: [],
        required: true
    }
}, {timestamps: true})

const User = mongoose.model('User', userSchema)

module.exports = User