const{DataTypes, Model} = require('sequelize');
const sequelize = require('../database/db');

class Show extends Model {}

Show.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        time: {
            type: DataTypes.TIME,
            allowNull: false,
        },
        cinemaHallId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'CinemaHall',
                key: 'id',
            },
            onDelete: 'SET NULL'
        },
        filmId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'Film',
                key: 'id',
            },
            onDelete: 'SET NULL'
        },
        
    },
    {
        sequelize,
        modelName: "Show",
        timestamps: false,
        force: true,
    }
);

module.export = Show;