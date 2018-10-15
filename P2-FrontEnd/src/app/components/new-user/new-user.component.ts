import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { TestServiceService } from '../../services/test-service.service';
import { CredentialsService } from '../../services/credentials.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  
  newName: string;
  newuserN: string;
  pass: string;

  constructor(private userService: CredentialsService) { }

  ngOnInit() {
  }

  createUser(){

    let newUser:User = {
      userId: null,
      userN: this.newuserN,
      passW: this.pass,
      name: this.newName
    };

    let url = "http://ccstockportfoliop2-env.hre7kq2up7.us-east-1.elasticbeanstalk.com/users";
    this.userService.postUser(url, newUser);
  }

}
