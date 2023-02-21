const Sequelize = require('sequelize');
const db = require('../utils/database.js');

const { DataTypes } = Sequelize;

const Item = db.define('item', 
    {
        collectionId: {
            type: DataTypes.STRING
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        params: {
            type: DataTypes.JSON,
            allowNull: false
        }
    }
);

module.exports = Item;