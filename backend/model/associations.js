const CinemaHall = require('./cinemaHall');
const Booking = require('./booking');
const User = require('./user');
const Seat = require('./seat');
const Show = require('./show');
const Film = require('./film');

function createAssociations(){

    Seat.belongsTo(CinemaHall, {foreignKey: 'cinemaHallId'});
    CinemaHall.hasMany(Seat, {foreignKey: 'cinemaHallId'});

    Show.belongsTo(CinemaHall, {foreignKey: 'cinemaHallId'});
    CinemaHall.hasMany(Show, {foreignKey: 'cinemaHallId'});

    Show.belongsTo(Film, {foreignKey: 'filmId'});
    Film.hasMany(Show, {foreignKey: 'filmId'});

    Booking.belongsTo(User, {foreignKey: 'userId'});
    User.hasMany(Booking, {foreignKey: 'userId'});

    Booking.belongsTo(Show, {foreignKey: 'showId'});
    Show.hasMany(Booking, {foreignKey: 'showId'});

    Booking.belongsTo(Seat, {foreignKey: 'seatId'});
    Seat.hasMany(Booking, {foreignKey: 'seatId'});
}

module.exports = createAssociations;