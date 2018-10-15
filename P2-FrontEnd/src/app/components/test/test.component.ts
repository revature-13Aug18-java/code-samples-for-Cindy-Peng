import { Component, OnInit } from '@angular/core';
import { TestServiceService } from '../../services/test-service.service';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { QuoteClass } from '../../models/quoteClass';
import { LocalStorageService } from '../../services/localstorage.service';
import { parseHostBindings } from '../../../../node_modules/@angular/compiler';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  
})
export class TestComponent implements OnInit {

  startIndex : number = 0;
  condition : boolean = false;

  listQuotes : QuoteClass[] = [];
  quotes : QuoteClass[] = [];//[{symbol: 'a', companyName: 'b', open: 234}];
  // quotes : {symbol: undefined, companyName: undefined, open: undefined}[] = [];
  
  symbols : string[] = [];    
  test : undefined;

  constructor(private myService: TestServiceService, private route: ActivatedRoute,
              private localStorageService:LocalStorageService) { }

  ngOnInit() {
    if(this.localStorageService.getSaved("username") === null)
      window.location.replace("login");
    this.getSymbols();
  }

  getSymbols(){                                   //one time initialization method
    this.myService.getSymbols().subscribe
    ((symbols =>{ 
      for(let i in symbols){
        this.symbols.push(symbols[i]["symbol"]); 
      }

    this.backToZero(); //start the table off with first 10
    }));
  }

  backToZero(){
    this.startIndex = 0; //reset start inDex
    this.getNextQuotes(); //call get tenquotes again, but with new startIndex :)
  }

  getNextQuotes(){
    // this.getQuotes(this.startIndex, this.startIndex + 10);
    this.getCireyQuotes(this.startIndex, this.startIndex + 10);
    this.startIndex += 10;
  }

  getCireyQuotes(start:number, end:number){
    for(let i = start; i < end; i++)
    {
      console.log(i);
      let url = "https://api.iextrading.com/1.0/stock/" + this.symbols[i] + "/quote?filter=symbol,open,companyName,latestPrice";
      this.myService.getQuoteCirey(url)
      .then((currentQuote)=>{
        this.listQuotes[i - start] = currentQuote;
      });
    }
    this.condition = true;
  }

  getSymbol(sym: string) {
    localStorage.setItem("symbol", sym);
  }
}







// https://www.concretepage.com/questions/544