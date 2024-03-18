const User = require('./user');
const Film = require('./film');
const Hall = require('./hall');
const Seat = require('./seat');
const Show = require('./show');
const Booking = require('./booking');

function createAssociations(){
    Hall.hasMany(Seat, {foreignKey: 'hallId'});
    Seat.belongsTo(Hall, {foreignKey: 'hallId'});

    Show.hasMany(Hall, {foreignKey: 'hallId'});
    Hall.belongsTo(Show, {foreignKey: 'hallId'});

    Film.hasMany(Show, {foreignKey: 'filmId'});
    Show.belongsTo(Film, {foreignKey: 'filmId'});

    User.hasMany(Booking, {foreignKey: 'userId'});
    Booking.belongsTo(User, {foreignKey: 'userId'});

    Show.hasMany(Booking, {foreignKey: 'showId'});
    Booking.belongsTo(Show, {foreignKey: 'showId'});

    Booking.hasOne(Seat, {foreignKey: 'seatId'});
    Seat.belongsTo(Booking, {foreignKey: 'seatId'});
}