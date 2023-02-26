const Comment = require('../models/comment.js');

class commentController {
    async createComment (req, res) {
        try {
            const comment = await Comment.create(req.body);
            return res.status(201).json(comment);
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: 'Failed to create comment.' });
        }
    }

    async getComment (req, res) {
        try {
            const comments = await Comment.findAll();
            return res.status(200).json(comments);
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: 'Failed to get comment.' });
        }
    }

    async deleteComment (req, res) {
        try {
            await Comment.destroy(
                {
                    where: {
                        id: req.params.id
                    }
                }
            );
            return res.status(200).json({ message: 'Comment was successfully delete.' });
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: 'Failed to delete comment.' })
        }
    }
}

module.exports = new commentController;