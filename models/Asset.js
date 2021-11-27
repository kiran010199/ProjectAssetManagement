const Sequelize = require('sequelize');
const db = require('../config/database');
//
const Asset = db.define('asset', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    am_id: {
        type: Sequelize.STRING,
        allowNull: false
    },
    am_atype_id: {
        type: Sequelize.STRING,
        allowNull: false
    },
    am_make_id: {
        type: Sequelize.STRING,
        allowNull: false
    },
    am_ad_id: {
        type: Sequelize.STRING,
        allowNull: false
    },
    am_model: {
        type: Sequelize.STRING,
        allowNull: false
    },
    am_snumber: {
        type: Sequelize.STRING,
        allowNull: false
    },
    am_pdate: {
        type: Sequelize.STRING,
        allowNull: false
    },
    am_warranty: {
        type: Sequelize.STRING,
        allowNull: false
    },
    am_from: {
        type: Sequelize.STRING,
        allowNull: false
    },
    am_to: {
        type: Sequelize.STRING,
        allowNull: false
    },
    am_myyear: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Asset;