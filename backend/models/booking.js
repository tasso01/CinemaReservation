const { Sequelize, DataTypes } =  require('sequelize');
const sequelize = require('../database/connection');
const Show = require('./show');
const User = require('./user');

const Booking = sequelize.define('Booking', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    seats: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id'
        }
    },
    showId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Show,
            key: 'id'
        }
    }
});

module.exports = Booking;