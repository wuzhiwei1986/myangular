import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecp-flex-bottom',
  template: `
    <ng-content></ng-content>
  `,
  styles: []
})
export class FlexBottomComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
