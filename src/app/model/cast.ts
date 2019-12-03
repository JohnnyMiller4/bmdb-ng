import { Actor } from './actor.class';
import { Movie } from './movies.class';

export class Cast {
    id: number;
    movie: Movie;
    actor: Actor;
    role: string;

    constructor(id: number = 0, movie: Movie = new Movie(), actor: Actor = new Actor(), role: string = "") {
        this.id = id;
        this.movie = movie;
        this.actor = actor;
        this.role = role;
    }

    // actorName(): string {
    //     return this.actor.lastName;
    // }
}
