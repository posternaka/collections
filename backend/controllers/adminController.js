const User = require('../models/user.js');

class adminController {
    async updateUser(req, res) {
        try {
            await User.bulkCreate(req.body, {
                updateOnDuplicate: ['status']
            });
            res.status(200).json({ message: 'Users updated' });
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: "Failed to update"});
        }
    }

    async deleteUser() {
        try {
            
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: "Failed to delete"});
        }
    }
}

module.exports = new adminController;