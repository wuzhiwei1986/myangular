import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'ecp-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  constructor(private el: ElementRef) {

  }


  getOffsetLeft(): number {
    return this.elementRef.nativeElement.offsetLeft;
  }

  getOffsetWidth(): number {
    return this.elementRef.nativeElement.offsetWidth;
  }

  getOffsetTop(): number {
    return this.elementRef.nativeElement.offsetTop;
  }

  getOffsetHeight(): number {
    return this.elementRef.nativeElement.offsetHeight;
  }
  ngOnInit() {
    console.log(this.el.nativeElement.querySelector(".tabs").offsetWidth)
  }

}
