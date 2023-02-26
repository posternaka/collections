const Sequelize = require('sequelize');
const db = require('../utils/database.js');

const { DataTypes } = Sequelize;

const Collection = db.define("collection",
    {
        idUser: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        },
        collectionName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        theme: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        settings: {
            type: DataTypes.JSON,
            allowNull: false
        }
    }
);

module.exports = Collection;