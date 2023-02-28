const Sequelize = require('sequelize');
const db = require('../utils/database.js');

const { DataTypes } = Sequelize;

const Like = db.define('like', 
    {
        itemId: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userId: {
            type: DataTypes.JSON,
            defaultValue: [],
            allowNull: false
        }
    }
);

module.exports = Like;