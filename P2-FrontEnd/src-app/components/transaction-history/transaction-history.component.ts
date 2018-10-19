import { Component, OnInit } from '@angular/core';
import { Transaction } from '../../models/transaction';
import { LocalStorageService } from '../../services/localstorage.service';
import { TransactionServiceService } from '../../services/transaction-service.service';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css']
})
export class TransactionHistoryComponent implements OnInit {

  constructor(private localStorageService: LocalStorageService,
              private transactionService: TransactionServiceService) { }

  ngOnInit() {
    if(this.localStorageService.getSaved("username") === null)
      window.location.replace("login");
      //populate the table w/ fill table function
      this.fillPortfolioFromDB();
  }

  //variables memebres
  url:string = "http://ccstockportfoliop2-env.hre7kq2up7.us-east-1.elasticbeanstalk.com/stockTransactions";
  username = localStorage.getItem("username");
  soldTransactions:Transaction[] = [];
  zeroVariable: number = 0;

  getSymbol(sym: string) {
    localStorage.setItem("symbol", sym);
  }

  fillPortfolioFromDB(): void{
    this.transactionService.getDatabaseTransactions("http://ccstockportfoliop2-env.hre7kq2up7.us-east-1.elasticbeanstalk.com/stockTransactions").subscribe(
      objects =>{ 
          // console.log(objects);
          for(let obj of objects) {      //use the session to show the profile specific to the user
              if(obj.user.userN === this.localStorageService.getSaved("username"))
                if(obj.status === "SOLD")
                  this.soldTransactions.push( new Transaction(obj.id, obj.stockSymbol, obj.numShares, 
                                          obj.boughtFor, obj.sellingFor, 
                                          obj.date, obj.user, obj.stockName, obj.status ));
          }
      
          this.fillPortfolioFromAPI();
      }
    ); //subscribe
  } //fillPortfolioFromDB()

  fillPortfolioFromAPI(){
    console.log(this.soldTransactions.length);
    for(let i = 0; i < this.soldTransactions.length; i++)
    {
      let url = "https://api.iextrading.com/1.0/stock/" 
                + this.soldTransactions[i].symbol + "/quote?filter=open,latestPrice";
      this.transactionService.getDatabaseTransactions(url).subscribe(
        obj => {
          this.soldTransactions[i].current = obj["latestPrice"];
          this.soldTransactions[i].opening = obj["open"];
        }
      );
    }
  } //function

}
