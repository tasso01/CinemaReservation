const{DataTypes, Model} = require('sequelize');
const sequelize = require('../database/db');

class Booking extends Model {}

Booking.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'User',
                key: 'id',
            },
            onDelete: 'SET NULL'
        },
        showId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Show',
                key: 'id',
            },
            onDelete: 'SET NULL'
        },
        seatId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Seat',
                key: 'id',
            },
            onDelete: 'SET NULL'
        },
    },
    {
        sequelize,
        modelName: "Booking",
        timestamps: false,
    }
);

module.export = Booking;