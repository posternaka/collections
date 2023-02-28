const Like = require('../models/like.js');

class likeController {
    async createLike (req, res) {
        try {
            const like = await Like.create(req.body);
            return res.status(201).json(like);
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: 'Failed to add like.'});
        }
    }

    async getLike (req, res) {
        try {
            const like = await Like.findOne(
                {
                    where: {
                        itemId: req.params.id
                    }
                }
            );
            return res.status(200).json(like);
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: 'Failed to add like.'});
        }
    }

    async updateLike (req, res) {
        try {
            const like = await Like.update(
                {
                    like: req.body
                },
                {
                    where: {
                        itemId: req.params.id
                    }
                }
            );
            return res.status(200).json(like);
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: 'Failed to update like.'});
        }
    }

}

module.exports = new likeController;