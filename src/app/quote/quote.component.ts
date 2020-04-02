import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes=[
    new Quotes(1, 'Be your own Boss.','Safaricom',0,0,'Maria', new Date(2017,3,16)),
    new Quotes(2, 'Try to make the World a better place.','Shakesphere',0,0,'Kiza', new Date(2001,3,19)),
  ]
  deleteQuote(isComplete, index){
    if (isComplete){
      this.quotes.splice(index, 1);
    }
  }
  addNewQuote(quote){
    let quoteLength= this.quotes.length;
    quote.id = quoteLength +1;
    quote.date = new Date(quote.date)
    this.quotes.push(quote)
  }

  highlighter(index){
    const check = this.quotes[index].upvote;
    if(this.quotes.length > 0){
      const votes =[];
      this.quotes.forEach(quote=>votes.push(quote.upvote));
      if(check ===Math.max(...votes)){
        return true;
      }
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
