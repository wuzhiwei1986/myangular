import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch-page',
  templateUrl: './switch-page.component.html',
  styleUrls: ['./switch-page.component.css']
})
export class SwitchPageComponent implements OnInit {

  switchArray1 = [{
    "name": "操作",
    "icon": "icon-operation"
  }, {
    "name": "展示",
    "icon": "icon-demonstration"
  }, {
    "name": "展示二",
    "icon": "icon-demonstration"
  }, {
    "name": "展示三",
    "icon": "icon-demonstration"
  }];

  switchArray2 = [{
    "name": "操作",
    "icon": "icon-operation"
  }, {
    "name": "展示",
    "icon": "icon-demonstration"
  }];

  constructor() { }

  ngOnInit() {
  }

}
