import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MovieListComponent } from './feature/movie-list/movie-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ActorListComponent } from './feature/actor-list/actor-list.component';
import { CastListComponent } from './feature/cast-list/cast-list.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { MenuComponent } from './core/menu/menu.component';
import { BaseComponent } from './feature/base/base.component';
import { SortPipe } from './pipe/sort.pipe';
import { MovieCreateComponent } from './feature/movie-create/movie-create.component';
import { ActorCreateComponent } from './feature/actor-create/actor-create.component';
import { CastCreateComponent } from './feature/cast-create/cast-create.component';
import { MovieEditComponent } from './feature/movie-edit/movie-edit.component';
import { MovieDetailComponent } from './feature/movie-detail/movie-detail.component';
import { ActorEditComponent } from './feature/actor-edit/actor-edit.component';
import { ActorDetailComponent } from './feature/actor-detail/actor-detail.component';
import { CastEditComponent } from './feature/cast-edit/cast-edit.component';
import { CastDetailComponent } from './feature/cast-detail/cast-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    ActorListComponent,
    CastListComponent,
    //copy and paste the next three things
    MenuComponent,
    BaseComponent,
    SortPipe,
    MovieCreateComponent,
    ActorCreateComponent,
    CastCreateComponent,
    MovieEditComponent,
    MovieDetailComponent,
    ActorEditComponent,
    ActorDetailComponent,
    CastEditComponent,
    CastDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
