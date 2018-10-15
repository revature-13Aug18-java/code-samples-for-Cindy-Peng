import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  saveItem(key, val) : void {
    localStorage.setItem(key, val);
  }

  getSaved(key: string) {
    return localStorage.getItem(key);
  }

}
