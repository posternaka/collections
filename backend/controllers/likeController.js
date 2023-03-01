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
            const likes = await Like.findOne(
                {
                    where: {
                        userId: req.params.id
                    }
                }
            );
            return res.status(200).json(likes);
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: 'Failed to add like.'});
        }
    }

    async deleteLike (req, res) {
        try {
            const like = await Like.update(
                {
                    itemId: req.body
                },
                {
                    where: {
                        userId: req.params.id
                    }
                }
            );
            return res.status(200).json(like);
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: 'Failed to delete like.'});
        }
    }
}

module.exports = new likeController;