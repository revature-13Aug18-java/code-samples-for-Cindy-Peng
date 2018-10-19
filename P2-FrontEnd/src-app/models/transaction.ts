import { User } from "./user";

export class Transaction{
    id:number;
    symbol:string;
    shares:number;
    boughtFor:number;
    sellingFor:number;
    date:Date;
    user:User;
    companyName:string;
    status:string;
    //API members 
    current:number;
    opening:number;
    
    constructor(id, symbol, shares, boughtFor, sellingFor, date,
              user, companyName, status) {
        this['id'] = id;
        this.symbol = symbol;
        // this.current = current;
        this.shares = shares; 
        // this.opening = opening;
        this.boughtFor = boughtFor;
        this.sellingFor = sellingFor;
        // this.totalReturn = totalReturn;
        this.date = date;
        this.user = user;
        this.companyName = companyName;  
        this.status = status;
    }
}