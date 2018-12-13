import {Component, OnInit} from '@angular/core';
import * as Mock from 'mockjs';

@Component({
  selector: 'app-data-demo-page',
  templateUrl: './data-demo-page.component.html',
  styleUrls: ['./data-demo-page.component.css']
})
export class DataDemoPageComponent implements OnInit {
  mockData2 = Mock.mock({
    'list|1-10': [{
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
    }]
  });

  constructor() {
  }

  ngOnInit() {
  }

}
