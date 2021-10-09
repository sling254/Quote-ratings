import { Component, OnInit, Input } from '@angular/core';
import { Quote } from 'src/app/quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Input()quote:Quote;

  upvote:number = 0;
  downvote:number = 0;
  onUpVote(){
    this.upvote ++;

  }
  onDownVote(){
    this.downvote ++;
  }

  

  constructor() { 
    
    
  }

  ngOnInit(): void {
    
  }

}
