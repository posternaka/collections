const Sequelize = require('sequelize');
const db = require('../utils/database.js');

const { DataTypes } = Sequelize;

const Like = db.define('like', 
    {
        userId: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        itemId: {
            type: DataTypes.JSON,
            allowNull: false,
        }
    }
);

module.exports = Like;