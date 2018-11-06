import {Component, OnInit,Input} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  animations: [
    trigger('displayState', [
      state('none', style({
        height: 0, display: 'none', opacity: '0',
      })),
      state('block', style({
        height: '*', display: 'block', opacity: '1',
      })),
      transition('none => block', animate('100ms linear')),
      transition('block => none', animate('100ms linear'))
    ])
  ]
})
export class NavBarComponent implements OnInit {
  @Input() customScaling:boolean;// 自定义伸缩,true 可以缩放，false 禁止缩放
  //customScaling:boolean=true;
  menuStatus: string = 'off';
  hoverId: number = 0; // 当前已选中
  selectId: number = 0; // 当前鼠标选中
  thisMenuId: number = 0; // 当前选中子菜单
  hisHover: number = 0; // 历史选中菜单,收缩时记录，展开时使用

  menus: Array<any> = [

    {
      'name': '基本组件',
      'uri': '',
      'iconuri': 'icon-area',
      'child': [
        {
          'name': '开关切换',
          'uri': 'switchPage',
          'iconuri': '',
          'child': null
        },
        {
          'name': '面包屑',
          'uri': 'breadCrumb',
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
          'name': '工具条',
          'uri': 'toolBarPage',
          'iconuri': '',
          'child': null
        }
        ,
        {
          'name': '搜索模块',
          'uri': 'seachModule',
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
          'name': '坐标闪动',
          'uri': 'dotRipplePage',
          'iconuri': '',
          'child': null
        }
      ]
    },
    {
      'name': '数据展示',
      'uri': '',
      'iconuri': 'icon-area',
      'child': [
        {
          'name': '页面演示',
          'uri': 'pageDemo',
          'iconuri': '',
          'child': null
        },
        {
          'name': '详情展示',
          'uri': 'detailsStyle1',
          'iconuri': '',
          'child': null
        },
        {
          'name': '表格展示',
          'uri': 'index/orderWork',
          'iconuri': '',
          'child': null
        },
        {
          'name': '图标演示',
          'uri': 'ripple',
          'iconuri': '',
          'child': null
        }
      ]
    },
    {
      'name': '关于',
      'uri': 'about',
      'iconuri': 'icon-area',
      'child': []
    }
  ];



  constructor(private router: Router) {
  }

  ngOnInit() {
    if(this.customScaling==null){
      this.customScaling=true;
    }
  }

  // 菜单选中
  hoverMenu(id) {
    if (this.hoverId === id) {
      this.hoverId = null;
    } else {
      this.hoverId = id;
    }
  }

  // 移上去的
  selectMenu(id) {
    this.selectId = id;

  }

  // 清除选中
  cleanSel() {
    this.selectId = null;
  }

  // 展开
  on() {
    const self = this;
    if (self.menuStatus === 'off') {
      self.hoverId = self.hisHover;

        self.menuStatus = 'on';

    }
  }

  // 收缩
  off() {
    const self = this;
    self.hisHover = self.hoverId;
    if (self.customScaling == true) {
      this.menuStatus = 'off';
    }
  }

  showChildMenu(i) {
    if (i === this.hoverId && this.menuStatus === 'on') {
      return 'block';
    } else {
      return 'none';
    }
  }


  selectedApp(uri, hoverId) {
    const self = this;
    if (hoverId == null || hoverId == '') {
      self.thisMenuId = 0;
    }
    self.thisMenuId = hoverId;
    console.log('click');
    self.router.navigate([uri]);
    return false;
  }


}
