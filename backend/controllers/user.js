const User = require('../models/user')
const bcrypt = require('bcrypt')

const hashPassword = async (originalPassword) => {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(originalPassword, saltRounds);
    return hashedPassword
}

const getAll = async (req, res) => {
    const users = await User.find();
    res.json(users)
};

const getUser = async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
}


const login = async (req, res) => {
    console.log('Req body', req.body)
    try {
        const response = await User.findOne({email: req.body.email})
        console.log("Account found", response)

        if (response) {
            const match = await bcrypt.compare(req.body.password, response.passwordHash)
            console.log('Match', match)
            if (match == true) {
                return res.status(200).json({response})
            }
            else {
                return res.status(401).json({response})
            }
        }
        else {
            console.log('Response is ', response)
            return res.status(401).json({message: 'Account not found'})
        }
    } catch (error) {
        console.log('Account not found')
    }
}

const createUser = async (req, res) => {
    const passwordHash = await hashPassword(req.body.password)
    /* const compareHash = "test";
    const match = await bcrypt.compare(compareHash, passwordHash)
    console.log('passwordHash match', match) */
    const user = {
        username: req.body.username,
        email: req.body.email,
        passwordHash: passwordHash,
    }

    const newUser = new User(user);
    await newUser.save();
    res.json(newUser);
}

const updateUser = async (req, res) => {
    const passwordHash = await hashPassword(req.body.password)
    const user = {
        username: req.body.username,
        email: req.body.email,
        passwordHash: passwordHash,
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
    res.json('User deleted')
}

module.exports = {
    getAll,
    getUser,
    login,
    createUser,
    updateUser,
    deleteUser
}