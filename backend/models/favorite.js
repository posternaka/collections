const Sequelize = require('sequelize');
const db = require('../utils/database.js');

const { DataTypes } = Sequelize;

const Favorite = db.define('favorite', 
    {
        itemId: {
            type: DataTypes.NUMBER,
            allowNull: false
        },
        userId: {
            type: DataTypes.JSON,
            allowNull: false
        }
    }
);

module.exports = Favorite;