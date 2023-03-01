const Sequelize = require('sequelize');
const db = require('../utils/database.js');

const { DataTypes } = Sequelize;

const Tag = db.define("tag", 
    {
        tag: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        }
    }
)

module.exports = Tag;