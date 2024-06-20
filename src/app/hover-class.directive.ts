import { Directive, HostListener, ElementRef, Input } from '@angular/core';

// add style class when mouse over
@Directive({
  selector: '[appHoverClass]',
  standalone: true
})
export class HoverClassDirective {

  constructor(public elementRef: ElementRef) { }
  @Input('appHoverClass') hoverClass: any;

  @HostListener('mouseenter') onMouseEnter() {
      this.elementRef.nativeElement.classList.add(this.hoverClass);
  }

  @HostListener('mouseleave') onMouseLeave() {
      this.elementRef.nativeElement.classList.remove(this.hoverClass);
  }

}
