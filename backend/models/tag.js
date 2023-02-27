const Sequelize = require('sequelize');
const db = require('../utils/database.js');

const { DataTypes } = Sequelize;

const Tag = db.define("tag", 
    {
        itemId: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tags: {
            type: DataTypes.JSON,
            defaultValue: [],
            allowNull: false
        }
    }
)

module.exports = Tag;