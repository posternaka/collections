const Router = require('express');
const router = Router();
const authController = require('../controllers/authController.js');
const { check } = require('express-validator');
const authMiddleware = require('../middleware/authMiddleware.js');
const roleMiddleware = require('../middleware/roleMiddleware.js');

const errorMessageUsername = "The username cannot be empty.";
const errorMessagePassword = "The password must contain at least 4 characters and not exceed 20.";

router.post('/signup', [ 
    check('username', errorMessageUsername).notEmpty(),
    check('password', errorMessagePassword).isLength({ min: 4, max: 20 })
], authController.signup);
router.post('/signin', authController.signin);
router.get('/users', roleMiddleware("admin"), authController.getUsers);
router.patch('/users', authController.updateUser);
router.delete('/users', authController.deleteUser);

module.exports = router;
