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
            allowNull: true,
            references: {
                model: 'User',
                key: 'id',
            },
            onDelete: 'SET NULL'
        },
        showId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'Show',
                key: 'id',
            },
            onDelete: 'SET NULL'
        },
        seatId: {
            type: DataTypes.INTEGER,
            allowNull: true,
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
        force: true,
    }
);

module.export = Booking;