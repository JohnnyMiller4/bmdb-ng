import { Component, OnInit } from '@angular/core';
import { Cast } from 'src/app/model/cast';
import { CastService } from 'src/app/service/cast.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Movie } from 'src/app/model/movies.class';
import { Actor } from 'src/app/model/actor.class';
import { MovieService } from 'src/app/service/movie.service';
import { ActorService } from 'src/app/service/actor.service';

@Component({
  selector: 'app-cast-detail',
  templateUrl: './cast-detail.component.html',
  styleUrls: ['./cast-detail.component.css']
})
export class CastDetailComponent implements OnInit {
  title: string = "Cast Detail";
  cast: Cast = new Cast();
  movies: Movie[] = [];
  actors: Actor[] = [];
  id: number = 0;

  constructor(private castSvc: CastService,
              private movieSvc: MovieService,
              private actorSvc: ActorService,
              private router: Router,
              private route: ActivatedRoute,
              private loc: Location) { }

  ngOnInit() {
    //get the id from the url
    this.route.params.subscribe(parms => this.id = parms['id']);
    //get the movie from the movie service
    this.castSvc.get(this.id).subscribe(jr => {
      this.cast = jr.data as Cast;
    });
    //populate list of movies
    this.movieSvc.list().subscribe(jr => {
      this.movies = jr.data as Movie[];
      console.log("movies: ", this.movies)
    });
    //populate list of actors
    this.actorSvc.list().subscribe(jr => {
      this.actors = jr.data as Actor[];
      console.log("actors: ", this.actors)
    });
  }

  delete() {
    this.castSvc.delete(this.id).subscribe(jr => {
      console.log("cast delete jr: ", jr);
      //Sean owes fix here
      if (jr.errors != null) {
        console.log("Error deleting cast: "+jr.errors)
      }
      this.router.navigateByUrl("cast/list");
    });
  }

  compMovie(a: Movie, b: Movie): boolean {
    return a && b && a.id == b.id;
  }
  
  compActor(a: Actor, b: Actor): boolean {
    return a && b && a.id == b.id;
  }

  backClicked() {
    this.loc.back();
  }

}
