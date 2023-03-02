const Sequelize = require('sequelize');
const db = require('../utils/database.js');

const { DataTypes } = Sequelize;

const Collection = db.define("collection",
    {
        idUser: {
            type: DataTypes.STRING
        },
        image: {
            type: DataTypes.STRING
        },
        collectionName: {
            type: DataTypes.STRING
        },
        theme: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        },
        settings: {
            type: DataTypes.JSON
        }
    }
);

module.exports = Collection;