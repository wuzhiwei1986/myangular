import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ecp-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  // 处理警告
  disposedId(id) {
    alert('alarm组件回传ID------' + id);
  }

  test(txt) {
    console.log(txt);
  }


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



  /**/

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




  constructor() {
  }

  ngOnInit() {
  }

}
