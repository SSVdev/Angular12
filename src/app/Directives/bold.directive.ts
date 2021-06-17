import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBold]'
})
export class BoldDirective {

  // constructor(private element: ElementRef) { 
  //   element.nativeElement.style.color = 'blue';
  // }
  constructor(private element: ElementRef, private render: Renderer2) { 
    render.setStyle(element.nativeElement, 'color','red');
    render.setStyle(element.nativeElement, 'background','yellow');
  }  

}
