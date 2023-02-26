const Favorite = require('../models/favorite.js');

class favoriteController {
    async addLike (req, res) {
        try {
            const like = await Favorite.create()
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: 'Failed to add like.' })
        }
    }
}

module.exports = new favoriteController;