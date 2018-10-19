import { Injectable } from '@angular/core';
import { Transaction } from '../models/transaction';
import { Observable } from '../../../node_modules/rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransactionServiceService {
  constructor(private httpClient:HttpClient) { }

  getDatabaseTransactions(url:string): Observable<any[]>{
    return this.httpClient.get<any[]>(url);
  }

  putDatabaseTransaction(url:string, transaction): Observable<any>{
    return this.httpClient.put<any>(url, transaction); //url and body
  }

  postDatabaseTransaction(url:string, transaction): Observable<any>{
    return this.httpClient.post<any>(url, transaction);
  }

  //delete will return parameters id...
  deleteDatabaseTransaction(url:string): Observable<any>{
    const headers:HttpHeaders = new HttpHeaders().set('content-type', 'application/json');
    return this.httpClient.delete(url,{headers});
  }
}
