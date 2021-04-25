import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import users from '../_files/Users.json';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  public userList: {uid: number, name: string, password: string}[] = users;
  isError: boolean;
  errorStatus: string;
  isUserValid: boolean;
  @ViewChild('useridInput') reviewsInput : ElementRef;
  @ViewChild('passwdInput') passwdInput : ElementRef;
  constructor(
    private router: Router,
    private routerLink: Router
  ) { }

  ngOnInit(): void {
    //console.log(this.reviewsInput.nativeElement.value);
  }

  onSubmit(): void{
    //console.log(this.reviewsInput.nativeElement.value);
    const id = this.reviewsInput.nativeElement.value;
    const passwd = this.passwdInput.nativeElement.value;
    if(id == ''){
      this.errorStatus = 'Please enter Login ID!!';
          this.isError = true;
          return;
    }
    if(passwd == ''){
      this.errorStatus = 'Please enter Password!!';
          this.isError = true;
          return;
    }
    for (let index = 0; index < this.userList.length; index++) {
      //console.log(id +" / "+ this.userList[index].uid +" / "+ passwd +" / "+ this.userList[index].password);
      if(id == this.userList[index].uid && passwd == this.userList[index].password){
          this.isUserValid = true;
          //alert("Login Success!");
         break;
      }
      
    }
    if(this.isUserValid){
      this.router.navigate([`/movies/${id}`]);
    }
    else{
      this.errorStatus = 'Unsuccessfull Attempt! Please try again with valid ID & Password!!';
      this.isError = true;
      return;
    }
  }

}
