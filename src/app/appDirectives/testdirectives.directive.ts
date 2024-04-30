import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTestdirectives]'
})
export class TestdirectivesDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { 
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'yellow')
  }

}
