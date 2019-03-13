import { Directive, ElementRef, Renderer2, HostListener, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {
  @Input()
  selector: any;

  /**Declartion and assignment */
  @HostBinding('style.border')
  border: string;
  constructor(private el: ElementRef, private rendered: Renderer2) {
    // console.log(elementRef.nativeElement);
  }

  @HostListener("mouseover")
  mouseOver(): void {
    const elem = this.el.nativeElement.querySelector(this.selector.option);
    this.rendered.setStyle(elem, "display", "none");
    this.border = "10px solid red";
  }

  @HostListener("mouseout")
  mouseOut(): void {
    const elem = this.el.nativeElement.querySelector(this.selector.option);
    this.rendered.setStyle(elem, "display", "block");
    this.border = "";
  }
}
