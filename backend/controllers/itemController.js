const Item = require('../models/item.js');

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

    async getItems (req, res) {
        try {
            const items = await Item.findAll(
                { 
                    where: { 
                        collectionId: req.params.id
                    }
                }
            );
            return res.status(200).json(items);
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: 'Failed to get items.'})
        }
    }

    async getItem (req, res) {
        try {
            const item = await Item.findAll(
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
                    nameItem: req.body.name,
                    params: req.body.params
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