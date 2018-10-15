import { Component, OnInit } from '@angular/core';
import { UserSettingsFormData } from '../../models/userSettingsFormData';
import { User } from '../../models/user';
import { LocalStorageService } from '../../services/localstorage.service';
import { CredentialsService } from '../../services/credentials.service';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent implements OnInit {

  userN:string;
  oldPassW:string;
  newPassW:string;
  confirmPassW:string;
  public userSettingsFormData: UserSettingsFormData;
  public user:User;

  //inject your service to instantiate it. make it private singleton
  constructor( private localStorageService:LocalStorageService,
               private userService:CredentialsService ) { }
  ngOnInit() {
    if(this.localStorageService.getSaved("username") === null)
      window.location.replace("login");
  }

  updateSettings(){
    this.userSettingsFormData = 
          new UserSettingsFormData(this.userN, this.oldPassW, this.newPassW, this.confirmPassW);
    this.userService.putFormData(this.userSettingsFormData).subscribe(usr => {
        this.user = usr;
      });
    window.location.reload();
  }
}
