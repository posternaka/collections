const Router = require('express');
const router = Router();
const collectionController = require('../controllers/collectionController.js');

router.get('/user/:id', collectionController.getUserCollections);
router.get('/', collectionController.getAllCollections);
router.get('/:id', collectionController.getCollection);
router.post('/', collectionController.createCollection);
router.patch('/:id', collectionController.updateCollection);
router.delete('/:id', collectionController.deleteCollection);

module.exports = router;