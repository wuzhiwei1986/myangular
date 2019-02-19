# 组件API

通过customScaling可以配置菜单是否固定展开
* * *
## 参数说明

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| [customScaling] | boolean |   |
| [ecpStyle] |string|   |
| [menuList] |json  |  |
| (goTo) | function |点击菜单后跳转  |
 

 
 * * *
 
## 组件代码
```html
<nav class="main-menu" [ngClass]="{'on':!customScaling}" [ngStyle]="ecpStyle" (mouseleave)="off()" (mouseover)="on()">
    <!--左边图标-->
    <ul class="menu-body">
        <ng-container *ngFor="let menu of menuList;let i=index;">
            <li [ngClass]="{'select':i==selectId,'hover':i==hoverId}">
                <div class="menu-title" [ngClass]="{'select':i==selectId,'hover':i==hoverId}"
                     (click)="hoverMenu(i);selectedApp(menu.uri,i)" (mouseover)="selectMenu(i)"
                     (mouseout)="cleanSel()">
                    <i class="icon dongxiniotwater {{menu.iconuri}}"></i>{{menu.name}}
                    <i class="right icon dongxiniotwater"
                       [ngClass]="{'general_fold':hoverId==i,'general_unfold':hoverId!=i||hoverId==null}"
                       *ngIf="menu.havechild==true"></i>
                </div>
                <ul *ngIf="menu.havechild==true" class="menu-sub" [@displayState]="showChildMenu(i)">
                    <ng-container *ngFor="let childmenu of menu.child; let childId = index;">
                        <li class="hover" (click)="selectedApp(childmenu.uri,childId)"
                            [ngClass]="{'hover':childId==thisMenuId}" (mouseover)="selectMenu(i)"
                            (mouseout)="cleanSel()">
                            {{childmenu.name}}
                        </li>
                    </ng-container>
                </ul>
            </li>
        </ng-container>
    </ul>
</nav>
```
## 菜单配置
```html
menu = [
            {
                'name': '基本组件',
                'uri': '',
                'iconuri': 'pipe_area',
                'havechild': true,
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
                        'name': '面包屑',
                        'uri': 'breadCrumbPage',
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
                        'name': '工具条',
                        'uri': 'toolBarPage',
                        'iconuri': '',
                        'child': null
                    }
                    ,
                    {
                        'name': '步骤条',
                        'uri': 'stepsInfo',
                        'iconuri': '',
                        'child': null
                    },

                    {
                        'name': '搜索模块',
                        'uri': 'seachModulePage',
                        'iconuri': '',
                        'child': null
                    }
                    ,

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
                    ,
                    {
                        'name': '版权',
                        'uri': 'copyrightPage',
                        'iconuri': '',
                        'child': null
                    }

                ]
            },
            {
                'name': '布局组件',
                'uri': '',
                'iconuri': 'pipe_area',
                'havechild': true,
                'child': [
                    {
                        'name': '水平垂直居中',
                        'uri': 'layoutVerticalCenter',
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
                    },
                    {
                        'name': '布局演示',
                        'uri': 'layoutDemoPage',
                        'iconuri': '',
                        'child': null
                    },

                ]
            },
            {
                'name': '地图用组件',
                'uri': '',
                'iconuri': 'pipe_area',
                'havechild': true,
                'child': [
                    {
                        'name': '弹出详情',
                        'uri': 'openDetailsInfo',
                        'iconuri': '',
                        'child': null
                    }
                    ,
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

                ]
            },

            {
                'name': '数据展示',
                'uri': '',
                'iconuri': 'pipe_area',
                'havechild': true,
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
                'havechild': false,
                'child': []
            }
        ];
```