import { Component, OnInit } from '@angular/core';
import { Cast } from 'src/app/model/cast';
import { CastService } from 'src/app/service/cast.service';
import { Router } from '@angular/router';
import { Movie } from 'src/app/model/movies.class';
import { Actor } from 'src/app/model/actor.class';
import { MovieService } from 'src/app/service/movie.service';
import { ActorService } from 'src/app/service/actor.service';

@Component({
  selector: 'app-cast-create',
  templateUrl: './cast-create.component.html',
  styleUrls: ['./cast-create.component.css']
})
export class CastCreateComponent implements OnInit {
  title: string = 'Cast Create';
  cast: Cast = new Cast();
  movies: Movie[] = [];
  actors: Actor[] = [];

  constructor(private castSvc: CastService,
              private movieSvc: MovieService,
              private actorSvc: ActorService,
              private router: Router) { }

  ngOnInit() {
    //populate list of movies
    this.movieSvc.list().subscribe(jr => {
      this.movies = jr.data as Movie[];
      console.log("movies: ", this.movies)
    });
    //populate list of actors
    this.actorSvc.list().subscribe(jr => {
      this.actors = jr.data as Actor[];
      console.log("actors: ", this.actors);
    });
  }

  save(): void {
    this.castSvc.save(this.cast).subscribe(jr => {
      console.log("saved cast...");
      console.log(this.cast);
      this.router.navigateByUrl("cast/list");
    });
  }



}
