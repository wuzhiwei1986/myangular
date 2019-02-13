/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
export class ToolBarComponent {
    constructor() {
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
    click(url) {
        this.selectId.emit(url);
    }
    /**
     * @param {?} i
     * @return {?}
     */
    menuSel(i) {
        this.hoverId = i;
        this.thisMenuId = i;
    }
    /**
     * @param {?} i
     * @return {?}
     */
    showSubMenu(i) {
        this.hoverId = i;
        this.thisMenuId = i;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /*   if (this.customLocation == '') {
              this.customLocation = {'x': '0', 'y': '0'};
            }*/
        this.menuJSON.reverse();
    }
}
ToolBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'ecp-tool-bar',
                template: "<div class=\"map-top-toolbar\" [ngStyle]=\"ecpStyle\" >\r\n  <span *ngFor=\"let item of menuJSON;let i = index;\">\r\n  <a (click)=\"menuSel(i);click(item.url)\" (mouseover)=\"menuSel(i)\"\r\n     [ngClass]=\"{'hover':hoverId==i}\">{{item.name}} <i class=\"icon dongxiniotwater general_unfold\" *ngIf=\"item.chird!=null\"></i></a>\r\n  <ul class=\"sub-menu\" [ngClass]=\"{'show':thisMenuId==i}\" (mouseleave)=\"showSubMenu(50)\">\r\n     <ng-container *ngFor=\"let childmenu of item.chird;let childId = index; \">\r\n            <li [ngClass]=\"{'switch':childmenu.isSwitch==true}\" (click)=\"click(childmenu.url)\">{{childmenu.name}} <span *ngIf=\"childmenu.isSwitch==true\"><!--<nz-switch nzSize=\"small\"></nz-switch>--></span></li>\r\n     </ng-container>\r\n  </ul>\r\n  </span>\r\n</div>\r\n",
                styles: [".map-top-toolbar{position:absolute;font-weight:400;color:rgba(25,25,25,1);font-size:16px;height:36px;line-height:36px;text-align:center;background:rgba(255,255,255,1);border-radius:4px;box-shadow:0 0 4px rgba(0,0,0,.3)}.map-top-toolbar span{position:relative;width:100px;float:right;text-align:center;cursor:pointer;font-size:14px;font-family:MicrosoftYaHei;font-weight:400;color:rgba(255,255,255,1)}.map-top-toolbar span a{height:36px;display:block;color:#191919;border-right:1px solid #dadada}.map-top-toolbar span a.hover,.map-top-toolbar span a:hover{background:#1e5bd6;color:#fff}.map-top-toolbar span:first-child a{border-radius:0 4px 4px 0;border-right:0 solid #dadada!important}.map-top-toolbar span:last-child a{border-radius:4px 0 0 4px}.map-top-toolbar span a i{vertical-align:middle;font-size:6px;margin-left:2px;color:#999}.map-top-toolbar .sub-menu{position:absolute;right:0;top:-1000px;min-width:100px;padding:0;background:rgba(255,255,255,1);box-shadow:0 3px 8px 0 rgba(0,0,0,.3);height:auto}.map-top-toolbar .show{top:40px}.map-top-toolbar .sub-menu li{width:100%;text-align:left;height:42px;line-height:42px;background:#fff;padding:0 0 0 15px;color:rgba(25,25,25,1);list-style:none}.map-top-toolbar .sub-menu li.switch{width:170px}.map-top-toolbar .sub-menu li.switch>span{display:inline-block;width:40px;float:right;margin-right:7px}.map-top-toolbar .sub-menu li:hover{background:#d2ddf2;color:#191919}"]
            }] }
];
/** @nocollapse */
ToolBarComponent.ctorParameters = () => [];
ToolBarComponent.propDecorators = {
    customX: [{ type: Input }],
    customY: [{ type: Input }],
    ecpStyle: [{ type: Input }],
    selectId: [{ type: Output }]
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbC1iYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZWNwLWFudC11aS8iLCJzb3VyY2VzIjpbImxpYi90b29sLWJhci90b29sLWJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFPN0UsTUFBTTtJQXNKSjt3QkFsSnlCLEVBQUU7O3dCQUVnQixJQUFJLFlBQVksRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0JBdUVsRCxDQUFDO2dCQUNWLE1BQU0sRUFBRSxNQUFNO2dCQUNkLEtBQUssRUFBRSx1QkFBdUI7Z0JBQzlCLE9BQU8sRUFBRTtvQkFDUDt3QkFDRSxNQUFNLEVBQUUsSUFBSTt3QkFDWixLQUFLLEVBQUUsV0FBVztxQkFDbkI7b0JBQ0Q7d0JBQ0UsTUFBTSxFQUFFLEtBQUs7d0JBQ2IsS0FBSyxFQUFFLFlBQVk7cUJBQ3BCO29CQUNEO3dCQUNFLE1BQU0sRUFBRSxJQUFJO3dCQUNaLEtBQUssRUFBRSxVQUFVO3FCQUNsQjtvQkFDRDt3QkFDRSxNQUFNLEVBQUUsSUFBSTt3QkFDWixLQUFLLEVBQUUsVUFBVTtxQkFDbEI7b0JBQ0Q7d0JBQ0UsTUFBTSxFQUFFLE1BQU07d0JBQ2QsS0FBSyxFQUFFLFVBQVU7cUJBQ2xCO29CQUNEO3dCQUNFLE1BQU0sRUFBRSxJQUFJO3dCQUNaLEtBQUssRUFBRSxXQUFXO3FCQUNuQjtvQkFDRDt3QkFDRSxNQUFNLEVBQUUsS0FBSzt3QkFDYixLQUFLLEVBQUUsYUFBYTtxQkFDckI7aUJBQ0Y7YUFDRixFQUFFO2dCQUNELE1BQU0sRUFBRSxJQUFJO2dCQUNaLEtBQUssRUFBRSxXQUFXO2dCQUNsQixPQUFPLEVBQUUsSUFBSTthQUNkLEVBQUU7Z0JBQ0QsTUFBTSxFQUFFLElBQUk7Z0JBQ1osS0FBSyxFQUFFLHVCQUF1QjtnQkFDOUIsT0FBTyxFQUFFO29CQUNQO3dCQUNFLE1BQU0sRUFBRSxRQUFRO3dCQUNoQixLQUFLLEVBQUUsdUJBQXVCO3dCQUM5QixVQUFVLEVBQUUsSUFBSTtxQkFDakI7b0JBQ0Q7d0JBQ0UsTUFBTSxFQUFFLFNBQVM7d0JBQ2pCLEtBQUssRUFBRSxzQkFBc0I7cUJBQzlCO2lCQUNGO2FBQ0YsRUFBRTtnQkFDRCxNQUFNLEVBQUUsTUFBTTtnQkFDZCxLQUFLLEVBQUUsZUFBZTtnQkFDdEIsT0FBTyxFQUFFLElBQUk7YUFDZCxFQUFFO2dCQUNELE1BQU0sRUFBRSxNQUFNO2dCQUNkLEtBQUssRUFBRSxnQkFBZ0I7Z0JBQ3ZCLE9BQU8sRUFBRSxJQUFJO2FBQ2QsQ0FBQzt1QkFFZ0IsQ0FBQzswQkFDRSxDQUFDO0tBWXJCOzs7OztJQS9JRCxLQUFLLENBQUMsR0FBRztRQUNQLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ3pCOzs7OztJQWtJRCxPQUFPLENBQUMsQ0FBQztRQUNQLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO0tBQ3JCOzs7OztJQUVELFdBQVcsQ0FBQyxDQUFDO1FBQ1gsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7S0FDckI7Ozs7SUFLRCxRQUFROzs7O1FBSU4sSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztLQUN6Qjs7O1lBbktGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIseXlCQUF3Qzs7YUFFekM7Ozs7O3NCQUdFLEtBQUs7c0JBQ0wsS0FBSzt1QkFDTCxLQUFLO3VCQUVMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdlY3AtdG9vbC1iYXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90b29sLWJhci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vdG9vbC1iYXIuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUb29sQmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgY3VzdG9tWDtcclxuICBASW5wdXQoKSBjdXN0b21ZO1xyXG4gIEBJbnB1dCgpIGVjcFN0eWxlOm9iamVjdD17fVxyXG4gIC8vQElucHV0KCkgY3VzdG9tTG9jYXRpb246IGFueT17J3gnOiAnMTAwcHgnLCAneSc6ICc1MHB4J307XHJcbiAgQE91dHB1dCgpIHNlbGVjdElkOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgY2xpY2sodXJsKSB7XHJcbiAgICB0aGlzLnNlbGVjdElkLmVtaXQodXJsKTtcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgICBtZW51SlNPTiA9IFt7XHJcbiAgICAgIFwibmFtZVwiOiBcIua3u+WKoOWFg+e0oFwiLFxyXG4gICAgICBcInVybFwiOiBcImh0dHA6Ly93d3cuZ29vZ2xlLmNvbVwiLFxyXG4gICAgICBcImNoaXJkXCI6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcIm5hbWVcIjogXCLlnZDmoIdcIixcclxuICAgICAgICAgIFwidXJsXCI6IFwiaHR0cDovL3d3dy5nb29nbGUuY29tXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwibmFtZVwiOiBcIuS8oOaEn+WZqFwiLFxyXG4gICAgICAgICAgXCJ1cmxcIjogXCJodHRwOi8vd3d3LmJhaWR1LmNvbVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcIm5hbWVcIjogXCLnrqHpgZNcIixcclxuICAgICAgICAgIFwidXJsXCI6IFwiaHR0cDovL3d3dy5Tb1NvLmNvbVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcIm5hbWVcIjogXCLoioLngrlcIixcclxuICAgICAgICAgIFwidXJsXCI6IFwiaHR0cDovL3d3dy5Tb1NvLmNvbVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcIm5hbWVcIjogXCLloLXlpLTlsIHmnb9cIixcclxuICAgICAgICAgIFwidXJsXCI6IFwiaHR0cDovL3d3dy5Tb1NvLmNvbVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcIm5hbWVcIjogXCLpl7jpmIBcIixcclxuICAgICAgICAgIFwidXJsXCI6IFwiaHR0cDovL3d3dy5Tb1NvLmNvbVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcIm5hbWVcIjogXCLmtojpmLLmoJNcIixcclxuICAgICAgICAgIFwidXJsXCI6IFwiaHR0cDovL3d3dy5Tb1NvLmNvbVwiXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9LCB7XHJcbiAgICAgIFwibmFtZVwiOiBcIuetm+afpVwiLFxyXG4gICAgICBcInVybFwiOiBcImh0dHA6Ly93d3cuZ29vZ2xlLmNvbVwiLFxyXG4gICAgICBcImNoaXJkXCI6IG51bGxcclxuICAgIH0sIHtcclxuICAgICAgXCJuYW1lXCI6IFwi6aKE6K2mXCIsXHJcbiAgICAgIFwidXJsXCI6IFwiaHR0cDovL3d3dy5nb29nbGUuY29tXCIsXHJcbiAgICAgIFwiY2hpcmRcIjogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwibmFtZVwiOiBcIuWdkOagh1wiLFxyXG4gICAgICAgICAgXCJ1cmxcIjogXCJodHRwOi8vd3d3Lmdvb2dsZS5jb21cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgXCJuYW1lXCI6IFwi5Lyg5oSf5ZmoXCIsXHJcbiAgICAgICAgICBcInVybFwiOiBcImh0dHA6Ly93d3cuYmFpZHUuY29tXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwibmFtZVwiOiBcIueuoemBk1wiLFxyXG4gICAgICAgICAgXCJ1cmxcIjogXCJodHRwOi8vd3d3LlNvU28uY29tXCJcclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH0sIHtcclxuICAgICAgXCJuYW1lXCI6IFwi54iG566h5YiG5p6QXCIsXHJcbiAgICAgIFwidXJsXCI6IFwiaHR0cDovL3d3dy5nb29nbGUuY29tXCIsXHJcbiAgICAgIFwiY2hpcmRcIjogbnVsbFxyXG4gICAgfSwge1xyXG4gICAgICBcIm5hbWVcIjogXCLpmIDpl6jliIbmnpBcIixcclxuICAgICAgXCJ1cmxcIjogXCJodHRwOi8vd3d3Lmdvb2dsZS5jb21cIixcclxuICAgICAgXCJjaGlyZFwiOiBudWxsXHJcbiAgICB9XTsqL1xyXG5cclxuICBtZW51SlNPTiA9IFt7XHJcbiAgICAnbmFtZSc6ICfmt7vliqDlhYPntKAnLFxyXG4gICAgJ3VybCc6ICdodHRwOi8vd3d3Lmdvb2dsZS5jb20nLFxyXG4gICAgJ2NoaXJkJzogW1xyXG4gICAgICB7XHJcbiAgICAgICAgJ25hbWUnOiAn5Z2Q5qCHJyxcclxuICAgICAgICAndXJsJzogJ2FkZF9wb2ludCdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgICduYW1lJzogJ+S8oOaEn+WZqCcsXHJcbiAgICAgICAgJ3VybCc6ICdhZGRfc2Vuc29yJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgJ25hbWUnOiAn566h6YGTJyxcclxuICAgICAgICAndXJsJzogJ2FkZF9waXBlJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgJ25hbWUnOiAn6IqC54K5JyxcclxuICAgICAgICAndXJsJzogJ2FkZF9ub2RlJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgJ25hbWUnOiAn5aC15aS05bCB5p2/JyxcclxuICAgICAgICAndXJsJzogJ2FkZF9wbHVnJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgJ25hbWUnOiAn6Ze46ZiAJyxcclxuICAgICAgICAndXJsJzogJ2FkZF92YWx2ZSdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgICduYW1lJzogJ+a2iOmYsuagkycsXHJcbiAgICAgICAgJ3VybCc6ICdhZGRfaHlkcmFudCdcclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH0sIHtcclxuICAgICduYW1lJzogJ+etm+afpScsXHJcbiAgICAndXJsJzogJ3NjcmVlbmluZycsXHJcbiAgICAnY2hpcmQnOiBudWxsXHJcbiAgfSwge1xyXG4gICAgJ25hbWUnOiAn6aKE6K2mJyxcclxuICAgICd1cmwnOiAnaHR0cDovL3d3dy5nb29nbGUuY29tJyxcclxuICAgICdjaGlyZCc6IFtcclxuICAgICAge1xyXG4gICAgICAgICduYW1lJzogJ+WunuaXtua1gemHj+aYvuekuicsXHJcbiAgICAgICAgJ3VybCc6ICdodHRwOi8vd3d3Lmdvb2dsZS5jb20nLFxyXG4gICAgICAgICdpc1N3aXRjaCc6IHRydWVcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgICduYW1lJzogJ+WIhuWMuueUqOawtOmHj+WIhuaekCcsXHJcbiAgICAgICAgJ3VybCc6ICdodHRwOi8vd3d3LmJhaWR1LmNvbSdcclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH0sIHtcclxuICAgICduYW1lJzogJ+eIhueuoeWIhuaekCcsXHJcbiAgICAndXJsJzogJ2FuYWx5c2lzX3BpcGUnLFxyXG4gICAgJ2NoaXJkJzogbnVsbFxyXG4gIH0sIHtcclxuICAgICduYW1lJzogJ+mYgOmXqOWIhuaekCcsXHJcbiAgICAndXJsJzogJ2FuYWx5c2lzX3ZhbHZlJyxcclxuICAgICdjaGlyZCc6IG51bGxcclxuICB9XTtcclxuXHJcbiAgaG92ZXJJZDogbnVtYmVyID0gMDsgLy8g5b2T5YmN5bey6YCJ5LitXHJcbiAgdGhpc01lbnVJZDogbnVtYmVyID0gMDsgLy8g5b2T5YmN6YCJ5Lit5a2Q6I+c5Y2VXHJcbiAgbWVudVNlbChpKSB7XHJcbiAgICB0aGlzLmhvdmVySWQgPSBpO1xyXG4gICAgdGhpcy50aGlzTWVudUlkID0gaTtcclxuICB9XHJcblxyXG4gIHNob3dTdWJNZW51KGkpIHtcclxuICAgIHRoaXMuaG92ZXJJZCA9IGk7XHJcbiAgICB0aGlzLnRoaXNNZW51SWQgPSBpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuIC8qICAgaWYgKHRoaXMuY3VzdG9tTG9jYXRpb24gPT0gJycpIHtcclxuICAgICAgdGhpcy5jdXN0b21Mb2NhdGlvbiA9IHsneCc6ICcwJywgJ3knOiAnMCd9O1xyXG4gICAgfSovXHJcbiAgICB0aGlzLm1lbnVKU09OLnJldmVyc2UoKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==