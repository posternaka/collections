const Sequelize = require('sequelize');
const db = require('../utils/database.js');

const { DataTypes } = Sequelize;

const User = db.define("users", 
    {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "user"
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "unblock"
        }
    }
);

module.exports = User;