const Collection = require('../models/collection.js');

class collectionController {
    async getCollections(req, res) {
        try {
            const collection = await Collection.findAll(
                { 
                    where: { 
                        idUser: req.params.id
                    },
                    raw: true, 
                    nest:true
                }
            );
            res.status(200).json(collection);
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: "Failed to get collection." });
        }
    };

    async createCollection(req, res) {
        try {
            const collection = await Collection.create(req.body);
            return res.status(201).json(collection);
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: "Failed to create collection." });
        }
    }

    async updateCollection(req, res) {
        try {
            const result = await Collection.update(
                {
                    collectionName: req.body.collectionName,
                    theme: req.body.theme,
                    description: req.body.description,
                    settings: req.body.settings
                },
                {
                    where: {
                        id: req.params.id
                    },
                }
            );
            return res.status(200).json(result);
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: "Failed to update collection." });
        }
    }

    async deleteCollection(req, res) {
        try {
            await Collection.destroy(
                {
                    where: {
                        id: req.params.id
                    }
                }
            )
            return res.status(200).json({ message: "Collection has been deleted."})
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: "Failed to delete collection." });
        }
    }
}

module.exports = new collectionController;