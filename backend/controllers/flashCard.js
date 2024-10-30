const Card = require('../models/flashCard')

const getAll = async (req, res) => {
    const cards = await Card.find()
    res.json(cards)
}

const getCard = async (req, res) => {
    const card = await Card.findById(req.params.id)
    res.json(card)
}

const createCard = async (req, res) => {
    const card = {
        term: req.body.term,
        definition: req.body.definition
    }

    try {
        const newCard = new Card(card)
        await newCard.save()
        res.json(newCard)
    } catch (error) {
        res.json(error)
    }
    
}

const updateCard = async (req, res) => {
    const card = {
        term: req.body.term,
        definition: req.body.definition
    }

    try {
        const updatedCard = Card.findByIdAndUpdate(req.params.id, card, {new: true})
        res.json(updatedCard)
    } catch (error) {
        res.json(error)
    }
}

const deleteCard = async (req, res) => {
    try {
        const deletedCard = Card.findByIdAndDelete(req.params.id)
        res.json(deletedCard)
    } catch (error) {
        res.json(error)
    }
}

module.exports = {
    getAll,
    getCard,
    createCard,
    updateCard,
    deleteCard
}