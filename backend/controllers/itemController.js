const Item = require('../models/item.js');
const Collection = require('../models/collection.js');

class itemController {
    async createItem (req, res) {
        try {
            const item = await Item.create(req.body);
            return res.status(201).json(item)
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: 'Failed to create item.'})
        }
    }

    async getAllItems (req, res) {
        try {
            const allItems = await Item.findAll();
            return res.status(200).json(allItems);
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: 'Failed to get items.'})
        }
    }

    async getCollectionItems (req, res) {
        try {
            const collectionItems = await Item.findAll(
                { 
                    where: { 
                        collectionId: req.params.id
                    }
                }
            );
            return res.status(200).json(collectionItems);
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: 'Failed to get items.'})
        }
    }

    async getCountCollectionItems (req, res) {
        try {
            const allItemsById = await Item.findAll({
                attributes: ['collectionId'],
            });

            const groupedItems = allItemsById.reduce((acc, it) => {
                acc[it.collectionId] 
                    ? acc[it.collectionId] = { collectionId: it.collectionId, count: ++acc[it.collectionId].count } 
                    : acc[it.collectionId] = { collectionId: it.collectionId, count: 1 }
                return acc;
            }, {});

            const sortedItems = Object.values(groupedItems).sort((a, b) => b.count - a.count).map(it => +it.collectionId);

            const allItems = await Collection.findAll(
                {
                    limit: 5,
                    where: {
                        id: [...sortedItems]
                    }
                }
            );

            return res.status(200).json(allItems);
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: 'Failed to get items.'})
        }
    }

    async getItem (req, res) {
        try {
            const item = await Item.findOne(
                { 
                    where: { 
                        id: req.params.id
                    },
                }
            );
            return res.status(200).json(item);
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: 'Failed to get item.'});
        }
    }

    async updateItem (req, res) {
        try {
            await Item.update(
                {
                    nameItem: req.body.nameItem,
                    params: req.body.params,
                    tags: req.body.tags
                },
                {
                    where: {
                        id: req.params.id
                    },
                }
            );
            return res.status(200).json({ message: 'Item was successfully update.' })
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: 'Failed to get item.'});
        }
    }

    async deleteItem (req, res) {
        try {
            await Item.destroy({
                where: { 
                    id: req.params.id
                },
            });
            return res.status(200).json({ message: 'Item was successfully deleted.' })
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: 'Failed to create item.'})
        }
    }  
}

module.exports = new itemController;