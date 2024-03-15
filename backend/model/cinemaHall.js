const{DataTypes, Model} = require('sequelize');
const sequelize = require('../database/db');

class CinemaHall extends Model {}

CinemaHall.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        capacity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {
        sequelize,
        modelName: "CinemaHall",
        timestamps: false,
        force: true,
    }
);

module.export = CinemaHall;