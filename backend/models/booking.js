const { Sequelize, DataTypes } =  require('sequelize');
const sequelize = require('../database/connection');

const Booking = sequelize.define('Booking', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
});

module.exports = Booking;