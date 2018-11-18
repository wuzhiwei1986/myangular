import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tool-bar-page',
  templateUrl: './tool-bar-page.component.html',
  styleUrls: ['./tool-bar-page.component.css']
})
export class ToolBarPageComponent implements OnInit {


  test(msg){
    console.log(msg);
  }


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
  JS2=JSON.stringify(this.menuJSON);
  constructor() { }

  ngOnInit() {
  }

}
