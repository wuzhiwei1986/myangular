import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ecp-flex-lcr',
  templateUrl: './flex-left-center-right.component.html',
  styleUrls: ['./flex-left-center-right.component.css']
})
export class FlexLeftCenterRightComponent implements OnInit {
  @Input() leftWidth;
  @Input() rightWidth;

  constructor() {
  }

  ngOnInit() {
  }

}