export class Show{
    id: number;
    date: Date;
    price: number;
    freeSeats: number;
    hallId: number;
    filmId: number;

    constructor(id: number, date: Date, price: number, freeSeats: number, hallId: number, filmId: number){
        this.id = id;
        this.date = date;
        this.price = price;
        this.freeSeats = freeSeats;
        this.hallId = hallId;
        this.filmId = filmId;
    }
}