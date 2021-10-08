import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/quote'; 

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes?: Quote[]=[
    {id:0,name:"Zack Daniel",topic:"Life style", quote:"If you are not displined you are a slave to your emotions",author:"Eliud Kipchoge"},
    {id:0,name:"Zack Daniel",topic:"Life style", quote:"If you are not displined you are a slave to your emotions",author:"Eliud Kipchoge"},
  ];
  

  constructor() {
   
   }

  ngOnInit(): void {
  }

}
