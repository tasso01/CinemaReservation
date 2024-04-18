export class Booking{
    id: number;
    seats: number;
    price: number;
    userId: number;
    showId: number;

    constructor(id: number, seats: number, price: number, userId: number, showId: number){
        this.id = id;
        this.seats = seats;
        this.price = price;
        this.userId = userId;
        this.showId = showId;
    }
}