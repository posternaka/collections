const Sequelize = require('sequelize');

const DB_NAME = 'collection';
const USER_NAME = 'root';
const PASSWORD = 'mysqlnodejs';

const db = new Sequelize(DB_NAME, USER_NAME, PASSWORD, {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = db;