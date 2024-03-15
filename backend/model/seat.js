const{DataTypes, Model} = require('sequelize');
const sequelize = require('../database/db');

class Seat extends Model {}

Seat.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        number: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        state: {
            type: DataTypes.BOOLEAN,
            default: false,
        },
        cinemaHallId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'CinemaHall',
                key: 'id',
            },
            onDelete: 'CASCADE'
        },
    },
    {
        sequelize,
        modelName: "Seat",
        timestamps: false,
        force: true,
    }
);
module.export = Seat;