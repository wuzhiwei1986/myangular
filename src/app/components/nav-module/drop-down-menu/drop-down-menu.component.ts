import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
@Component({
  selector: 'ecp-drop-down-menu',
  templateUrl: './drop-down-menu.component.html',
  styleUrls: ['./drop-down-menu.component.css'],
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
export class DropDownMenuComponent implements OnInit {
  changeOpen: Boolean = false;
  @Input() menusList:Array<any>;
  @Output() navUrl = new EventEmitter();

  nav(id){
    this.navUrl.emit(id);
  }


/*
  menusList: Array<any> = [{
    'menuid': 10000000,
    'parentid': 0,
    'name': '营收系统',
    'uri': null,
    'iconuri': 'menu-1',
    'havechild': true,
    'child': null,
    'introduction': '主要包括营收主页统计信息，用户信息管理，设备管理，抄表管理，缴费管理等功能'
  }, {
    'menuid': 20000000,
    'parentid': 0,
    'name': '管漏管理',
    'uri': null,
    'iconuri': 'menu-2',
    'havechild': true,
    'child': null,
    'introduction': '主要包括管漏系统基本信息统计，管漏用户管理，管漏客户管理，流量计管理等功能'
  }, {
    'menuid': 30000000,
    'parentid': 0,
    'name': '权限管理',
    'uri': null,
    'iconuri': 'menu-3',
    'havechild': true,
    'child': null,
    'introduction': '主要功能包括系统帐号管理，角色权限管理，帐号权限分配等'
  }, {
    'menuid': 40000000,
    'parentid': 0,
    'name': '系统管理',
    'uri': null,
    'iconuri': 'menu-4',
    'havechild': true,
    'child': null,
    'introduction': '主要功能包括短信模板管理，报表模板管理，系统信息配置等'
  }];

 */

  constructor() {
  }

  ngOnInit() {
  }

}
