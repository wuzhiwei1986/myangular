import { Component, OnInit } from '@angular/core';
import * as Mock from 'mockjs';
@Component({
  selector: 'app-page-demo3',
  templateUrl: './page-demo3.component.html',
  styleUrls: ['./page-demo3.component.css']
})
export class PageDemo3Component implements OnInit {
  mockData2 = Mock.mock({
    'list|1-200': [{
      'id|+1': 1,
      'sysname': '@ctitle(2, 4)',
      'ordertype': '@ctitle(2, 4)',
      'ordernum': '@now("yyyyMMdd")',
      'longtitle': '@ctitle(8, 15)',
      'area|1': ['华发新城', '湾仔', '拱北商圈'],
      'name': '@cname()',
      'name2': '@cname()',
      'time': '@datetime',
      'state|1': ['已完成', '处理中'],
      'result|1': ['正常', '异常'],
      'state2|1': ['处理中', '已申请'],
      'number|1-100': 100,
    }]
  });
  constructor() { }

  ngOnInit() {
  }

}
