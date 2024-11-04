const express = require('express');
const router = express.Router();

const homeController = require('../controllers/index.js');

router.use('/hello', homeController.hello);
router.use('/users', require('./users.js'));
router.use('/lists', require('./flashCardList.js'));
router.use('/flashcards', require('./flashCard.js'));

module.exports = router;
