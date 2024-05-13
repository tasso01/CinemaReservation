const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database/connection');
const Hall = require('./hall');
const Film = require('./film');

const Show = sequelize.define('Show', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    freeSeats: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    hallId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Hall,
            key: 'id'
        }
    },
    filmId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Film,
            key: 'id'
        }
    }
});

module.exports = Show;