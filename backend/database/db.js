const config = require('./module.config');

const Sequelize = require('sequelize');

const sequelize = new Sequelize(config.database, config.username, config.password,
{
    host: config.host,
    dialect: config.dialect,
    port: config.port
});

module.exports = sequelize;

// Connessione al database
sequelize.authenticate()
  .then(() => {
    console.log('Connessione al database riuscita.');
  })
  .catch(err => {
    console.error('Errore durante la connessione al database:', err);
  });