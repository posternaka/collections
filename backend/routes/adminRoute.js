const Router = require('express');
const router = Router();
const adminController = require('../controllers/adminController.js');

router.path('/users', adminController.updateUser);
router.delete('/users', adminController.deleteUser);

module.exports = router;