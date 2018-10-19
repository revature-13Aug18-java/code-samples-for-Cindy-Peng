import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { User } from '../models/user';
import { UserSettingsFormData } from '../models/userSettingsFormData';

@Injectable({
  providedIn: 'root'
})
export class CredentialsService {

  //Constructor with HttpClient Dependency Injected 
  constructor(private httpClient: HttpClient) {};

  //Url's we need to send 
  loginUrl: string = "http://ccstockportfoliop2-env.hre7kq2up7.us-east-1.elasticbeanstalk.com/login";
  settingsUrl: string = "http://ccstockportfoliop2-env.hre7kq2up7.us-east-1.elasticbeanstalk.com/users";

 //observable put function
 putFormData(formData:UserSettingsFormData) : Observable<User> {
  const headers = new HttpHeaders().set("content-type", "application/json");
  //must be named "headers" else problems during return
  let body = 
  { 
    username: formData.username,
    oldPassword: formData.oldPassword,
    newPassword: formData.newPassword,
    confirmPassword: formData.confirmPassword
  };
  
  return this.httpClient.put<User>(this.settingsUrl, body, {headers});
}

}




