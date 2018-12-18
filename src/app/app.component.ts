import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Experiment Project';

  constructor(private router: Router) {
  }

  indexNavGoto(obj) {
    console.log(obj);
    const self = this;
    if (obj.hoverId == null || obj.hoverId == '') {
      //self.thisMenuId = 0;
    }
    // self.thisMenuId = obj.hoverId;
    console.log('click');
    self.router.navigate([obj.uri]);
    return false;
  }

  // 处理警告
  disposedId(id) {
    alert('alarm组件回传ID------' + id);
  }

  test(txt) {
    console.log(txt);
  }

  //顶部菜单数据
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


  leftNavList: Array<any> = [
    {
      'name': '基本组件',
      'uri': '',
      'iconuri': 'pipe_area',
      'child': [
        {
          'name': '左边导航',
          'uri': 'navBarPage',
          'iconuri': '',
          'child': null
        },
        {
          'name': '顶部导航',
          'uri': 'topNavPage',
          'iconuri': '',
          'child': null
        },
        {
          'name': '页面左边导航',
          'uri': 'pageLeftNavPage',
          'iconuri': '',
          'child': null
        },
        {
          'name': '开关切换',
          'uri': 'switchPage',
          'iconuri': '',
          'child': null
        },
        {
          'name': '面包屑',
          'uri': 'breadCrumbPage',
          'iconuri': '',
          'child': null
        },
        {
          'name': '步骤条',
          'uri': 'stepsInfo',
          'iconuri': '',
          'child': null
        },
        {
          'name': '工具条',
          'uri': 'toolBarPage',
          'iconuri': '',
          'child': null
        }
        ,
        {
          'name': '搜索模块',
          'uri': 'seachModulePage',
          'iconuri': '',
          'child': null
        }
        ,
        {
          'name': '弹出详情',
          'uri': 'openDetailsInfo',
          'iconuri': '',
          'child': null
        }
        ,
        {
          'name': '弹出详情2',
          'uri': 'openDetailsInfo2',
          'iconuri': '',
          'child': null
        },
        {
          'name': '地图用组件',
          'uri': 'dotRipplePage',
          'iconuri': '',
          'child': null
        },
        {
          'name': '侧边栏弹出',
          'uri': 'popupSidebarPage',
          'iconuri': '',
          'child': null
        },
        {
          'name': '标签页',
          'uri': 'tabsPage',
          'iconuri': '',
          'child': null
        },
        {
          'name': '状态条',
          'uri': 'statusBarPage',
          'iconuri': '',
          'child': null
        }

      ]
    },
    {
      'name': '布局组件',
      'uri': '',
      'iconuri': 'pipe_area',
      'child': [
        {
          'name': '布局演示',
          'uri': 'layoutDemoPage',
          'iconuri': '',
          'child': null
        },
        {
          'name': '上中下',
          'uri': 'flexTopCenterBottom',
          'iconuri': '',
          'child': null
        },
        {
          'name': '左中右',
          'uri': 'flexleftCenterRight',
          'iconuri': '',
          'child': null
        }
      ]
    },
    {
      'name': '数据展示',
      'uri': '',
      'iconuri': 'pipe_area',
      'child': [
        {
          'name': '登录界面',
          'uri': 'loginPage',
          'iconuri': '',
          'child': null
        },
        {
          'name': '系统切换',
          'uri': 'homePage',
          'iconuri': '',
          'child': null
        },
        {
          'name': '页面演示1',
          'uri': 'pageDemo',
          'iconuri': '',
          'child': null
        },
        {
          'name': '页面演示3',
          'uri': 'pageDemo3',
          'iconuri': '',
          'child': null
        },
        {
          'name': '页面演示2',
          'uri': 'detailsStyle1',
          'iconuri': '',
          'child': null
        },
        {
          'name': '表格展示1',
          'uri': 'dataDemoPage',
          'iconuri': '',
          'child': null
        },
        {
          'name': '表格展示',
          'uri': 'tablePage',
          'iconuri': '',
          'child': null
        }
        ,
        {
          'name': '图标演示',
          'uri': 'iconPage',
          'iconuri': '',
          'child': null
        },
        {
          'name': '标签页（传递模板）',
          'uri': 'ecpTabset',
          'iconuri': '',
          'child': null
        },
        {
          'name': '404/500页面',
          'uri': 'httpPage',
          'iconuri': '',
          'child': null
        }
        ,
        {
          'name': '生成帐单',
          'uri': 'generateBillPage',
          'iconuri': '',
          'child': null
        },
        {
          'name': '弹窗演示',
          'uri': 'waterConsumptionAnalysisPopup',
          'iconuri': '',
          'child': null
        }
        ,
        {
          'name': '组件联动',
          'uri': 'pageDemo2',
          'iconuri': '',
          'child': null
        },
        {
          'name': '调度中心',
          'uri': 'dispatchPage',
          'iconuri': '',
          'child': null
        }
        ,
        {
          'name': '控制台主页',
          'uri': 'consolePage',
          'iconuri': '',
          'child': null
        }
      ]
    },
    {
      'name': '关于',
      'uri': 'about',
      'iconuri': 'pipe_report',
      'child': []
    }
  ];

}
