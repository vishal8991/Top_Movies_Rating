import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import users from '../_files/Users.json';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: Movie[];
  public userList: {uid: number, name: string, password: string}[] = users;
  parsedJSON: any;
  public uName: string;
  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {  
    this.getMovies();
    this.getUser();
  }

  getUser(): void{
    const id = Number(this.route.snapshot.paramMap.get('uid'));
    //console.log("ID: "+id+" & uid: "+this.userList[0].uid);
    for (let index = 0; index < this.userList.length; index++) {
      if(this.userList[index].uid == id){
        this.uName = this.userList[index].name;
      }
    }    
  }

  getMovies(): void{
    this.movieService.getMovies().subscribe(movies => this.movies = movies);
  }

}
