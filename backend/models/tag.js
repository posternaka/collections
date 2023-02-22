const Sequelize = require('sequelize');
const db = require('../utils/database.js');

const { DataTypes } = Sequelize;

const Tag = db.define('tag', 
    {
        collectionId: {
            type: DataTypes.STRING
        },
        tags: {
            type: DataTypes.JSON,
            allowNull: false
        }
    }
)

module.exports = Tag;