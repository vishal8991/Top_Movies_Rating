import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MoviesComponent } from './movies/movies.component';
import { UserLoginComponent } from './user-login/user-login.component';

const routes: Routes = [
  {path: 'movies/:uid', component: MoviesComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'details/:id', component: MovieDetailComponent},
  {path: 'login', component: UserLoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
