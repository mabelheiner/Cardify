const FlashCardList = require('../models/flashCardList');

const getAll = async (req, res) => {
    const lists = await FlashCardList.find()
    res.json(lists)
}

const getList = async (req, res) => {
    const list = await FlashCardList.findById(req.params.id)
    res.json(list)
}

const createList = async (req, res) => {
    const list = {
        name: req.body.name,
        flashcardIds: req.body.flashcardIds,
        createdAt: req.body.createdAt
    }

    try {
        const newList = new FlashCardList(list)
        await newList.save()
        res.json(newList)
    } catch (error) {
        res.json(error)
    }
}

const updateList = async (req, res) => {
    const list = {
        flashcardIds: req.body.flashcardIds
    }

    try {
        const updatedList = await FlashCardList.findByIdAndUpdate(req.params.id, list, {new: true})
        res.json(updatedList)
    } catch (error) {
        res.json(error)        
    }
}

const deletList = async (req, res) => {
    try {
        const deletedList = await FlashCardList.findByIdAndDelete(req.params.id)
        res.json('List deleted')
    } catch (error) {
        res.json(error)
    }
}

module.exports = {
    getAll,
    getList,
    createList,
    updateList,
    deletList
}