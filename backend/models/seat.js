const { Sequelize, DataTypes } =  require('sequelize');
const sequelize = require('../database/connection');
const Hall = require('./hall');

const Seat = sequelize.define('Seat', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    number: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    hallId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Hall,
            key: 'id'
        }
    }
});

module.exports = Seat;