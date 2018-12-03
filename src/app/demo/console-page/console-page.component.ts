import { Component, OnInit } from '@angular/core';
import * as Mock from 'mockjs';

@Component({
  selector: 'ecp-console-page',
  templateUrl: './console-page.component.html',
  styleUrls: ['./console-page.component.css']
})
export class ConsolePageComponent implements OnInit {
  //mock.js 数据
  mockData=Mock.mock({
    "number1|1-1000": 100,
    "number2|1-1000": 100,
    "number3|1-1000": 100,
    "number4|1-1000": 100,
    "number5|1-1000": 100
  });
  constructor() { }

  ngOnInit() {
  }

}
