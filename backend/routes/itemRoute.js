const Router = require('express');
const router = Router();
const itemController = require('../controllers/itemController.js');

router.post('/', itemController.createItem);
router.get('/all/:id', itemController.getItems);
router.get('/:id', itemController.getItem);
router.patch('/:id', itemController.updateItem);
router.delete('/:id', itemController.deleteItem);

module.exports = router;