const Sequelize = require('sequelize');
const db = require('../utils/database.js');

const { DataTypes } = Sequelize;

const Admin = db.define('admin', 
    {
        
    }
);

module.exports = Admin;