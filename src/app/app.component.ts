import { Component } from '@angular/core';
import { Quotes } from './quotes';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quotes';
  
  quotes=[
    new Quotes(1, 'Be your own Boss.','Safaricom',0,0,'Maria', new Date(2017,3,16)),
    new Quotes(2, 'Try to make the World a better place.','Shakesphere',0,0,'Kiza', new Date(2001,3,19)),
  ]
}
