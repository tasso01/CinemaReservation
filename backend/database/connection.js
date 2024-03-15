const { Sequelize } = require('sequelize');
const config = require('./config');
const sequelize = new Sequelize(config);

sequelize.authenticate().then(() => {
    console.log('Connected to the database.');
}).catch((error) => {
    console.error('Unable to connect to the database:', error);
});