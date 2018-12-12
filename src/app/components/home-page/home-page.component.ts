import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  public timer;
  /**/
  selItem: any = 0;

  onItemClick(type) {
    this.selItem = type;
    //console.log(this.menus.length);
  }


  clrTimer(obj) {
    clearTimeout(obj);
  }

  forword() {
    console.log(arguments);
  }

  setTimer() {
    let self = this;
    self.timer = setInterval(function () {
      self.selItem = self.selItem + 1;
      //console.log(self.selItem);
      if (self.selItem > self.menus.length - 1) {
        self.selItem = 0;
      }
    }, 3000);
  }

  menus = [{
    'menuid': 10000000,
    'parentid': 0,
    'name': '营收系统',
    'uri': '/revenue/',
    'iconuri': 'menu-1',
    'havechild': true,
    'child': null,
    'introduction': '主要包括营收主页统计信息，用户信息管理，设备管理，抄表管理，缴费管理等功能'
  }, {
    'menuid': 11000000,
    'parentid': 0,
    'name': '工单系统',
    'uri': '/revenue/',
    'iconuri': 'menu-2',
    'havechild': true,
    'child': null,
    'introduction': null
  }, {
    'menuid': 20000000,
    'parentid': 0,
    'name': '管漏管理',
    'uri': '/pls/index',
    'iconuri': 'menu-3',
    'havechild': true,
    'child': null,
    'introduction': '主要包括管漏系统基本信息统计，管漏用户管理，管漏客户管理，流量计管理等功能'
  }, {
    'menuid': 21000000,
    'parentid': 0,
    'name': '自来水生产',
    'uri': '/pls/index',
    'iconuri': 'menu-4',
    'havechild': true,
    'child': null,
    'introduction': null
  }, {
    'menuid': 22000000,
    'parentid': 0,
    'name': '污水处理',
    'uri': '/pls/index',
    'iconuri': 'menu-5',
    'havechild': true,
    'child': null,
    'introduction': null
  }, {
    'menuid': 30000000,
    'parentid': 0,
    'name': '权限管理',
    'uri': '/sign',
    'iconuri': 'menu-6',
    'havechild': true,
    'child': null,
    'introduction': '主要功能包括系统帐号管理，角色权限管理，帐号权限分配等'
  }, {
    'menuid': 40000000,
    'parentid': 0,
    'name': '公共配置',
    'uri': '/revenue/',
    'iconuri': 'menu-7',
    'havechild': true,
    'child': null,
    'introduction': '主要功能包括短信模板管理，报表模板管理，系统信息配置等'
  }];

  constructor() {
  }

  ngOnInit() {
  }

}
