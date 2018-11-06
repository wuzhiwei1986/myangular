import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-alarm',
  templateUrl: './alarm.component.html',
  styleUrls: ['./alarm.component.css'],
  animations: [
    trigger('displayState', [
      state('none', style({
        display: 'none', opacity: '0',
      })),
      state('block', style({
        display: 'block', opacity: '1',
      })),
      transition('none => block', animate('100ms linear')),
      transition('block => none', animate('80ms linear'))
    ])
  ]
})
export class AlarmComponent implements OnInit {
  isShow: boolean = false;

  dataSet = [
    {
      title: '流量计【00DX34557】200流速超过10m³',
      fun: 'aa()'
    },
    {
      title: '【00DX34557】200流速超过10m³',
      fun: 'aa()'
    },
    {
      title: '流量计200流速超过10m³',
      fun: 'aa()'
    },
    {
      title: '流量计【00DX34557】200流速超过10m³',
      fun: 'aa()'
    },
    {
      title: '流量计【00DX34557】200流速超过10m³',
      fun: 'aa()'
    },
  ];


  constructor() {
  }

  ngOnInit() {
  }

}
