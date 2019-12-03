import { NgModule } from '@angular/core';
//import Routes
import { RouterModule, Routes} from '@angular/router';
import { MovieListComponent } from '../feature/movie-list/movie-list.component';
import { ActorListComponent } from '../feature/actor-list/actor-list.component';
import { CastListComponent } from '../feature/cast-list/cast-list.component';
import { MovieCreateComponent } from '../feature/movie-create/movie-create.component';
import { ActorCreateComponent } from '../feature/actor-create/actor-create.component';
import { CastCreateComponent } from '../feature/cast-create/cast-create.component';
import { MovieEditComponent } from '../feature/movie-edit/movie-edit.component';
import { MovieDetailComponent } from '../feature/movie-detail/movie-detail.component';
import { ActorEditComponent } from '../feature/actor-edit/actor-edit.component';
import { ActorDetailComponent } from '../feature/actor-detail/actor-detail.component';
import { CastEditComponent } from '../feature/cast-edit/cast-edit.component';
import { CastDetailComponent } from '../feature/cast-detail/cast-detail.component';

//the paths will NOT be auto-generated
const routes: Routes = [
  {path: '', redirectTo: '/movie-list', pathMatch: 'full'},
  {path: 'home', component: MovieListComponent},
  //movie CRUD
  {path: 'movie/list', component: MovieListComponent},
  {path: 'movie/create', component: MovieCreateComponent},
  {path: 'movie/edit/:id', component: MovieEditComponent},
  {path: 'movie/detail/:id', component: MovieDetailComponent},
  //actor CRUD
  {path: 'actor/list', component: ActorListComponent},
  {path: 'actor/create', component: ActorCreateComponent},
  {path: 'actor/edit/:id', component: ActorEditComponent},
  {path: 'actor/detail/:id', component: ActorDetailComponent},
  //cast CRUD
  {path: 'cast/list', component: CastListComponent},
  {path: 'cast/create', component: CastCreateComponent},
  {path: 'cast/edit/:id', component: CastEditComponent},
  {path: 'cast/detail/:id', component: CastDetailComponent},
  // '**' = catch all. Displays component as default page
  {path: '**', component: MovieListComponent},
]

@NgModule({
  declarations: [],
  //remove CommonModule
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
