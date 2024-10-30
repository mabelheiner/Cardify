const express = require('express')
const router = express.Router();

const flashCardListController = require('../controllers/flashCardList');

router.get('/', flashCardListController.getAll);
router.get('/id', flashCardListController.getList);
router.post('/', flashCardListController.createList)
router.patch('/:id', flashCardListController.updateList);
router.delete('/id', flashCardListController.deletList)

module.exports = router;