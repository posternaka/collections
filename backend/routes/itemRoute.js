const Router = require('express');
const router = Router();
const itemController = require('../controllers/itemController.js');

router.post('/', itemController.createItem);
router.get('/', itemController.getAllItems);
router.get('/count', itemController.getCountCollectionItems);
router.get('/last', itemController.getLastItems);
router.get('/collection/:id', itemController.getCollectionItems);
router.get('/:id', itemController.getItem);
router.get('/sort/:id', itemController.sortBy);
router.get('/filter/:id', itemController.filterName);
router.patch('/:id', itemController.updateItem);
router.delete('/:id', itemController.deleteItem);

module.exports = router;