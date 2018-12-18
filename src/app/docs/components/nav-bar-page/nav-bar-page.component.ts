import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-nav-bar-page',
  templateUrl: './nav-bar-page.component.html',
  styleUrls: ['./nav-bar-page.component.css']
})
export class NavBarPageComponent implements OnInit {
  scaling=true;


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

  navGoto(uri){
  console.log(uri);
    const self = this;
/*    if (hoverId == null || hoverId == '') {
      self.thisMenuId = 0;
    }
    self.thisMenuId = hoverId;*/
    console.log('click');
    self.router.navigate([uri]);
    return false;
}
  constructor(private router: Router) {
  }


  ngOnInit() {
  }

}
