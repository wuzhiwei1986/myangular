import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-switch',
  templateUrl: './map-switch.component.html',
  styleUrls: ['./map-switch.component.css']
})
export class MapSwitchComponent implements OnInit {

  selectId = 0;//当前选中的选项
  switchArray = [{
    "name": "操作",
    "icon": "icon-operation"
  }, {
    "name": "展示",
    "icon": "icon-demonstration"
  }];

  select(i) {
    this.selectId = i;
    console.log("当前选中"+i+"#######" + this.switchArray[i].name)
  }

  constructor() {
  }

  ngOnInit() {
  }

}
