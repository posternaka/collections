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
        favorite: {
            type: DataTypes.JSON,
            defaultValue: [],
            allowNull: false
        }
    }
);

module.exports = Item;