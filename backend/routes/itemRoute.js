const Router = require('express');
const router = Router();
const itemController = require('../controllers/itemController.js');

router.post('/', itemController.createItem);
router.get('/all/:id', itemController.getItems);
router.get('/:id', itemController.getItem);
router.get('/favorite/:id', itemController.getFavorite);
router.patch('/:id', itemController.updateItem);
router.patch('/favorite/:id', itemController.updateFavorite);
router.delete('/:id', itemController.deleteItem);

module.exports = router;