import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlightquote]'
})
export class HighlightquoteDirective {

  constructor(private el:ElementRef) {
    el.nativeElement.style.color = "blue"
   }

}
