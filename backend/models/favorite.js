const Sequelize = require('sequelize');
const db = require('../utils/database.js');

const { DataTypes } = Sequelize;

const Favorite = db.define('favorite', 
    {
        collectionId: {
            type: DataTypes.STRING
        },
        nameItem: {
            type: DataTypes.STRING,
            allowNull: false
        },
        likes: {
            type: DataTypes.JSON,
            allowNull: false
        }
    }
);

module.exports = Favorite;