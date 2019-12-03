import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movies.class';
import { JsonResponse } from 'src/app/model/json-response.class';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  title: string = "Movie-List";
  movies: Movie[] = [];
  jr: JsonResponse;

  //add MovieService
  constructor(private movieSvc: MovieService) { }

  ngOnInit() {
    console.log("Calling movie service list...");
    this.movieSvc.list().subscribe(jresp => {
      this.jr = jresp;
      this.movies = this.jr.data as Movie[];
      console.log(this.movies);
    });
  }

}
