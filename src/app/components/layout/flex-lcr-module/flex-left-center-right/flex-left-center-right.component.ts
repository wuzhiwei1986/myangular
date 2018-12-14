import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ecp-flex-lcr',
  templateUrl: './flex-left-center-right.component.html',
  styleUrls: ['./flex-left-center-right.component.css']
})
export class FlexLeftCenterRightComponent implements OnInit {
  @Input() leftWidth: number = 0;
  @Input() rightWidth: number = 0;
  @Input() leftBg: string = '#ffffff';
  @Input() bodyBg: string = '#ffffff';
  @Input() rightBg: string = '#ffffff';

  constructor() {
  }

  ngOnInit() {
  }

}
