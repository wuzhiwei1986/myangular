import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ecp-tool-bar3',
  templateUrl: './tool-bar3.component.html',
  styleUrls: ['./tool-bar3.component.css']
})
export class ToolBar3Component implements OnInit {

  hoverId: number = 0; // 当前已选中
  thisMenuId: number = 0; // 当前选中子菜单
  menuSel(i) {
    this.hoverId = i;
    this.thisMenuId = i;
  }
  showSubMenu(i) {
    this.hoverId = i;
    this.thisMenuId = i;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
