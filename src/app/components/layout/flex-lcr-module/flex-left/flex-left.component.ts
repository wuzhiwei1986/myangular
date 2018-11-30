import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecp-flex-left',
  template: `
    <ng-content></ng-content>
  `,
  styles: []
})
export class FlexLeftComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
