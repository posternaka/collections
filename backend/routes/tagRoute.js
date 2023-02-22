const Router = require('express');
const router = Router();
const tagController = require('../controllers/tagController.js');

router.post('/', tagController.createTag);
router.get('/:id', tagController.getCollectionTags);
router.get('/', tagController.getAllTags);

module.exports = router;