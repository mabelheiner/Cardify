const express = require('express');
const router = express.Router();

const flashCardController = require('../controllers/flashCard');

router.get('/', flashCardController.getAll);
router.get('/:id', flashCardController.getCard);
router.post('/', flashCardController.createCard);
router.patch('/:id', flashCardController.updateCard);
router.delete('/:id', flashCardController.deleteCard);

module.exports = router;