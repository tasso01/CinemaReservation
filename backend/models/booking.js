const { Sequelize, DataTypes } =  require('sequelize');
const sequelize = require('../database/connection');

const Booking = sequelize.define('Booking', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: true,
            references: {
                model: 'User',
                key: 'id',
            },
            onDelete: 'SET NULL',
    },
    showId: {
        type: DataTypes.INTEGER,
        allowNull: true,
            references: {
                model: 'Show',
                key: 'id',
            },
            onDelete: 'SET NULL',
    },
    seatId: {
        type: DataTypes.INTEGER,
        allowNull: true,
            references: {
                model: 'Seat',
                key: 'id',
            },
            onDelete: 'SET NULL',
    }
});

module.exports = Booking;