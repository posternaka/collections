const Tag = require('../models/tag.js');

class tagController {
    async createTag (req, res) {
        try {
            await Tag.create(req.body);
            return res.status(201).json({ message: 'Tag was successfully added.'});
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: 'Failed to add tag.'});
        }
    }

    async getCollectionTags (req, res) {
        try {
            const result = await Tag.findOne(
                {
                    where: {
                        collectionId: req.params.id
                    }
                }
            );
            return res.status(200).json(result);
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: 'Failed to add tag.'});
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
            res.status(400).json({ message: 'Failed to add tag.'});
        }
    }
}

module.exports = new tagController;