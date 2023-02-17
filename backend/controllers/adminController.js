const User = require('../models/user.js');

class adminController {
    async getUsers(req, res) {
        try {
            const users = await User.findAll();
            res.status(200).json(users);
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: "Error getting users."})
        }
    }

    async updateUser(req, res) {
        try {
            const users = await User.bulkCreate(req.body, {
                updateOnDuplicate: ['status', 'role']
            });
            res.status(200).json(users);
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: "Failed to update"});
        }
    }

    async deleteUser(req, res) {
        try {
            await User.destroy({
                where: {
                    id: req.body
                },
            });
            res.status(200).json({ message: 'Successfully' });
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: "Failed to delete"});
        }
    }
    
}

module.exports = new adminController;