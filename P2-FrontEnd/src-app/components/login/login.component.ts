import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { CredentialsService } from '../../services/credentials.service';
import { LocalStorageService } from '../../services/localstorage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userId : number;
  userN: string;
  passW: string;
  name: string;

  showe : string;

  public user: User;

  constructor(private postService: CredentialsService, private localStorageService:LocalStorageService) { }

  ngOnInit() {
    this.user = new User();
    //if session is open, and they go to /login, should just take them to home page
    if(this.localStorageService.getSaved("username") !== null)
      window.location.replace("home");
  }

  sendCredentials(){
    this.user.userN = this.userN;
    this.user.passW = this.passW;
    this.postService.postCredentials(this.user).then(res =>
      {
      this.user.userId = res.userId;
      console.log(this.user.userId);
      this.user.userN = res.userN;
      console.log(this.user.userN);
      this.user.passW = res.passW;
      console.log(this.user.passW);
      this.user.name = res.name;
      console.log(this.user.name);
      if(this.user.name === undefined || this.user.userN === undefined
        || this.user.userN === undefined || this.user.userId === undefined){
          window.location.reload(true);
          console.log("user not found");
          this.user.userId = undefined;
          this.user.name = undefined;
        }else{
          window.location.replace("home");
          localStorage.setItem("userId", JSON.stringify(this.user.userId));
          localStorage.setItem("username", this.user.userN);
          localStorage.setItem("password", this.user.userN);
          localStorage.setItem("name", this.user.userN);
          window.location.replace("home");
        }
    });
  }
}
