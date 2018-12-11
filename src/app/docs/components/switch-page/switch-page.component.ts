import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch-page',
  templateUrl: './switch-page.component.html',
  styleUrls: ['./switch-page.component.css']
})
export class SwitchPageComponent implements OnInit {

  switchArray1 = [{
    "name": "操作",
    "icon": "general_editor-pattern"
  }, {
    "name": "展示",
    "icon": "general_display-pattern"
  }, {
    "name": "展示二",
    "icon": "general_editor-pattern"
  }, {
    "name": "展示三",
    "icon": "general_display-pattern"
  }];

  switchArray2 = [{
    "name": "操作",
    "icon": "general_editor-pattern"
  }, {
    "name": "展示",
    "icon": "general_display-pattern"
  }];

  constructor() { }

  ngOnInit() {
  }

}
