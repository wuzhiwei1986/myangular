import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ecp-layout-vertical-center',
  templateUrl: './layout-vertical-center.component.html',
  styleUrls: ['./layout-vertical-center.component.css']
})
export class LayoutVerticalCenterComponent implements OnInit {
  @Input() customStyle: Object = {};
  constructor() { }

  ngOnInit() {
  }

}
