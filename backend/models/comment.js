const Sequelize = require('sequelize');
const db = require('../utils/database.js');

const { DataTypes } = Sequelize;

const Comment = db.define('comment', 
    {
        itemId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        userId: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        comment: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }
);

module.exports = Comment;