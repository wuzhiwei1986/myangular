import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'ecp-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent implements OnInit {

  @Input() customX;
  @Input() customY;
  //@Input() customLocation: any={'x': '100px', 'y': '50px'};
  @Output() selectId: EventEmitter<string> = new EventEmitter();

  click(url) {
    this.selectId.emit(url);
  }

  /*
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
    }];*/

  menuJSON = [{
    'name': '添加元素',
    'url': 'http://www.google.com',
    'chird': [
      {
        'name': '坐标',
        'url': 'add_point'
      },
      {
        'name': '传感器',
        'url': 'add_sensor'
      },
      {
        'name': '管道',
        'url': 'add_pipe'
      },
      {
        'name': '节点',
        'url': 'add_node'
      },
      {
        'name': '堵头封板',
        'url': 'add_plug'
      },
      {
        'name': '闸阀',
        'url': 'add_valve'
      },
      {
        'name': '消防栓',
        'url': 'add_hydrant'
      }
    ]
  }, {
    'name': '筛查',
    'url': 'screening',
    'chird': null
  }, {
    'name': '预警',
    'url': 'http://www.google.com',
    'chird': [
      {
        'name': '实时流量显示',
        'url': 'http://www.google.com',
        'isSwitch': true
      },
      {
        'name': '分区用水量分析',
        'url': 'http://www.baidu.com'
      }
    ]
  }, {
    'name': '爆管分析',
    'url': 'analysis_pipe',
    'chird': null
  }, {
    'name': '阀门分析',
    'url': 'analysis_valve',
    'chird': null
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
 /*   if (this.customLocation == '') {
      this.customLocation = {'x': '0', 'y': '0'};
    }*/
    this.menuJSON.reverse();
  }

}
