const config = require('./module.config');

const Sequelize = require('sequelize');

const sequelize = new Sequelize(config.database, config.username, config.password,
{
    host: config.host,
    dialect: config.dialect,
    port: config.port
});

module.exports = sequelize;