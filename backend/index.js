const sequelize = require('./database/connection');
const associations = require('./models/associations');



sequelize.sync({ force: true });
