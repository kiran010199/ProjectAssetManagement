const { Sequelize } = require('sequelize');
const db = new Sequelize('assetmanage', 'user', 'pass', {
    host: 'localhost',
    dialect: 'sqlite',
    storage : 'asset.sqlite',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

module.exports = db;