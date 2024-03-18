const { Sequelize, DataTypes } =  require('sequelize');
const sequelize = require('../database/connection');

const Booking = sequelize.define('Booking', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
});

module.exports = Booking;