import { Component, OnInit } from '@angular/core';
import { Cast } from 'src/app/model/cast';
import { Movie } from 'src/app/model/movies.class';
import { Actor } from 'src/app/model/actor.class';
import { CastService } from 'src/app/service/cast.service';
import { MovieService } from 'src/app/service/movie.service';
import { ActorService } from 'src/app/service/actor.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cast-edit',
  templateUrl: './cast-edit.component.html',
  styleUrls: ['./cast-edit.component.css']
})
export class CastEditComponent implements OnInit {
  title: string = 'Cast Edit';
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
    this.route.params.subscribe(parms => this.id = parms['id']);
    //get cast for the id passed in
    this.castSvc.get(this.id).subscribe(jr => {
      this.cast = jr.data as Cast;
      console.log("Cast to edit: ",this.cast)
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

  save(): void {
    this.castSvc.save(this.cast).subscribe(jr => {
      console.log("saved cast...");
      console.log(this.cast);
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