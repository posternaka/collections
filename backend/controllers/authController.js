const User = require('../models/user.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const { key } = require('../types/key.js');

const generateToken = (id, role) => {
    const payload = { id, role };
    return jwt.sign(payload, key, { expiresIn: '10h'});
}

class authController {
    async signup(req, res) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ message: "Error during registration."});
            }
            const { username, password } = req.body;
            const candidate = await User.findOne({ where: { username }});
            if (candidate) {
                return res.status(400).json({ message: "A user with the same name already exists."});
            }
            const hashPassword = await bcrypt.hashSync(password, 5);
            const user = await User.create({ username, password: hashPassword });
            return res.status(201).json(user);
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: "Sign Up error"})
        }
    }

    async signin(req, res) {
        try {
            const { username, password } = req.body;
            const user = await User.findOne({ where: { username }});
            if (!user) {
                return res.status(400).json({ message: `User ${username} not found.`});
            }
            const validPassword = bcrypt.compareSync(password, user.password);
            if (!validPassword) {
                return res.status(400).json({ message: "Wrong password entered."});
            }
            const token = generateToken(user.id, user.role);
            return res.status(200).json({ 
                token, 
                id: user.id,
                username: user.username,
                role: user.role,
                status: user.status
            });
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: "Sign In error"})
        }
    }

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

module.exports = new authController;