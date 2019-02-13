/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
var ToolBarComponent = /** @class */ (function () {
    function ToolBarComponent() {
        this.ecpStyle = {};
        //@Input() customLocation: any={'x': '100px', 'y': '50px'};
        this.selectId = new EventEmitter();
        /*
            menuJSON = [{
              "name": "添加元素",
              "url": "http://www.google.com",
              "chird": [
                {
                  "name": "坐标",
                  "url": "http://www.google.com"
                },
                {
                  "name": "传感器",
                  "url": "http://www.baidu.com"
                },
                {
                  "name": "管道",
                  "url": "http://www.SoSo.com"
                },
                {
                  "name": "节点",
                  "url": "http://www.SoSo.com"
                },
                {
                  "name": "堵头封板",
                  "url": "http://www.SoSo.com"
                },
                {
                  "name": "闸阀",
                  "url": "http://www.SoSo.com"
                },
                {
                  "name": "消防栓",
                  "url": "http://www.SoSo.com"
                }
              ]
            }, {
              "name": "筛查",
              "url": "http://www.google.com",
              "chird": null
            }, {
              "name": "预警",
              "url": "http://www.google.com",
              "chird": [
                {
                  "name": "坐标",
                  "url": "http://www.google.com"
                },
                {
                  "name": "传感器",
                  "url": "http://www.baidu.com"
                },
                {
                  "name": "管道",
                  "url": "http://www.SoSo.com"
                }
              ]
            }, {
              "name": "爆管分析",
              "url": "http://www.google.com",
              "chird": null
            }, {
              "name": "阀门分析",
              "url": "http://www.google.com",
              "chird": null
            }];*/
        this.menuJSON = [{
                'name': '添加元素',
                'url': 'http://www.google.com',
                'chird': [
                    {
                        'name': '坐标',
                        'url': 'add_point'
                    },
                    {
                        'name': '传感器',
                        'url': 'add_sensor'
                    },
                    {
                        'name': '管道',
                        'url': 'add_pipe'
                    },
                    {
                        'name': '节点',
                        'url': 'add_node'
                    },
                    {
                        'name': '堵头封板',
                        'url': 'add_plug'
                    },
                    {
                        'name': '闸阀',
                        'url': 'add_valve'
                    },
                    {
                        'name': '消防栓',
                        'url': 'add_hydrant'
                    }
                ]
            }, {
                'name': '筛查',
                'url': 'screening',
                'chird': null
            }, {
                'name': '预警',
                'url': 'http://www.google.com',
                'chird': [
                    {
                        'name': '实时流量显示',
                        'url': 'http://www.google.com',
                        'isSwitch': true
                    },
                    {
                        'name': '分区用水量分析',
                        'url': 'http://www.baidu.com'
                    }
                ]
            }, {
                'name': '爆管分析',
                'url': 'analysis_pipe',
                'chird': null
            }, {
                'name': '阀门分析',
                'url': 'analysis_valve',
                'chird': null
            }];
        this.hoverId = 0;
        this.thisMenuId = 0;
    }
    /**
     * @param {?} url
     * @return {?}
     */
    ToolBarComponent.prototype.click = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        this.selectId.emit(url);
    };
    /**
     * @param {?} i
     * @return {?}
     */
    ToolBarComponent.prototype.menuSel = /**
     * @param {?} i
     * @return {?}
     */
    function (i) {
        this.hoverId = i;
        this.thisMenuId = i;
    };
    /**
     * @param {?} i
     * @return {?}
     */
    ToolBarComponent.prototype.showSubMenu = /**
     * @param {?} i
     * @return {?}
     */
    function (i) {
        this.hoverId = i;
        this.thisMenuId = i;
    };
    /**
     * @return {?}
     */
    ToolBarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /*   if (this.customLocation == '') {
              this.customLocation = {'x': '0', 'y': '0'};
            }*/
        this.menuJSON.reverse();
    };
    ToolBarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ecp-tool-bar',
                    template: "<div class=\"map-top-toolbar\" [ngStyle]=\"ecpStyle\" >\r\n  <span *ngFor=\"let item of menuJSON;let i = index;\">\r\n  <a (click)=\"menuSel(i);click(item.url)\" (mouseover)=\"menuSel(i)\"\r\n     [ngClass]=\"{'hover':hoverId==i}\">{{item.name}} <i class=\"icon dongxiniotwater general_unfold\" *ngIf=\"item.chird!=null\"></i></a>\r\n  <ul class=\"sub-menu\" [ngClass]=\"{'show':thisMenuId==i}\" (mouseleave)=\"showSubMenu(50)\">\r\n     <ng-container *ngFor=\"let childmenu of item.chird;let childId = index; \">\r\n            <li [ngClass]=\"{'switch':childmenu.isSwitch==true}\" (click)=\"click(childmenu.url)\">{{childmenu.name}} <span *ngIf=\"childmenu.isSwitch==true\"><!--<nz-switch nzSize=\"small\"></nz-switch>--></span></li>\r\n     </ng-container>\r\n  </ul>\r\n  </span>\r\n</div>\r\n",
                    styles: [".map-top-toolbar{position:absolute;font-weight:400;color:rgba(25,25,25,1);font-size:16px;height:36px;line-height:36px;text-align:center;background:rgba(255,255,255,1);border-radius:4px;box-shadow:0 0 4px rgba(0,0,0,.3)}.map-top-toolbar span{position:relative;width:100px;float:right;text-align:center;cursor:pointer;font-size:14px;font-family:MicrosoftYaHei;font-weight:400;color:rgba(255,255,255,1)}.map-top-toolbar span a{height:36px;display:block;color:#191919;border-right:1px solid #dadada}.map-top-toolbar span a.hover,.map-top-toolbar span a:hover{background:#1e5bd6;color:#fff}.map-top-toolbar span:first-child a{border-radius:0 4px 4px 0;border-right:0 solid #dadada!important}.map-top-toolbar span:last-child a{border-radius:4px 0 0 4px}.map-top-toolbar span a i{vertical-align:middle;font-size:6px;margin-left:2px;color:#999}.map-top-toolbar .sub-menu{position:absolute;right:0;top:-1000px;min-width:100px;padding:0;background:rgba(255,255,255,1);box-shadow:0 3px 8px 0 rgba(0,0,0,.3);height:auto}.map-top-toolbar .show{top:40px}.map-top-toolbar .sub-menu li{width:100%;text-align:left;height:42px;line-height:42px;background:#fff;padding:0 0 0 15px;color:rgba(25,25,25,1);list-style:none}.map-top-toolbar .sub-menu li.switch{width:170px}.map-top-toolbar .sub-menu li.switch>span{display:inline-block;width:40px;float:right;margin-right:7px}.map-top-toolbar .sub-menu li:hover{background:#d2ddf2;color:#191919}"]
                }] }
    ];
    /** @nocollapse */
    ToolBarComponent.ctorParameters = function () { return []; };
    ToolBarComponent.propDecorators = {
        customX: [{ type: Input }],
        customY: [{ type: Input }],
        ecpStyle: [{ type: Input }],
        selectId: [{ type: Output }]
    };
    return ToolBarComponent;
}());
export { ToolBarComponent };
if (false) {
    /** @type {?} */
    ToolBarComponent.prototype.customX;
    /** @type {?} */
    ToolBarComponent.prototype.customY;
    /** @type {?} */
    ToolBarComponent.prototype.ecpStyle;
    /** @type {?} */
    ToolBarComponent.prototype.selectId;
    /** @type {?} */
    ToolBarComponent.prototype.menuJSON;
    /** @type {?} */
    ToolBarComponent.prototype.hoverId;
    /** @type {?} */
    ToolBarComponent.prototype.thisMenuId;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbC1iYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZWNwLWFudC11aS8iLCJzb3VyY2VzIjpbImxpYi90b29sLWJhci90b29sLWJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7O0lBNkozRTt3QkFsSnlCLEVBQUU7O3dCQUVnQixJQUFJLFlBQVksRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0JBdUVsRCxDQUFDO2dCQUNWLE1BQU0sRUFBRSxNQUFNO2dCQUNkLEtBQUssRUFBRSx1QkFBdUI7Z0JBQzlCLE9BQU8sRUFBRTtvQkFDUDt3QkFDRSxNQUFNLEVBQUUsSUFBSTt3QkFDWixLQUFLLEVBQUUsV0FBVztxQkFDbkI7b0JBQ0Q7d0JBQ0UsTUFBTSxFQUFFLEtBQUs7d0JBQ2IsS0FBSyxFQUFFLFlBQVk7cUJBQ3BCO29CQUNEO3dCQUNFLE1BQU0sRUFBRSxJQUFJO3dCQUNaLEtBQUssRUFBRSxVQUFVO3FCQUNsQjtvQkFDRDt3QkFDRSxNQUFNLEVBQUUsSUFBSTt3QkFDWixLQUFLLEVBQUUsVUFBVTtxQkFDbEI7b0JBQ0Q7d0JBQ0UsTUFBTSxFQUFFLE1BQU07d0JBQ2QsS0FBSyxFQUFFLFVBQVU7cUJBQ2xCO29CQUNEO3dCQUNFLE1BQU0sRUFBRSxJQUFJO3dCQUNaLEtBQUssRUFBRSxXQUFXO3FCQUNuQjtvQkFDRDt3QkFDRSxNQUFNLEVBQUUsS0FBSzt3QkFDYixLQUFLLEVBQUUsYUFBYTtxQkFDckI7aUJBQ0Y7YUFDRixFQUFFO2dCQUNELE1BQU0sRUFBRSxJQUFJO2dCQUNaLEtBQUssRUFBRSxXQUFXO2dCQUNsQixPQUFPLEVBQUUsSUFBSTthQUNkLEVBQUU7Z0JBQ0QsTUFBTSxFQUFFLElBQUk7Z0JBQ1osS0FBSyxFQUFFLHVCQUF1QjtnQkFDOUIsT0FBTyxFQUFFO29CQUNQO3dCQUNFLE1BQU0sRUFBRSxRQUFRO3dCQUNoQixLQUFLLEVBQUUsdUJBQXVCO3dCQUM5QixVQUFVLEVBQUUsSUFBSTtxQkFDakI7b0JBQ0Q7d0JBQ0UsTUFBTSxFQUFFLFNBQVM7d0JBQ2pCLEtBQUssRUFBRSxzQkFBc0I7cUJBQzlCO2lCQUNGO2FBQ0YsRUFBRTtnQkFDRCxNQUFNLEVBQUUsTUFBTTtnQkFDZCxLQUFLLEVBQUUsZUFBZTtnQkFDdEIsT0FBTyxFQUFFLElBQUk7YUFDZCxFQUFFO2dCQUNELE1BQU0sRUFBRSxNQUFNO2dCQUNkLEtBQUssRUFBRSxnQkFBZ0I7Z0JBQ3ZCLE9BQU8sRUFBRSxJQUFJO2FBQ2QsQ0FBQzt1QkFFZ0IsQ0FBQzswQkFDRSxDQUFDO0tBWXJCOzs7OztJQS9JRCxnQ0FBSzs7OztJQUFMLFVBQU0sR0FBRztRQUNQLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ3pCOzs7OztJQWtJRCxrQ0FBTzs7OztJQUFQLFVBQVEsQ0FBQztRQUNQLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO0tBQ3JCOzs7OztJQUVELHNDQUFXOzs7O0lBQVgsVUFBWSxDQUFDO1FBQ1gsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7S0FDckI7Ozs7SUFLRCxtQ0FBUTs7O0lBQVI7Ozs7UUFJRSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO0tBQ3pCOztnQkFuS0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO29CQUN4Qix5eUJBQXdDOztpQkFFekM7Ozs7OzBCQUdFLEtBQUs7MEJBQ0wsS0FBSzsyQkFDTCxLQUFLOzJCQUVMLE1BQU07OzJCQWJUOztTQU9hLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2VjcC10b29sLWJhcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3Rvb2wtYmFyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi90b29sLWJhci5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFRvb2xCYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKSBjdXN0b21YO1xyXG4gIEBJbnB1dCgpIGN1c3RvbVk7XHJcbiAgQElucHV0KCkgZWNwU3R5bGU6b2JqZWN0PXt9XHJcbiAgLy9ASW5wdXQoKSBjdXN0b21Mb2NhdGlvbjogYW55PXsneCc6ICcxMDBweCcsICd5JzogJzUwcHgnfTtcclxuICBAT3V0cHV0KCkgc2VsZWN0SWQ6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBjbGljayh1cmwpIHtcclxuICAgIHRoaXMuc2VsZWN0SWQuZW1pdCh1cmwpO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAgIG1lbnVKU09OID0gW3tcclxuICAgICAgXCJuYW1lXCI6IFwi5re75Yqg5YWD57SgXCIsXHJcbiAgICAgIFwidXJsXCI6IFwiaHR0cDovL3d3dy5nb29nbGUuY29tXCIsXHJcbiAgICAgIFwiY2hpcmRcIjogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwibmFtZVwiOiBcIuWdkOagh1wiLFxyXG4gICAgICAgICAgXCJ1cmxcIjogXCJodHRwOi8vd3d3Lmdvb2dsZS5jb21cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgXCJuYW1lXCI6IFwi5Lyg5oSf5ZmoXCIsXHJcbiAgICAgICAgICBcInVybFwiOiBcImh0dHA6Ly93d3cuYmFpZHUuY29tXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwibmFtZVwiOiBcIueuoemBk1wiLFxyXG4gICAgICAgICAgXCJ1cmxcIjogXCJodHRwOi8vd3d3LlNvU28uY29tXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwibmFtZVwiOiBcIuiKgueCuVwiLFxyXG4gICAgICAgICAgXCJ1cmxcIjogXCJodHRwOi8vd3d3LlNvU28uY29tXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwibmFtZVwiOiBcIuWgteWktOWwgeadv1wiLFxyXG4gICAgICAgICAgXCJ1cmxcIjogXCJodHRwOi8vd3d3LlNvU28uY29tXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwibmFtZVwiOiBcIumXuOmYgFwiLFxyXG4gICAgICAgICAgXCJ1cmxcIjogXCJodHRwOi8vd3d3LlNvU28uY29tXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwibmFtZVwiOiBcIua2iOmYsuagk1wiLFxyXG4gICAgICAgICAgXCJ1cmxcIjogXCJodHRwOi8vd3d3LlNvU28uY29tXCJcclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH0sIHtcclxuICAgICAgXCJuYW1lXCI6IFwi562b5p+lXCIsXHJcbiAgICAgIFwidXJsXCI6IFwiaHR0cDovL3d3dy5nb29nbGUuY29tXCIsXHJcbiAgICAgIFwiY2hpcmRcIjogbnVsbFxyXG4gICAgfSwge1xyXG4gICAgICBcIm5hbWVcIjogXCLpooToraZcIixcclxuICAgICAgXCJ1cmxcIjogXCJodHRwOi8vd3d3Lmdvb2dsZS5jb21cIixcclxuICAgICAgXCJjaGlyZFwiOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgXCJuYW1lXCI6IFwi5Z2Q5qCHXCIsXHJcbiAgICAgICAgICBcInVybFwiOiBcImh0dHA6Ly93d3cuZ29vZ2xlLmNvbVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcIm5hbWVcIjogXCLkvKDmhJ/lmahcIixcclxuICAgICAgICAgIFwidXJsXCI6IFwiaHR0cDovL3d3dy5iYWlkdS5jb21cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgXCJuYW1lXCI6IFwi566h6YGTXCIsXHJcbiAgICAgICAgICBcInVybFwiOiBcImh0dHA6Ly93d3cuU29Tby5jb21cIlxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfSwge1xyXG4gICAgICBcIm5hbWVcIjogXCLniIbnrqHliIbmnpBcIixcclxuICAgICAgXCJ1cmxcIjogXCJodHRwOi8vd3d3Lmdvb2dsZS5jb21cIixcclxuICAgICAgXCJjaGlyZFwiOiBudWxsXHJcbiAgICB9LCB7XHJcbiAgICAgIFwibmFtZVwiOiBcIumYgOmXqOWIhuaekFwiLFxyXG4gICAgICBcInVybFwiOiBcImh0dHA6Ly93d3cuZ29vZ2xlLmNvbVwiLFxyXG4gICAgICBcImNoaXJkXCI6IG51bGxcclxuICAgIH1dOyovXHJcblxyXG4gIG1lbnVKU09OID0gW3tcclxuICAgICduYW1lJzogJ+a3u+WKoOWFg+e0oCcsXHJcbiAgICAndXJsJzogJ2h0dHA6Ly93d3cuZ29vZ2xlLmNvbScsXHJcbiAgICAnY2hpcmQnOiBbXHJcbiAgICAgIHtcclxuICAgICAgICAnbmFtZSc6ICflnZDmoIcnLFxyXG4gICAgICAgICd1cmwnOiAnYWRkX3BvaW50J1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgJ25hbWUnOiAn5Lyg5oSf5ZmoJyxcclxuICAgICAgICAndXJsJzogJ2FkZF9zZW5zb3InXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAnbmFtZSc6ICfnrqHpgZMnLFxyXG4gICAgICAgICd1cmwnOiAnYWRkX3BpcGUnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAnbmFtZSc6ICfoioLngrknLFxyXG4gICAgICAgICd1cmwnOiAnYWRkX25vZGUnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAnbmFtZSc6ICfloLXlpLTlsIHmnb8nLFxyXG4gICAgICAgICd1cmwnOiAnYWRkX3BsdWcnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAnbmFtZSc6ICfpl7jpmIAnLFxyXG4gICAgICAgICd1cmwnOiAnYWRkX3ZhbHZlJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgJ25hbWUnOiAn5raI6Ziy5qCTJyxcclxuICAgICAgICAndXJsJzogJ2FkZF9oeWRyYW50J1xyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfSwge1xyXG4gICAgJ25hbWUnOiAn562b5p+lJyxcclxuICAgICd1cmwnOiAnc2NyZWVuaW5nJyxcclxuICAgICdjaGlyZCc6IG51bGxcclxuICB9LCB7XHJcbiAgICAnbmFtZSc6ICfpooToraYnLFxyXG4gICAgJ3VybCc6ICdodHRwOi8vd3d3Lmdvb2dsZS5jb20nLFxyXG4gICAgJ2NoaXJkJzogW1xyXG4gICAgICB7XHJcbiAgICAgICAgJ25hbWUnOiAn5a6e5pe25rWB6YeP5pi+56S6JyxcclxuICAgICAgICAndXJsJzogJ2h0dHA6Ly93d3cuZ29vZ2xlLmNvbScsXHJcbiAgICAgICAgJ2lzU3dpdGNoJzogdHJ1ZVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgJ25hbWUnOiAn5YiG5Yy655So5rC06YeP5YiG5p6QJyxcclxuICAgICAgICAndXJsJzogJ2h0dHA6Ly93d3cuYmFpZHUuY29tJ1xyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfSwge1xyXG4gICAgJ25hbWUnOiAn54iG566h5YiG5p6QJyxcclxuICAgICd1cmwnOiAnYW5hbHlzaXNfcGlwZScsXHJcbiAgICAnY2hpcmQnOiBudWxsXHJcbiAgfSwge1xyXG4gICAgJ25hbWUnOiAn6ZiA6Zeo5YiG5p6QJyxcclxuICAgICd1cmwnOiAnYW5hbHlzaXNfdmFsdmUnLFxyXG4gICAgJ2NoaXJkJzogbnVsbFxyXG4gIH1dO1xyXG5cclxuICBob3ZlcklkOiBudW1iZXIgPSAwOyAvLyDlvZPliY3lt7LpgInkuK1cclxuICB0aGlzTWVudUlkOiBudW1iZXIgPSAwOyAvLyDlvZPliY3pgInkuK3lrZDoj5zljZVcclxuICBtZW51U2VsKGkpIHtcclxuICAgIHRoaXMuaG92ZXJJZCA9IGk7XHJcbiAgICB0aGlzLnRoaXNNZW51SWQgPSBpO1xyXG4gIH1cclxuXHJcbiAgc2hvd1N1Yk1lbnUoaSkge1xyXG4gICAgdGhpcy5ob3ZlcklkID0gaTtcclxuICAgIHRoaXMudGhpc01lbnVJZCA9IGk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gLyogICBpZiAodGhpcy5jdXN0b21Mb2NhdGlvbiA9PSAnJykge1xyXG4gICAgICB0aGlzLmN1c3RvbUxvY2F0aW9uID0geyd4JzogJzAnLCAneSc6ICcwJ307XHJcbiAgICB9Ki9cclxuICAgIHRoaXMubWVudUpTT04ucmV2ZXJzZSgpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19