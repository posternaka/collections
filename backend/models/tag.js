const Sequelize = require('sequelize');
const db = require('../utils/database.js');

const { DataTypes } = Sequelize;

const Tag = db.define("tag", 
    {
        itemId: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        tags: {
            type: DataTypes.JSON,
            defaultValue: [],
            allowNull: false
        }
    }
)

module.exports = Tag;