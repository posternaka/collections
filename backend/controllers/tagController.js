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

    async getItemTags (req, res) {
        try {
            const result = await Tag.findOne(
                {
                    where: {
                        itemId: req.params.id
                    }
                }
            );
            return res.status(200).json(result);
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: 'Failed to get tags.'});
        }
    }

    async getAllTags (req, res) {
        try {
            const result = await Tag.findAll(
                {
                    attributes: ['tags']
                }
            );
            return res.status(200).json(result);
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: 'Failed to get tags.'});
        }
    }

    async updateTag (req, res) {
        try {
            const result = await Tag.update(
                {
                    tags: req.body
                },
                {
                    where: {
                        itemId: req.params.id
                    }
                }
            );
            return res.status(201).json(result);
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: 'Failed to update tag.'});
        }
    }

    async deleteTag (req, res) {
        try {
            await Tag.destroy(
                {
                    where: {
                        id: req.params.id
                    }
                }
            );
            return res.status(201).json({ message: "Tag was successfully deleted."});
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: 'Failed to delete tag.'});
        }
    }
}

module.exports = new tagController;