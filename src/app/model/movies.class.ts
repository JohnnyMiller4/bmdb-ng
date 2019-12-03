export class Movie {
    id: number;
    name: string;
    year: number;
    rating: string;
    director: string;

    constructor(id: number = 0, name: string = "", year: number = 0,
                rating: string = "", director: string = "") {
        this.id = id;
        this.name = name;
        this.year = year;
        this.rating = rating;
        this.director = director;
    }
}