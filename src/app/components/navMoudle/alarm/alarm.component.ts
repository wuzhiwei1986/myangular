import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'ecp-alarm',
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
  @Input() alarmList: Array<string>;//传入列表
  @Input() alarmTitle: string;//传入标题
  @Output() disposed = new EventEmitter<string>();//回传ID
  @Output() viewAll = new EventEmitter();//点击‘查看全部’回传


  dispose(id) {
    this.disposed.emit(id);
    //alert(id);
  }

  viewMore() {
    this.viewAll.emit();
  }

  /* 测试
    alarmList = [
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
  */


  constructor() {
  }

  ngOnInit() {
  }

}
