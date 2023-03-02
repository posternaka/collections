const Sequelize = require('sequelize');

const DB_NAME = 'fao9awy7fahdlvxv';
const USER_NAME = 's0dzs2sybqxan3e5';
const PASSWORD = 'cgupnmkm8cjg0drm';

const db = new Sequelize(DB_NAME, USER_NAME, PASSWORD, {
    host: 'n2o93bb1bwmn0zle.chr7pe7iynqr.eu-west-1.rds.amazonaws.com',
    dialect: 'mysql'
});

module.exports = db;