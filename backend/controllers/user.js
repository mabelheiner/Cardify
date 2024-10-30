const User = require('../models/user')

const getAll = async (req, res) => {
    const users = await User.find();
    res.json(users)
};

const getUser = async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
}

const createUser = async (req, res) => {
    const user = {
        username: req.body.username,
        email: req.body.email,
        passwordHash: req.body.passwordHash,
        flashCardListIds : req.body.flashCardListIds
    }

    const newUser = new User(user);
    await newUser.save();
    res.json(newUser);
}

const updateUser = async (req, res) => {
    const user = {
        username: req.body.username,
        email: req.body.email,
        passwordHash: req.body.passwordHash,
        flashCardListIds: req.body.flashCardListIds
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, user, {new: true});
        res.json(updatedUser)
    } catch (error) {
        res.json(error)
    }
    
}

const deleteUser = async (req, res) => {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    res.json(deletedUser)
}

module.exports = {
    getAll,
    getUser,
    createUser,
    updateUser,
    deleteUser
}