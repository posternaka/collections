const Router = require('express');
const router = Router();
const tagController = require('../controllers/tagController.js');

router.post('/', tagController.createTag);
router.get('/', tagController.getTags);
router.get('/last', tagController.getLastTags);

module.exports = router;