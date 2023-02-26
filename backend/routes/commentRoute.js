const Router = require('express');
const router = Router();
const commentController = require('../controllers/commentController.js');

router.post('/', commentController.createComment);
router.get('/', commentController.getComment);
router.delete('/:id', commentController.deleteComment);

module.exports = router;