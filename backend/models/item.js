const Sequelize = require('sequelize');
const db = require('../utils/database.js');

const { DataTypes } = Sequelize;

const Item = db.define('item', 
    {
        collectionId: {
            type: DataTypes.STRING
        },
        nameItem: {
            type: DataTypes.STRING,
            allowNull: false
        },
        params: {
            type: DataTypes.JSON,
            allowNull: false
        },
        tags: {
            type: DataTypes.JSON,
            allowNull: false
        }
    }
);

module.exports = Item;