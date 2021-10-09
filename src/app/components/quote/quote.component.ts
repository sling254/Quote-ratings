import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/quote'; 

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes=[
    new Quote(0,"Zack Daniel","life Style","If you are not displined you are a slave to your emotions","Eliud Kipchoge",new Date())
    
  ];

  addQuote(quote:Quote){
    this.quotes.push(quote);
    
  }
  deleteTheQuote(deleteQuote, index){
    if(deleteQuote){
      alert("Are you sure you want to delete this quote")
      this.quotes.splice(index, 1)
    }
    
    
  }
  
  constructor() {
   
   }

  ngOnInit(): void {
  }

}
