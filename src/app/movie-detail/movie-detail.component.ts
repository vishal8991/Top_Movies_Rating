import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { Location } from '@angular/common';
import { CommentService } from '../comment.service';
import { Comment } from '../comment';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  @Input() movie?: Movie;
  rateMovie: boolean;
  rateFlag: boolean;
  movieComment: Comment;
  avgRating: number;
  num: number;
  constructor(
    private movieService: MovieService,
    private location: Location,
    private route: ActivatedRoute,
    private commentService: CommentService
  ) { }

  ngOnInit(): void {
    this.getMovie();
    this.rateMovie = true;
    //this.movieRatings();   
  }

  isRated(i : number): boolean{
      if(this.movie.comments[i].comment == '' || this.movie.comments[i].rating == 0){
        return false;
      }
      return true;
  }

  movieRatings(): number{
    this.avgRating = 0;
    
    for (let index = 0; index < this.movie.comments.length; index++) {
      this.num = parseInt(this.movie.comments[index].rating.toString());  
      this.avgRating += this.num/this.movie.comments.length;
    }
    console.log(this.avgRating.toPrecision(2));
    return parseFloat(this.avgRating.toFixed(1));
  }

  getMovie(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    
    this.movieService.getMovie(id).subscribe(movie => this.movie = movie);
    //console.log("movie.user: "+this.movie.comments[0]);
  }

  goBack(): void{
    this.location.back();
  }

  save(): void{
    this.movieService.updateHero(this.movie).subscribe();
    this.rateMovie = false;
  }

  add(comment: string, rating: number, userName: string): void{
    if(comment == ''){
      alert("Please enter your views in the comment box!!");
      return;
    }
    if(rating == 0){
      alert("Please select rating value!!");
      return;
    }
    this.movieComment = new Comment();
    this.movieComment.comment = comment;
    this.movieComment.rating = rating;
    this.movieComment.username = userName;
    this.commentService.add(this.movieComment);
    this.rateMovie = false;
  }

}
