const express = require('express');
const app = express();

const sequelize = require('./database/connection');

const bookingRoute = require('./routes/bookingRoute');
const filmRoute = require('./routes/filmRoute');
const hallRoute = require('./routes/hallRoute');
const showRoute = require('./routes/showRoute');
const userRoute = require('./routes/userRoute');

app.use(express.json());

app.use(bookingRoute);
app.use(filmRoute);
app.use(hallRoute);
app.use(showRoute);
app.use(userRoute);

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

const {generateHex} = require('./authentication/crypto');