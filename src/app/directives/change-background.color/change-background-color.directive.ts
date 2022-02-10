import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appChangeBackgroundColor]'
})
export class ChangeBackgroundColorDirective {

  @Input('appChangeBackgroundColor') speed: number = 0

  constructor(private el: ElementRef) { 

  }

  @HostListener("mouseenter") onMouseEnter() {
    (this.el.nativeElement as HTMLElement).style.backgroundColor='red';
    (this.el.nativeElement as HTMLElement).style.transition = 'all ' + this.speed + 's';
  }

  @HostListener("mouseleave") onMouseLeave() {
    (this.el.nativeElement as HTMLElement).style.backgroundColor='transparent';
  }
}
