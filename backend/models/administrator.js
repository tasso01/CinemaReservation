const { Sequelize, DataTypes } =  require('sequelize');
const sequelize = require('../database/connection');

const Administrator = sequelize.define('Administrator', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
});

module.exports = Administrator;

