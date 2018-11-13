import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-generate-bill-page',
  templateUrl: './generate-bill-page.component.html',
  styleUrls: ['./generate-bill-page.component.css']
})
export class GenerateBillPageComponent implements OnInit {

  //表格////////////////////////////////////////////////////////

  isVisibleMiddle = false;

  showModalMiddle(): void {
    this.isVisibleMiddle = true;
  }


  handleOkMiddle(): void {
    console.log('click ok');
    this.isVisibleMiddle = false;
  }

  handleCancelMiddle(): void {
    this.isVisibleMiddle = false;
  }


  /**/

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

  //表格 end////////////////////////////////////////////////////////

  visible = false;
  constructor() {
  }

  ngOnInit() {
  }

}
