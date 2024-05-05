const express = require('express');
const app = express();
app.use(express.json());
const sequelize = require('./database/connection');

const bookingRoute = require('./routes/bookingRoute');
const filmRoute = require('./routes/filmRoute');
const hallRoute = require('./routes/hallRoute');
const showRoute = require('./routes/showRoute');
const userRoute = require('./routes/userRoute');

app.use('/api', bookingRoute);
app.use('/api', filmRoute);
app.use('/api', hallRoute);
app.use('/api', showRoute);
app.use('/api', userRoute);

sequelize.sync({ force: false })
    .then(() => {console.log("Connessione al Database effettuata")})
    .catch((error) => {console.log("Connessione al Database fallita"+error.message)
});

app.listen(3000, () => {
    console.log('Server in ascolto nella porta 3000')
});