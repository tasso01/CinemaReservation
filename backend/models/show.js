const { Sequelize, DataTypes } =  require('sequelize');
const sequelize = require('../database/connection');

const Show = sequelize.define('Show', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
});

module.exports = Show;