const { Sequelize, DataTypes } =  require('sequelize');
const sequelize = require('../database/connection');
const Show = require('./show');
const Seat = require('./seat');
const User = require('./user');

const Booking = sequelize.define('Booking', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
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
    },
    seatId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Seat,
            key: 'id'
        }
    }
});

module.exports = Booking;