const Router = require('express');
const router = Router();
const collectionController = require('../controllers/collectionController.js');

router.get('/:id', collectionController.getCollections);
router.post('/', collectionController.createCollection);
router.patch('/:id', collectionController.updateCollection);
router.delete('/:id', collectionController.deleteCollection);

module.exports = router;