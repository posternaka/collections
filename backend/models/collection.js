const Sequelize = require('sequelize');
const db = require('../utils/database.js');

const { DataTypes } = Sequelize;

const Collection = db.define("collection", 
    {
        collectionName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        idUser: {
            type: DataTypes.NUMBER,
            allowNull: false
        }
    }
);

module.exports = Collection;