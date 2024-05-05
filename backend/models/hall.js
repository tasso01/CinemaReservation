const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

const Hall = sequelize.define('Hall', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    number: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },
    capacity: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Hall;