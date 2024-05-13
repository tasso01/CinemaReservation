export class Film {
  id: number;
  title: string;
  director: string;
  description: string;
  duration: number;
  image: string;

  constructor(
    id: number,
    title: string,
    director: string,
    description: string,
    duration: number,
    image: string
  ) {
    this.id = id;
    this.title = title;
    this.director = director;
    this.description = description;
    this.duration = duration;
    this.image = image;
  }
}
