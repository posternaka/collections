const Sequelize = require('sequelize');
const db = require('../utils/database.js');

const { DataTypes } = Sequelize;

const Items = db.define('admin', 
    {
        
    }
);

module.exports = Items;