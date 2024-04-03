export class Film{
    id: number;
    title: string;
    director: string;
    description: string;
    duration: number;

    constructor(id: number, title: string, director: string, description: string, duration: number){
        this.id = id;
        this.title = title;
        this.director = director;
        this.description = description;
        this.duration = duration;
    }
}