import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent implements OnInit {


  menuJSON = [{
    "name": "添加元素",
    "url": "http://www.google.com",
    "chird": [
      {
        "name": "坐标",
        "url": "http://www.google.com"
      },
      {
        "name": "传感器",
        "url": "http://www.baidu.com"
      },
      {
        "name": "管道",
        "url": "http://www.SoSo.com"
      },
      {
        "name": "节点",
        "url": "http://www.SoSo.com"
      },
      {
        "name": "堵头封板",
        "url": "http://www.SoSo.com"
      },
      {
        "name": "闸阀",
        "url": "http://www.SoSo.com"
      },
      {
        "name": "消防栓",
        "url": "http://www.SoSo.com"
      }
    ]
  }, {
    "name": "筛查",
    "url": "http://www.google.com",
    "chird": null
  }, {
    "name": "预警",
    "url": "http://www.google.com",
    "chird": [
      {
        "name": "坐标",
        "url": "http://www.google.com"
      },
      {
        "name": "传感器",
        "url": "http://www.baidu.com"
      },
      {
        "name": "管道",
        "url": "http://www.SoSo.com"
      }
    ]
  }, {
    "name": "爆管分析",
    "url": "http://www.google.com",
    "chird": null
  }, {
    "name": "阀门分析",
    "url": "http://www.google.com",
    "chird": null
  }];

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
    this.menuJSON.reverse();
  }

}
