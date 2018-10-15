import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../services/localstorage.service';
import { TestServiceService } from '../../services/test-service.service';
import { QuoteClass } from '../../models/quoteClass';
import { Transaction } from '../../models/transaction';

@Component({
  selector: 'app-stock-company',
  templateUrl: './stock-company.component.html',
  styleUrls: ['./stock-company.component.css']
})
export class StockCompanyComponent implements OnInit {

  constructor(private localStorageService:LocalStorageService, private quoteService: TestServiceService) { }
  public mainQuote : QuoteClass;
  public mySymbol: string = this.localStorageService.getSaved("symbol");
  public shares: number;

  ngOnInit() {
    if(this.localStorageService.getSaved("username") === null)
      window.location.replace("login");
     this.getQuote(this.localStorageService.getSaved("symbol"));
      console.log(this.localStorageService.getSaved("symbol"));
  }

  getQuote(newSymbol: string): void{
    let url = "https://api.iextrading.com/1.0/stock/" + newSymbol + "/quote?filter=symbol,open, latestPrice, companyName";
    this.quoteService.getQuoteById(url).then(quote=>{
      this.mainQuote = quote;
    });
    console.log(this.mainQuote.companyName);
  }

  buyShares(){
    let url = "http://ccstockportfoliop2-env.hre7kq2up7.us-east-1.elasticbeanstalk.com/stockTransactions";
    let date = new Date();
    let newTransaction: Transaction = {
    id: undefined,
    user: {
        userId: JSON.parse(localStorage.getItem("userId")),
        userN: localStorage.getItem("username"),
        passW: localStorage.getItem("password"),
        name: localStorage.getItem("name")
    },
    symbol: this.mainQuote.symbol,
    shares: this.shares,
    boughtFor: this.mainQuote.latestPrice,
    sellingFor: 0,
    date: date,
    companyName: this.mainQuote.companyName,
    status: undefined,
    current: undefined,
    opening: undefined
    }
    this.quoteService.createQuote(url, newTransaction);
    window.location.replace("portfolio");
  }
}
