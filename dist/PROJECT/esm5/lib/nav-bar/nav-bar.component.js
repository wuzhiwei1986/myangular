/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Router } from '@angular/router';
var NavBarComponent = /** @class */ (function () {
    /*
  
      menus: Array<any> = [
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
  
    */
    function NavBarComponent(router) {
        this.router = router;
        this.ecpStyle = {};
        this.menuList = [];
        this.goTo = new EventEmitter();
        this.menuStatus = 'off';
        this.hoverId = 0;
        this.selectId = 0;
        this.thisMenuId = 0;
        this.hisHover = 0;
    }
    /**
     * @return {?}
     */
    NavBarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.customScaling == null) {
            this.customScaling = true;
        }
    };
    // 菜单选中
    /**
     * @param {?} id
     * @return {?}
     */
    NavBarComponent.prototype.hoverMenu = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        if (this.hoverId === id) {
            this.hoverId = null;
        }
        else {
            this.hoverId = id;
        }
    };
    // 移上去的
    /**
     * @param {?} id
     * @return {?}
     */
    NavBarComponent.prototype.selectMenu = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        this.selectId = id;
    };
    // 清除选中
    /**
     * @return {?}
     */
    NavBarComponent.prototype.cleanSel = /**
     * @return {?}
     */
    function () {
        this.selectId = null;
    };
    // 展开
    /**
     * @return {?}
     */
    NavBarComponent.prototype.on = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var self = this;
        if (self.menuStatus === 'off') {
            self.hoverId = self.hisHover;
            self.menuStatus = 'on';
        }
    };
    // 收缩
    /**
     * @return {?}
     */
    NavBarComponent.prototype.off = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var self = this;
        self.hisHover = self.hoverId;
        if (self.customScaling == true) {
            this.menuStatus = 'off';
        }
    };
    /**
     * @param {?} i
     * @return {?}
     */
    NavBarComponent.prototype.showChildMenu = /**
     * @param {?} i
     * @return {?}
     */
    function (i) {
        if (i === this.hoverId && this.menuStatus === 'on') {
            return 'block';
        }
        else {
            return 'none';
        }
    };
    /**
     * @param {?} uri
     * @param {?} hoverId
     * @return {?}
     */
    NavBarComponent.prototype.selectedApp = /**
     * @param {?} uri
     * @param {?} hoverId
     * @return {?}
     */
    function (uri, hoverId) {
        /** @type {?} */
        var self = this;
        this.goTo.emit(uri);
        if (hoverId == null || hoverId == '') {
            self.thisMenuId = 0;
        }
        self.thisMenuId = hoverId;
        // console.log('click');
        // self.router.navigate([uri]);
        return false;
    };
    NavBarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ecp-nav-bar',
                    template: "<nav class=\"main-menu\" [ngClass]=\"{'on':!customScaling}\" [ngStyle]=\"ecpStyle\" (mouseleave)=\"off()\" (mouseover)=\"on()\">\r\n    <!--\u5DE6\u8FB9\u56FE\u6807-->\r\n    <ul class=\"menu-body\">\r\n        <ng-container *ngFor=\"let menu of menuList;let i=index;\">\r\n            <li [ngClass]=\"{'select':i==selectId,'hover':i==hoverId}\">\r\n                <div class=\"menu-title\" [ngClass]=\"{'select':i==selectId,'hover':i==hoverId}\"\r\n                     (click)=\"hoverMenu(i);selectedApp(menu.uri,i)\" (mouseover)=\"selectMenu(i)\"\r\n                     (mouseout)=\"cleanSel()\">\r\n                    <i class=\"icon dongxiniotwater {{menu.iconuri}}\"></i>{{menu.name}}\r\n                    <i class=\"right icon dongxiniotwater\"\r\n                       [ngClass]=\"{'general_fold':hoverId==i,'general_unfold':hoverId!=i||hoverId==null}\"\r\n                       *ngIf=\"menu.havechild==true\"></i>\r\n                </div>\r\n                <ul *ngIf=\"menu.havechild==true\" class=\"menu-sub\" [@displayState]=\"showChildMenu(i)\">\r\n                    <ng-container *ngFor=\"let childmenu of menu.child; let childId = index;\">\r\n                        <li class=\"hover\" (click)=\"selectedApp(childmenu.uri,childId)\"\r\n                            [ngClass]=\"{'hover':childId==thisMenuId}\" (mouseover)=\"selectMenu(i)\"\r\n                            (mouseout)=\"cleanSel()\">\r\n                            {{childmenu.name}}\r\n                        </li>\r\n                    </ng-container>\r\n                </ul>\r\n            </li>\r\n        </ng-container>\r\n    </ul>\r\n</nav>\r\n\r\n\r\n\r\n\r\n\r\n",
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
                    ],
                    styles: [".main-menu.hover,.main-menu.on,.main-menu:hover{width:220px;overflow:hidden;opacity:1}.main-menu.off{width:60px;overflow:hidden;opacity:1}.main-menu{background:#22272e;color:#fff;position:absolute;top:0;bottom:0;left:0;width:60px;overflow:hidden;transition:width .2s linear;-webkit-transform:translateZ(0) scale(1,1);opacity:1;z-index:1000}.main-menu>ul{margin:0}.main-menu li{position:relative;display:block;width:220px}nav{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none}nav li,nav ul{outline:0;margin:0;padding:0}.main-menu .menu-body{height:100%}.main-menu .menu-body li{width:220px;min-height:42px;line-height:42px;clear:both;text-align:center}.main-menu .menu-body li .menu-title{height:42px;line-height:42px;text-align:left;cursor:pointer;color:#999;font-weight:700}.main-menu .menu-body li .menu-title i{width:60px;float:left;text-align:center;margin-right:0;font-size:18px;font-weight:400}.main-menu .menu-body li .menu-title i.right{margin-top:0;width:13px;height:13px;float:right;margin-right:15px;font-size:12px;font-weight:400}.main-menu .menu-body li .menu-title i.on{margin-top:16px;width:13px;height:13px;float:right;margin-right:15px;font-size:12px;font-weight:400}.main-menu .menu-body li .menu-title.select{background:#1979ff;color:#fff}.main-menu .menu-body li .menu-title.hover{background:#1e5bd6;color:#fff}.menu-sub{background:#181b1f}.menu-sub li{height:42px;line-height:42px;color:#999;cursor:pointer;text-align:left!important;padding-left:60px}.menu-sub li:hover{background:#111214;color:#fff}.menu-sub li.hover{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAAAdElEQVQY04XOwQnCQBQE0JetwApyE2Er2ALEJtKIkHtII3tNAWIBVhAC3raCgA14cA8qER/MZT58poG2m/cYcfRyxbnkeG/abj7ghp1PK1LAsHFUuyG8vd1yCv4IddAvl4C+Dvq2og8lxwUJEx41E1LJcXkCWCIYS4tT67sAAAAASUVORK5CYII=) 25px center no-repeat #111214;color:#fff}"]
                }] }
    ];
    /** @nocollapse */
    NavBarComponent.ctorParameters = function () { return [
        { type: Router }
    ]; };
    NavBarComponent.propDecorators = {
        customScaling: [{ type: Input }],
        ecpStyle: [{ type: Input }],
        menuList: [{ type: Input }],
        goTo: [{ type: Output }]
    };
    return NavBarComponent;
}());
export { NavBarComponent };
if (false) {
    /** @type {?} */
    NavBarComponent.prototype.customScaling;
    /** @type {?} */
    NavBarComponent.prototype.ecpStyle;
    /** @type {?} */
    NavBarComponent.prototype.menuList;
    /** @type {?} */
    NavBarComponent.prototype.goTo;
    /** @type {?} */
    NavBarComponent.prototype.menuStatus;
    /** @type {?} */
    NavBarComponent.prototype.hoverId;
    /** @type {?} */
    NavBarComponent.prototype.selectId;
    /** @type {?} */
    NavBarComponent.prototype.thisMenuId;
    /** @type {?} */
    NavBarComponent.prototype.hisHover;
    /** @type {?} */
    NavBarComponent.prototype.router;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9lY3AtYW50LXVpLyIsInNvdXJjZXMiOlsibGliL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBLE9BQU8sRUFBQyxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDN0UsT0FBTyxFQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUMvRSxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0saUJBQWlCLENBQUM7O0lBK0JyQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQXdPRTtJQUVGLHlCQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTt3QkFwUE4sRUFBRTt3QkFDRSxFQUFFO29CQUNqQixJQUFJLFlBQVksRUFBRTswQkFDdEIsS0FBSzt1QkFDUixDQUFDO3dCQUNBLENBQUM7MEJBQ0MsQ0FBQzt3QkFDSCxDQUFDO0tBOE9YOzs7O0lBRUQsa0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksRUFBRTtZQUM5QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztTQUMzQjtLQUNGO0lBRUQsT0FBTzs7Ozs7SUFDUCxtQ0FBUzs7OztJQUFULFVBQVUsRUFBRTtRQUNWLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxFQUFFLEVBQUU7WUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7U0FDckI7YUFBTTtZQUNMLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1NBQ25CO0tBQ0Y7SUFFRCxPQUFPOzs7OztJQUNQLG9DQUFVOzs7O0lBQVYsVUFBVyxFQUFFO1FBQ1gsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7S0FFcEI7SUFFRCxPQUFPOzs7O0lBQ1Asa0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7S0FDdEI7SUFFRCxLQUFLOzs7O0lBQ0wsNEJBQUU7OztJQUFGOztRQUNFLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssS0FBSyxFQUFFO1lBQzdCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUU3QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztTQUV4QjtLQUNGO0lBRUQsS0FBSzs7OztJQUNMLDZCQUFHOzs7SUFBSDs7UUFDRSxJQUFNLElBQUksR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzdCLElBQUksSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLEVBQUU7WUFDOUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7U0FDekI7S0FDRjs7Ozs7SUFFRCx1Q0FBYTs7OztJQUFiLFVBQWMsQ0FBQztRQUNiLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxJQUFJLEVBQUU7WUFDbEQsT0FBTyxPQUFPLENBQUM7U0FDaEI7YUFBTTtZQUNMLE9BQU8sTUFBTSxDQUFDO1NBQ2Y7S0FDRjs7Ozs7O0lBR0QscUNBQVc7Ozs7O0lBQVgsVUFBWSxHQUFHLEVBQUUsT0FBTzs7UUFDdEIsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLElBQUksT0FBTyxJQUFJLElBQUksSUFBSSxPQUFPLElBQUksRUFBRSxFQUFFO1lBQ3BDLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1NBQ3JCO1FBQ0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUM7OztRQUcxQixPQUFPLEtBQUssQ0FBQztLQUNkOztnQkEzVUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO29CQUN2Qiw0b0RBQXVDO29CQUV2QyxVQUFVLEVBQUU7d0JBQ1YsT0FBTyxDQUFDLGNBQWMsRUFBRTs0QkFDdEIsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUM7Z0NBQ2xCLE1BQU0sRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRzs2QkFDekMsQ0FBQyxDQUFDOzRCQUNILEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDO2dDQUNuQixNQUFNLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEdBQUc7NkJBQzVDLENBQUMsQ0FBQzs0QkFDSCxVQUFVLENBQUMsZUFBZSxFQUFFLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQzs0QkFDcEQsVUFBVSxDQUFDLGVBQWUsRUFBRSxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7eUJBQ3JELENBQUM7cUJBQ0g7O2lCQUNGOzs7O2dCQWxCTyxNQUFNOzs7Z0NBb0JYLEtBQUs7MkJBQ0wsS0FBSzsyQkFDTCxLQUFLO3VCQUNMLE1BQU07OzBCQTVCVDs7U0F3QmEsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAgIOW3pui+ueWvvOiIqiAnZWNwLW5hdi1iYXInIHYxLjJcclxuKi9cclxuaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHthbmltYXRlLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXJ9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZWNwLW5hdi1iYXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uYXYtYmFyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9uYXYtYmFyLmNvbXBvbmVudC5jc3MnXSxcclxuICBhbmltYXRpb25zOiBbXHJcbiAgICB0cmlnZ2VyKCdkaXNwbGF5U3RhdGUnLCBbXHJcbiAgICAgIHN0YXRlKCdub25lJywgc3R5bGUoe1xyXG4gICAgICAgIGhlaWdodDogMCwgZGlzcGxheTogJ25vbmUnLCBvcGFjaXR5OiAnMCcsXHJcbiAgICAgIH0pKSxcclxuICAgICAgc3RhdGUoJ2Jsb2NrJywgc3R5bGUoe1xyXG4gICAgICAgIGhlaWdodDogJyonLCBkaXNwbGF5OiAnYmxvY2snLCBvcGFjaXR5OiAnMScsXHJcbiAgICAgIH0pKSxcclxuICAgICAgdHJhbnNpdGlvbignbm9uZSA9PiBibG9jaycsIGFuaW1hdGUoJzEwMG1zIGxpbmVhcicpKSxcclxuICAgICAgdHJhbnNpdGlvbignYmxvY2sgPT4gbm9uZScsIGFuaW1hdGUoJzEwMG1zIGxpbmVhcicpKVxyXG4gICAgXSlcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOYXZCYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGN1c3RvbVNjYWxpbmc6IGJvb2xlYW47IC8vIOiHquWumuS5ieS8uOe8qSx0cnVlIOWPr+S7pee8qeaUvu+8jGZhbHNlIOemgeatoue8qeaUvlxyXG4gIEBJbnB1dCgpIGVjcFN0eWxlOiBvYmplY3QgPSB7fTtcclxuICBASW5wdXQoKSBtZW51TGlzdDogQXJyYXk8YW55PiA9IFtdO1xyXG4gIEBPdXRwdXQoKSBnb1RvID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIG1lbnVTdGF0dXMgPSAnb2ZmJztcclxuICBob3ZlcklkID0gMDsgLy8g5b2T5YmN5bey6YCJ5LitXHJcbiAgc2VsZWN0SWQgPSAwOyAvLyDlvZPliY3pvKDmoIfpgInkuK1cclxuICB0aGlzTWVudUlkID0gMDsgLy8g5b2T5YmN6YCJ5Lit5a2Q6I+c5Y2VXHJcbiAgaGlzSG92ZXIgPSAwOyAvLyDljoblj7LpgInkuK3oj5zljZUs5pS257yp5pe26K6w5b2V77yM5bGV5byA5pe25L2/55SoXHJcblxyXG5cclxuICAvKlxyXG5cclxuICAgIG1lbnVzOiBBcnJheTxhbnk+ID0gW1xyXG4gICAgICB7XHJcbiAgICAgICAgJ25hbWUnOiAn5Z+65pys57uE5Lu2JyxcclxuICAgICAgICAndXJpJzogJycsXHJcbiAgICAgICAgJ2ljb251cmknOiAncGlwZV9hcmVhJyxcclxuICAgICAgICAnY2hpbGQnOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgICduYW1lJzogJ+W3pui+ueWvvOiIqicsXHJcbiAgICAgICAgICAgICd1cmknOiAnbmF2QmFyUGFnZScsXHJcbiAgICAgICAgICAgICdpY29udXJpJzogJycsXHJcbiAgICAgICAgICAgICdjaGlsZCc6IG51bGxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgICduYW1lJzogJ+mhtumDqOWvvOiIqicsXHJcbiAgICAgICAgICAgICd1cmknOiAndG9wTmF2UGFnZScsXHJcbiAgICAgICAgICAgICdpY29udXJpJzogJycsXHJcbiAgICAgICAgICAgICdjaGlsZCc6IG51bGxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgICduYW1lJzogJ+mhtemdouW3pui+ueWvvOiIqicsXHJcbiAgICAgICAgICAgICd1cmknOiAncGFnZUxlZnROYXZQYWdlJyxcclxuICAgICAgICAgICAgJ2ljb251cmknOiAnJyxcclxuICAgICAgICAgICAgJ2NoaWxkJzogbnVsbFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgJ25hbWUnOiAn5byA5YWz5YiH5o2iJyxcclxuICAgICAgICAgICAgJ3VyaSc6ICdzd2l0Y2hQYWdlJyxcclxuICAgICAgICAgICAgJ2ljb251cmknOiAnJyxcclxuICAgICAgICAgICAgJ2NoaWxkJzogbnVsbFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgJ25hbWUnOiAn6Z2i5YyF5bGRJyxcclxuICAgICAgICAgICAgJ3VyaSc6ICdicmVhZENydW1iUGFnZScsXHJcbiAgICAgICAgICAgICdpY29udXJpJzogJycsXHJcbiAgICAgICAgICAgICdjaGlsZCc6IG51bGxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgICduYW1lJzogJ+atpemqpOadoScsXHJcbiAgICAgICAgICAgICd1cmknOiAnc3RlcHNJbmZvJyxcclxuICAgICAgICAgICAgJ2ljb251cmknOiAnJyxcclxuICAgICAgICAgICAgJ2NoaWxkJzogbnVsbFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgJ25hbWUnOiAn5bel5YW35p2hJyxcclxuICAgICAgICAgICAgJ3VyaSc6ICd0b29sQmFyUGFnZScsXHJcbiAgICAgICAgICAgICdpY29udXJpJzogJycsXHJcbiAgICAgICAgICAgICdjaGlsZCc6IG51bGxcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgJ25hbWUnOiAn5pCc57Si5qih5Z2XJyxcclxuICAgICAgICAgICAgJ3VyaSc6ICdzZWFjaE1vZHVsZVBhZ2UnLFxyXG4gICAgICAgICAgICAnaWNvbnVyaSc6ICcnLFxyXG4gICAgICAgICAgICAnY2hpbGQnOiBudWxsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAsXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgICduYW1lJzogJ+W8ueWHuuivpuaDhScsXHJcbiAgICAgICAgICAgICd1cmknOiAnb3BlbkRldGFpbHNJbmZvJyxcclxuICAgICAgICAgICAgJ2ljb251cmknOiAnJyxcclxuICAgICAgICAgICAgJ2NoaWxkJzogbnVsbFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICAnbmFtZSc6ICflvLnlh7ror6bmg4UyJyxcclxuICAgICAgICAgICAgJ3VyaSc6ICdvcGVuRGV0YWlsc0luZm8yJyxcclxuICAgICAgICAgICAgJ2ljb251cmknOiAnJyxcclxuICAgICAgICAgICAgJ2NoaWxkJzogbnVsbFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgJ25hbWUnOiAn5Zyw5Zu+55So57uE5Lu2JyxcclxuICAgICAgICAgICAgJ3VyaSc6ICdkb3RSaXBwbGVQYWdlJyxcclxuICAgICAgICAgICAgJ2ljb251cmknOiAnJyxcclxuICAgICAgICAgICAgJ2NoaWxkJzogbnVsbFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgJ25hbWUnOiAn5L6n6L655qCP5by55Ye6JyxcclxuICAgICAgICAgICAgJ3VyaSc6ICdwb3B1cFNpZGViYXJQYWdlJyxcclxuICAgICAgICAgICAgJ2ljb251cmknOiAnJyxcclxuICAgICAgICAgICAgJ2NoaWxkJzogbnVsbFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgJ25hbWUnOiAn5qCH562+6aG1JyxcclxuICAgICAgICAgICAgJ3VyaSc6ICd0YWJzUGFnZScsXHJcbiAgICAgICAgICAgICdpY29udXJpJzogJycsXHJcbiAgICAgICAgICAgICdjaGlsZCc6IG51bGxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgICduYW1lJzogJ+eKtuaAgeadoScsXHJcbiAgICAgICAgICAgICd1cmknOiAnc3RhdHVzQmFyUGFnZScsXHJcbiAgICAgICAgICAgICdpY29udXJpJzogJycsXHJcbiAgICAgICAgICAgICdjaGlsZCc6IG51bGxcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgXVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgJ25hbWUnOiAn5biD5bGA57uE5Lu2JyxcclxuICAgICAgICAndXJpJzogJycsXHJcbiAgICAgICAgJ2ljb251cmknOiAncGlwZV9hcmVhJyxcclxuICAgICAgICAnY2hpbGQnOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgICduYW1lJzogJ+W4g+WxgOa8lOekuicsXHJcbiAgICAgICAgICAgICd1cmknOiAnbGF5b3V0RGVtb1BhZ2UnLFxyXG4gICAgICAgICAgICAnaWNvbnVyaSc6ICcnLFxyXG4gICAgICAgICAgICAnY2hpbGQnOiBudWxsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICAnbmFtZSc6ICfkuIrkuK3kuIsnLFxyXG4gICAgICAgICAgICAndXJpJzogJ2ZsZXhUb3BDZW50ZXJCb3R0b20nLFxyXG4gICAgICAgICAgICAnaWNvbnVyaSc6ICcnLFxyXG4gICAgICAgICAgICAnY2hpbGQnOiBudWxsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICAnbmFtZSc6ICflt6bkuK3lj7MnLFxyXG4gICAgICAgICAgICAndXJpJzogJ2ZsZXhsZWZ0Q2VudGVyUmlnaHQnLFxyXG4gICAgICAgICAgICAnaWNvbnVyaSc6ICcnLFxyXG4gICAgICAgICAgICAnY2hpbGQnOiBudWxsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgJ25hbWUnOiAn5pWw5o2u5bGV56S6JyxcclxuICAgICAgICAndXJpJzogJycsXHJcbiAgICAgICAgJ2ljb251cmknOiAncGlwZV9hcmVhJyxcclxuICAgICAgICAnY2hpbGQnOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgICduYW1lJzogJ+eZu+W9leeVjOmdoicsXHJcbiAgICAgICAgICAgICd1cmknOiAnbG9naW5QYWdlJyxcclxuICAgICAgICAgICAgJ2ljb251cmknOiAnJyxcclxuICAgICAgICAgICAgJ2NoaWxkJzogbnVsbFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgJ25hbWUnOiAn57O757uf5YiH5o2iJyxcclxuICAgICAgICAgICAgJ3VyaSc6ICdob21lUGFnZScsXHJcbiAgICAgICAgICAgICdpY29udXJpJzogJycsXHJcbiAgICAgICAgICAgICdjaGlsZCc6IG51bGxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgICduYW1lJzogJ+mhtemdoua8lOekujEnLFxyXG4gICAgICAgICAgICAndXJpJzogJ3BhZ2VEZW1vJyxcclxuICAgICAgICAgICAgJ2ljb251cmknOiAnJyxcclxuICAgICAgICAgICAgJ2NoaWxkJzogbnVsbFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgJ25hbWUnOiAn6aG16Z2i5ryU56S6MycsXHJcbiAgICAgICAgICAgICd1cmknOiAncGFnZURlbW8zJyxcclxuICAgICAgICAgICAgJ2ljb251cmknOiAnJyxcclxuICAgICAgICAgICAgJ2NoaWxkJzogbnVsbFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgJ25hbWUnOiAn6aG16Z2i5ryU56S6MicsXHJcbiAgICAgICAgICAgICd1cmknOiAnZGV0YWlsc1N0eWxlMScsXHJcbiAgICAgICAgICAgICdpY29udXJpJzogJycsXHJcbiAgICAgICAgICAgICdjaGlsZCc6IG51bGxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgICduYW1lJzogJ+ihqOagvOWxleekujEnLFxyXG4gICAgICAgICAgICAndXJpJzogJ2RhdGFEZW1vUGFnZScsXHJcbiAgICAgICAgICAgICdpY29udXJpJzogJycsXHJcbiAgICAgICAgICAgICdjaGlsZCc6IG51bGxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgICduYW1lJzogJ+ihqOagvOWxleekuicsXHJcbiAgICAgICAgICAgICd1cmknOiAndGFibGVQYWdlJyxcclxuICAgICAgICAgICAgJ2ljb251cmknOiAnJyxcclxuICAgICAgICAgICAgJ2NoaWxkJzogbnVsbFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICAnbmFtZSc6ICflm77moIfmvJTnpLonLFxyXG4gICAgICAgICAgICAndXJpJzogJ2ljb25QYWdlJyxcclxuICAgICAgICAgICAgJ2ljb251cmknOiAnJyxcclxuICAgICAgICAgICAgJ2NoaWxkJzogbnVsbFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgJ25hbWUnOiAn5qCH562+6aG177yI5Lyg6YCS5qih5p2/77yJJyxcclxuICAgICAgICAgICAgJ3VyaSc6ICdlY3BUYWJzZXQnLFxyXG4gICAgICAgICAgICAnaWNvbnVyaSc6ICcnLFxyXG4gICAgICAgICAgICAnY2hpbGQnOiBudWxsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICAnbmFtZSc6ICc0MDQvNTAw6aG16Z2iJyxcclxuICAgICAgICAgICAgJ3VyaSc6ICdodHRwUGFnZScsXHJcbiAgICAgICAgICAgICdpY29udXJpJzogJycsXHJcbiAgICAgICAgICAgICdjaGlsZCc6IG51bGxcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgJ25hbWUnOiAn55Sf5oiQ5biQ5Y2VJyxcclxuICAgICAgICAgICAgJ3VyaSc6ICdnZW5lcmF0ZUJpbGxQYWdlJyxcclxuICAgICAgICAgICAgJ2ljb251cmknOiAnJyxcclxuICAgICAgICAgICAgJ2NoaWxkJzogbnVsbFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgJ25hbWUnOiAn5by556qX5ryU56S6JyxcclxuICAgICAgICAgICAgJ3VyaSc6ICd3YXRlckNvbnN1bXB0aW9uQW5hbHlzaXNQb3B1cCcsXHJcbiAgICAgICAgICAgICdpY29udXJpJzogJycsXHJcbiAgICAgICAgICAgICdjaGlsZCc6IG51bGxcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgJ25hbWUnOiAn57uE5Lu26IGU5YqoJyxcclxuICAgICAgICAgICAgJ3VyaSc6ICdwYWdlRGVtbzInLFxyXG4gICAgICAgICAgICAnaWNvbnVyaSc6ICcnLFxyXG4gICAgICAgICAgICAnY2hpbGQnOiBudWxsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICAnbmFtZSc6ICfosIPluqbkuK3lv4MnLFxyXG4gICAgICAgICAgICAndXJpJzogJ2Rpc3BhdGNoUGFnZScsXHJcbiAgICAgICAgICAgICdpY29udXJpJzogJycsXHJcbiAgICAgICAgICAgICdjaGlsZCc6IG51bGxcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgJ25hbWUnOiAn5o6n5Yi25Y+w5Li76aG1JyxcclxuICAgICAgICAgICAgJ3VyaSc6ICdjb25zb2xlUGFnZScsXHJcbiAgICAgICAgICAgICdpY29udXJpJzogJycsXHJcbiAgICAgICAgICAgICdjaGlsZCc6IG51bGxcclxuICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAnbmFtZSc6ICflhbPkuo4nLFxyXG4gICAgICAgICd1cmknOiAnYWJvdXQnLFxyXG4gICAgICAgICdpY29udXJpJzogJ3BpcGVfcmVwb3J0JyxcclxuICAgICAgICAnY2hpbGQnOiBbXVxyXG4gICAgICB9XHJcbiAgICBdO1xyXG5cclxuICAqL1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGlmICh0aGlzLmN1c3RvbVNjYWxpbmcgPT0gbnVsbCkge1xyXG4gICAgICB0aGlzLmN1c3RvbVNjYWxpbmcgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g6I+c5Y2V6YCJ5LitXHJcbiAgaG92ZXJNZW51KGlkKSB7XHJcbiAgICBpZiAodGhpcy5ob3ZlcklkID09PSBpZCkge1xyXG4gICAgICB0aGlzLmhvdmVySWQgPSBudWxsO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5ob3ZlcklkID0gaWQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyDnp7vkuIrljrvnmoRcclxuICBzZWxlY3RNZW51KGlkKSB7XHJcbiAgICB0aGlzLnNlbGVjdElkID0gaWQ7XHJcblxyXG4gIH1cclxuXHJcbiAgLy8g5riF6Zmk6YCJ5LitXHJcbiAgY2xlYW5TZWwoKSB7XHJcbiAgICB0aGlzLnNlbGVjdElkID0gbnVsbDtcclxuICB9XHJcblxyXG4gIC8vIOWxleW8gFxyXG4gIG9uKCkge1xyXG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICBpZiAoc2VsZi5tZW51U3RhdHVzID09PSAnb2ZmJykge1xyXG4gICAgICBzZWxmLmhvdmVySWQgPSBzZWxmLmhpc0hvdmVyO1xyXG5cclxuICAgICAgc2VsZi5tZW51U3RhdHVzID0gJ29uJztcclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyDmlLbnvKlcclxuICBvZmYoKSB7XHJcbiAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgIHNlbGYuaGlzSG92ZXIgPSBzZWxmLmhvdmVySWQ7XHJcbiAgICBpZiAoc2VsZi5jdXN0b21TY2FsaW5nID09IHRydWUpIHtcclxuICAgICAgdGhpcy5tZW51U3RhdHVzID0gJ29mZic7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzaG93Q2hpbGRNZW51KGkpIHtcclxuICAgIGlmIChpID09PSB0aGlzLmhvdmVySWQgJiYgdGhpcy5tZW51U3RhdHVzID09PSAnb24nKSB7XHJcbiAgICAgIHJldHVybiAnYmxvY2snO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuICdub25lJztcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBzZWxlY3RlZEFwcCh1cmksIGhvdmVySWQpIHtcclxuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgdGhpcy5nb1RvLmVtaXQodXJpKTtcclxuICAgIGlmIChob3ZlcklkID09IG51bGwgfHwgaG92ZXJJZCA9PSAnJykge1xyXG4gICAgICBzZWxmLnRoaXNNZW51SWQgPSAwO1xyXG4gICAgfVxyXG4gICAgc2VsZi50aGlzTWVudUlkID0gaG92ZXJJZDtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdjbGljaycpO1xyXG4gICAgLy8gc2VsZi5yb3V0ZXIubmF2aWdhdGUoW3VyaV0pO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcblxyXG59XHJcbiJdfQ==