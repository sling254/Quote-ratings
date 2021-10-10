import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlightquote]'
})
export class HighlightquoteDirective {

  constructor(private elem:ElementRef) {
    elem.nativeElement.style.backgroundColor="blue!important"
    elem.nativeElement.style.border="0.5rem solid blue"
   }

}
