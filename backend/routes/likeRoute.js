const Router = require('express');
const router = Router();
const likeController = require('../controllers/likeController.js');

router.post('/', likeController.createLike);
router.get('/:id', likeController.getLike);
router.patch('/:id', likeController.updateLike);

module.exports = router;