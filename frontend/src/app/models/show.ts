export class Show{
    id: number;
    date: Date;
    price: number;
    hallId: number;
    filmId: number;

    constructor(id: number, date: Date, price: number, hallId: number, filmId: number){
        this.id = id;
        this.date = date;
        this.price = price;
        this.hallId = hallId;
        this.filmId = filmId;
    }
}