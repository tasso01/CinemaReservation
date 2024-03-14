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
            type: DataTypes.DATETIME,
            allowNull: false,
        },
        cinemaHallId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'CinemaHall',
                key: 'id',
            },
            onDelete: 'SET NULL'
        },
        filmId: {
            type: DataTypes.INTEGER,
            allowNull: false,
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
    }
);

module.export = Show;