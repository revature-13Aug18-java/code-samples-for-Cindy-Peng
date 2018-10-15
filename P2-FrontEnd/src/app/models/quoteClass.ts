export class QuoteClass {
    symbol ? : string;
    companyName ? : string;
    open ? : number;
    latestPrice ? : number;

    // https://visualstudiomagazine.com/articles/2016/01/01/exploiting-typescript-arrays.aspx
    constructor(symbol, companyName, open){
        this.symbol = symbol;
        this.companyName = companyName;
        this.open = open;
    }
    // QuoteClass(){}
    // QuoteClass(symbol, companyName, open){ 
    //     this.symbol = symbol;

    // }
}