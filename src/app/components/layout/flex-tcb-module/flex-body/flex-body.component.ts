import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecp-flex-body',
  template: `
    <ng-content></ng-content>
  `,
  styles: []
})
export class FlexBodyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
