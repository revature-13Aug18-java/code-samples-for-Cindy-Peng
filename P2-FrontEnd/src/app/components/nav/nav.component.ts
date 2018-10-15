import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../services/localstorage.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  username:string = null;
  //inject session service dependency we're gonna use to verify our session
  constructor(private localStorageService:LocalStorageService) { }

  ngOnInit() {
    // if(this.localStorageService.getSaved("username") === null){
    //   this.username = null;
    //   window.location.replace("login");
    // }
    // else //session available
    if(this.localStorageService.getSaved("username"))
      this.username = this.localStorageService.getSaved("username");
  }

  sessionCheck(){
    if(this.localStorageService.getSaved("username") === null)
      window.location.replace("login");
  }

  invalidateSession(){
    if(this.localStorageService.getSaved("username"))
      localStorage.clear();
    else // no session yet
      window.location.replace("login");
  }

}
