import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quoteform',
  templateUrl: './quoteform.component.html',
  styleUrls: ['./quoteform.component.css']
})
export class QuoteformComponent implements OnInit {
  newQuotes = new Quotes(0, '', '', 0, 0,``, new Date());
  @Output() addQuote = new EventEmitter<Quotes>();

  submitQuote() {
    this.addQuote.emit(this.newQuotes);
    this.newQuotes = new Quotes(0, '', '', 0,0, ``, new Date());

    }

  constructor() { }

  ngOnInit() {
  }

}
