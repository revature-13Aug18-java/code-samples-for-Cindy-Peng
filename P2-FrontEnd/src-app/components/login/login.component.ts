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

  public user: User;

  constructor(private postService: CredentialsService, private localStorageService:LocalStorageService) { }

  ngOnInit() {
    this.user = new User();
    //if session is open, and they go to /login, should just take them to home page
    if(this.localStorageService.getSaved("username") !== null)
      window.location.replace("home");
  }
}
