import { Injectable } from '@angular/core';
import { Comment } from './comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  comment: Comment[] = [];
  constructor() { }
  add(comment: Comment){
    this.comment.push(comment);
    console.log("Comment added successfully!!");
  }
}
