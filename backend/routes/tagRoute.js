const Router = require('express');
const router = Router();
const tagController = require('../controllers/tagController.js');

router.post('/', tagController.createTag);
router.get('/:id', tagController.getItemTags);
router.get('/', tagController.getAllTags);
router.patch('/:id', tagController.updateTag);
router.delete('/:id', tagController.deleteTag);

module.exports = router;