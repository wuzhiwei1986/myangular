import { Directive, ElementRef ,HostListener} from '@angular/core';

@Directive({
  selector: '[appTest]'
})
export class TestDirective {

  constructor(private el: ElementRef) {
   // el.nativeElement.style.backgroundColor = 'yellow';
    console.log("信息");
    console.log(el);
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
