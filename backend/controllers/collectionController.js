const Collection = require('../models/collection.js');

class collectionController {
    async getCollections(req, res) {
        try {
            const collection = await Collection.findAll(
                { 
                    where: { 
                        idUser: req.params.id
                    }
                }
            );
            res.status(200).json(collection);
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: "Collection getting error." });
        }
    };

    async createCollection(req, res) {
        try {
            const collection = await Collection.create(req.body);
            return res.status(201).json(collection);
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: "Collection creation error." });
        }
    }
}

module.exports = new collectionController;