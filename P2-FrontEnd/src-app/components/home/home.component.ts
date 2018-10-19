import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../services/localstorage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(public localStorageService:LocalStorageService) { }

  ngOnInit() {
    // if(this.localStorageService.getSaved("username") === null)
    //   window.location.replace("login");
  }

}
