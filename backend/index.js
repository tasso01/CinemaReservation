const express = require('express');
const app = express();

const associations = require('./models/associations');
const sequelize = require('./database/connection');

const bookingRoute = require('./routes/bookingRoute');
const filmRoute = require('./routes/filmRoute');
const hallRoute = require('./routes/hallRoute');
const seatRoute = require('./routes/seatRoute');
const showRoute = require('./routes/showRoute');


app.use(express.json());

app.use(bookingRoute);
app.use(filmRoute);
app.use(hallRoute);
app.use(seatRoute);
app.use(showRoute);


sequelize.sync({ force: true })
    .then(() => {console.log("Connessione al Database effettuata")})
    .catch((error) => {console.log("Connessione al Database fallita"+error.message)
});

app.get('/', (req, res) => {
    res.send('Home page')
});

app.listen(3000, () => {
    console.log('Server in ascolto nella porta 3000')
});