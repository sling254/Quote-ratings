import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from 'src/app/quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  @Output() onAddQuote: EventEmitter<Quote> = new EventEmitter();


  name: string;
  topic: string;
  quote: string;
  author: string;

  onsubmitQuote(){
    if(!this.name){
      alert("name can not be empty")
      return;
    }
    if(!this.topic){
      alert("topic can not be empty")
      return;
    }
    if(!this.quote){
      alert("quote can not be empty")
      return;
    }
    if(!this.author){
      alert("author can not be empty")
      return;
    }

    const newQuote ={
      name:this.name,
      topic:this.topic,
      quote:this.quote,
      author:this.author,
    }
    //emit the new quote
    this.onAddQuote.emit(newQuote);
    console.log("i was clicked");

    //clear the form inputs
    this.name = "",
    this.topic ="",
    this.quote ="",
    this.author= ""
    

  }

  constructor() { }

  ngOnInit(): void {
  }

}
