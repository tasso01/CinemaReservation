const express = require('express');
const app = express();

const associations = require('./models/associations');
const sequelize = require('./database/connection');

const filmRoute = require('./routes/filmRoute');

app.use(express.json());

app.use(filmRoute);

sequelize.sync({ force: false })
    .then(() => {console.log("Connessione al Database effettuata")})
    .catch((error) => {console.log("Connessione al Database fallita"+error.message)
});

app.get('/', (req, res) => {
    res.send('Home page')
});

app.listen(3000, () => {
    console.log('Server in ascolto nella porta 3000')
});
