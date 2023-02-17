const Router = require('express');
const router = Router();
const adminController = require('../controllers/adminController.js');
const roleMiddleware = require('../middleware/roleMiddleware.js');

router.get('/users', roleMiddleware("admin"), adminController.getUsers);
router.patch('/users', adminController.updateUser);
router.delete('/users', adminController.deleteUser);

module.exports = router;