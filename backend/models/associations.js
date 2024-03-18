const Booking = require('./booking');
const Film = require('./film');
const Hall = require('./hall');
const Seat = require('./seat');
const Show = require('./show');
const User = require('./user');

Hall.hasMany(Seat);
Seat.belongsTo(Hall);

Hall.hasMany(Show);
Show.belongsTo(Hall);

Film.hasMany(Show);
Show.belongsTo(Film);

User.hasMany(Booking);
Booking.belongsTo(User);

Show.hasMany(Booking);
Booking.belongsTo(Show);

Seat.hasMany(Booking);
Booking.belongsTo(Seat);