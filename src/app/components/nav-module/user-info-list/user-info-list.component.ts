import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'ecp-user-info-list',
  templateUrl: './user-info-list.component.html',
  styleUrls: ['./user-info-list.component.css'],
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
export class UserInfoListComponent implements OnInit {
  changeOpen: Boolean = false;
  @Input() userHader: string = 'assets/base/user_default.png';


  constructor() { }

  ngOnInit() {
  }

}
