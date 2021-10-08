import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete-btn',
  templateUrl: './delete-btn.component.html',
  styleUrls: ['./delete-btn.component.css']
})
export class DeleteBtnComponent implements OnInit {
  @Output() deleteQuote=new EventEmitter<boolean>();
  onDelete(removeQuote:boolean){
    this.deleteQuote.emit(removeQuote)
    console.log("clicked");
    
  }


  constructor() { }

  ngOnInit(): void {
  }

}
