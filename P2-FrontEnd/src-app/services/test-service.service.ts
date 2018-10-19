import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '../../../node_modules/@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { Quote } from '../../../node_modules/@angular/compiler';
import { Transaction } from '../models/transaction';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

 url: string = "https://api.iextrading.com/1.0/stock/fb/batch?types=quote,news,chart&range=1m&last=10"
 urlSymbols: string = "https://api.iextrading.com/1.0/ref-data/symbols"; 
 constructor(private http: HttpClient) { }

  getStocks():Observable<any[]>{
    return this.http.get<any[]>(this.url);
  }

  getSymbols():Observable<any[]>{
    return this.http.get<any[]>(this.urlSymbols);
  }
  getQuotes(url: string):Observable<any[]>{    //this one just has url param
    return this.http.get<any[]>(url);          //cuz we will have to do multiple get requests
  }
}
