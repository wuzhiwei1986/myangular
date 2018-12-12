
import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ecp-flex-tcb',
  templateUrl: './flex-top-center-bottom.component.html',
  styleUrls: ['./flex-top-center-bottom.component.css']
})
export class FlexTopCenterBottomComponent implements OnInit {
  @Input() topHeight: number = 0;
  @Input() bottomHeight: number = 0;

  constructor() {
  }

  ngOnInit() {
  }
}
