const Tag = require('../models/tag.js');

class tagController {
    async createTag (req, res) {
        try {
            const tag = await Tag.create(req.body);
            return res.status(201).json(tag);
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: 'Failed to add tag.'});
        }
    }

    async getTags (req, res) {
        try {
            const result = await Tag.findAll();
            return res.status(200).json(result);
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: 'Failed to get tags.'});
        }
    }
}

module.exports = new tagController;