import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecp-flex-top',
  template: `
    <ng-content></ng-content>
  `,
  styles: []
})
export class FlexTopComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
