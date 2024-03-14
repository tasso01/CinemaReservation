module.exports = {
    username: 'postgres',
    password: 'PostgreIds',
    database: 'CinemaReservation',
    host: 'localhost',
    dialect: 'postgres',
    port: 5432,
    pool: {
        max: 5, //numero massimo di connessioni
        min: 0, //numero minimo di connessioni
    }
};