const Router = require('express');
const router = Router();
const itemController = require('../controllers/itemController.js');

router.post('/', itemController.createItem);
router.get('/', itemController.getAllItems);
router.get('/collection/:id', itemController.getCollectionItems);
router.get('/:id', itemController.getItem);
router.patch('/:id', itemController.updateItem);
router.delete('/:id', itemController.deleteItem);

module.exports = router;