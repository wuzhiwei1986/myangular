import { Component, OnInit } from '@angular/core';
import * as Mock from 'mockjs';
@Component({
  selector: 'app-table-page',
  templateUrl: './table-page.component.html',
  styleUrls: ['./table-page.component.css']
})
export class TablePageComponent implements OnInit {


  //mock.js 数据
  mockData=Mock.mock({
    'list|1-100': [{
      'id|+1': 1,
      'title': '@title',

    }]
  });
/**/
  mockData2=Mock.mock({
    'list|1-50': [{
      'id|+1': 1,
      'sysname':'@ctitle(2, 4)',
      'ordertype':'@ctitle(2, 4)',
      'ordernum':'@now("yyyyMMdd")',
      'longtitle':'@ctitle(8, 15)',
      'area|1': ['华发新城','湾仔','拱北商圈'],
      'name': '@cname()',
      'name2': '@cname()',
      'time': '@datetime',
      'state|1': ['已完成','处理中'],
      'result|1': ['正常','异常'],
      'state2|1': ['处理中','已申请'],
    }]
  });
  dataSet = [
    {
      one: '2018-11',
      two: '东信宿舍',
      three: 'DXSS2319',
      four: '苏有鹏',
      five: '180600804',
      six: '在线',
      seven: '2018-9-30 12:12:30',
      eight: '112.50',
      nine: '2018-9-30 12:12:30',
      ten: '112.50',
      eleven: '5.50',
      twelve: '12',
      thirteen: '17115.50',
      fourteen: '居民用水',
      fifteen: 0
    },
    {
      one: '2018-11',
      two: '东信宿舍',
      three: 'DXSS2319',
      four: '苏有鹏',
      five: '180600804',
      six: '在线',
      seven: '2018-9-30 12:12:30',
      eight: '112.50',
      nine: '2018-9-30 12:12:30',
      ten: '112.50',
      eleven: '5.50',
      twelve: '12',
      thirteen: '17115.50',
      fourteen: '居民用水',
      fifteen: 0
    }, {
      one: '2018-11',
      two: '东信宿舍',
      three: 'DXSS2319',
      four: '苏有鹏',
      five: '180600804',
      six: '在线',
      seven: '2018-9-30 12:12:30',
      eight: '112.50',
      nine: '2018-9-30 12:12:30',
      ten: '112.50',
      eleven: '5.50',
      twelve: '12',
      thirteen: '17115.50',
      fourteen: '居民用水',
      fifteen: 0
    }, {
      one: '2018-11',
      two: '东信宿舍',
      three: 'DXSS2319',
      four: '苏有鹏',
      five: '180600804',
      six: '在线',
      seven: '2018-9-30 12:12:30',
      eight: '112.50',
      nine: '2018-9-30 12:12:30',
      ten: '112.50',
      eleven: '5.50',
      twelve: '12',
      thirteen: '17115.50',
      fourteen: '居民用水',
      fifteen: 0
    }, {
      one: '2018-11',
      two: '东信宿舍',
      three: 'DXSS2319',
      four: '苏有鹏',
      five: '180600804',
      six: '在线',
      seven: '2018-9-30 12:12:30',
      eight: '112.50',
      nine: '2018-9-30 12:12:30',
      ten: '112.50',
      eleven: '5.50',
      twelve: '12',
      thirteen: '17115.50',
      fourteen: '居民用水',
      fifteen: 0
    }, {
      one: '2018-11',
      two: '东信宿舍',
      three: 'DXSS2319',
      four: '苏有鹏',
      five: '180600804',
      six: '在线',
      seven: '2018-9-30 12:12:30',
      eight: '112.50',
      nine: '2018-9-30 12:12:30',
      ten: '112.50',
      eleven: '5.50',
      twelve: '12',
      thirteen: '17115.50',
      fourteen: '居民用水',
      fifteen: 0
    }, {
      one: '2018-11',
      two: '东信宿舍',
      three: 'DXSS2319',
      four: '苏有鹏',
      five: '180600804',
      six: '在线',
      seven: '2018-9-30 12:12:30',
      eight: '112.50',
      nine: '2018-9-30 12:12:30',
      ten: '112.50',
      eleven: '5.50',
      twelve: '12',
      thirteen: '17115.50',
      fourteen: '居民用水',
      fifteen: 0
    }, {
      one: '2018-11',
      two: '东信宿舍',
      three: 'DXSS2319',
      four: '苏有鹏',
      five: '180600804',
      six: '在线',
      seven: '2018-9-30 12:12:30',
      eight: '112.50',
      nine: '2018-9-30 12:12:30',
      ten: '112.50',
      eleven: '5.50',
      twelve: '12',
      thirteen: '17115.50',
      fourteen: '居民用水',
      fifteen: 0
    }, {
      one: '2018-11',
      two: '东信宿舍',
      three: 'DXSS2319',
      four: '苏有鹏',
      five: '180600804',
      six: '在线',
      seven: '2018-9-30 12:12:30',
      eight: '112.50',
      nine: '2018-9-30 12:12:30',
      ten: '112.50',
      eleven: '5.50',
      twelve: '12',
      thirteen: '17115.50',
      fourteen: '居民用水',
      fifteen: 0
    }, {
      one: '2018-11',
      two: '东信宿舍',
      three: 'DXSS2319',
      four: '苏有鹏',
      five: '180600804',
      six: '在线',
      seven: '2018-9-30 12:12:30',
      eight: '112.50',
      nine: '2018-9-30 12:12:30',
      ten: '112.50',
      eleven: '5.50',
      twelve: '12',
      thirteen: '17115.50',
      fourteen: '居民用水',
      fifteen: 0
    }, {
      one: '2018-11',
      two: '东信宿舍',
      three: 'DXSS2319',
      four: '苏有鹏',
      five: '180600804',
      six: '在线',
      seven: '2018-9-30 12:12:30',
      eight: '112.50',
      nine: '2018-9-30 12:12:30',
      ten: '112.50',
      eleven: '5.50',
      twelve: '12',
      thirteen: '17115.50',
      fourteen: '居民用水',
      fifteen: 0
    }, {
      one: '2018-11',
      two: '东信宿舍',
      three: 'DXSS2319',
      four: '苏有鹏',
      five: '180600804',
      six: '在线',
      seven: '2018-9-30 12:12:30',
      eight: '112.50',
      nine: '2018-9-30 12:12:30',
      ten: '112.50',
      eleven: '5.50',
      twelve: '12',
      thirteen: '17115.50',
      fourteen: '居民用水',
      fifteen: 0
    }, {
      one: '2018-11',
      two: '东信宿舍',
      three: 'DXSS2319',
      four: '苏有鹏',
      five: '180600804',
      six: '在线',
      seven: '2018-9-30 12:12:30',
      eight: '112.50',
      nine: '2018-9-30 12:12:30',
      ten: '112.50',
      eleven: '5.50',
      twelve: '12',
      thirteen: '17115.50',
      fourteen: '居民用水',
      fifteen: 0
    }
  ];

  tableList = [
    {
      id: '1',
      title: '流量计【004557】200流速超过10m³'

    },
    {
      id: '2',
      title: '【00DX34557】200流速超过10m³'

    },
    {
      id: '3',
      title: '流量计【00DX34557】200流超过10m³'

    },
    {
      id: '4',
      title: '流量计【00DX4557】流速超过10m³'

    },
    {
      id: '5',
      title: '流量200流速计【20流速】200流速超过10m³'

    },
    {
      id: '6',
      title: '200流速流量计【00D557】200流速超过10m³'

    },
    {
      id: '7',
      title: '流量计200流速【00D57】200流速超过10m³'

    },
    {
      id: '8',
      title: '流量计【00DX34557】200流速超过10m³'

    },
    {
      id: '9',
      title: '200流量计【00DX34557】200流过10m³'

    },
    {
      id: '10',
      title: '流量计【00DX34557】200流速超过10m³'

    }
  ];
  constructor() { }

  ngOnInit() {
console.log(this.mockData);
  }

}
