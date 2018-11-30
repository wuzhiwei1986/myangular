import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecp-flex-right',
  template: `
    <ng-content></ng-content>
  `,
  styles: []
})
export class FlexRightComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
