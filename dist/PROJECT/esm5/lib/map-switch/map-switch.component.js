/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var MapSwitchComponent = /** @class */ (function () {
    function MapSwitchComponent() {
        this.selectId = 0;
    }
    /*
      switchArray = [{
        "name": "操作",
        "icon": "icon-operation"
      }, {
        "name": "展示",
        "icon": "icon-demonstration"
      }, {
        "name": "展示二",
        "icon": "icon-demonstration"
      }, {
        "name": "展示三",
        "icon": "icon-demonstration"
      }];
    */
    /**
     * @param {?} i
     * @return {?}
     */
    MapSwitchComponent.prototype.select = /**
     * @param {?} i
     * @return {?}
     */
    function (i) {
        this.selectId = i;
        //console.log("当前选中" + i + "#######" + this.switchArray[i].name);
    };
    /**
     * @return {?}
     */
    MapSwitchComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    MapSwitchComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ecp-switch',
                    template: "<div class=\"map-switch\"  [ngStyle]=\"customPosition\">\r\n  <a [ngClass]=\"{'hover':selectId==i}\" *ngFor=\"let item of switchArray; let i = index;\" (click)=\"select(i)\"><i class=\"icon dongxiniotwater {{item.icon}}\"></i>{{item.name}}</a>\r\n</div>\r\n",
                    styles: [".map-switch{position:absolute;width:auto;height:36px;line-height:36px;background:#fff;border-radius:4px;box-shadow:0 3px 8px 0 rgba(0,0,0,.3);overflow:hidden}.map-switch a{width:80px;float:left;text-align:center;color:rgba(25,25,25,1)}.map-switch a i{vertical-align:middle;margin-right:6px}.map-switch a.hover,.map-switch a:hover{background:#1e5bd6;color:#fff}"]
                }] }
    ];
    /** @nocollapse */
    MapSwitchComponent.ctorParameters = function () { return []; };
    MapSwitchComponent.propDecorators = {
        customPosition: [{ type: Input }],
        switchArray: [{ type: Input }]
    };
    return MapSwitchComponent;
}());
export { MapSwitchComponent };
if (false) {
    /** @type {?} */
    MapSwitchComponent.prototype.customPosition;
    /** @type {?} */
    MapSwitchComponent.prototype.switchArray;
    /** @type {?} */
    MapSwitchComponent.prototype.selectId;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLXN3aXRjaC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9lY3AtYW50LXVpLyIsInNvdXJjZXMiOlsibGliL21hcC1zd2l0Y2gvbWFwLXN3aXRjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFTLE1BQU0sZUFBZSxDQUFDOztJQWlDckQ7d0JBdEJXLENBQUM7S0F1Qlg7SUF0Qkg7Ozs7Ozs7Ozs7Ozs7O01BY0U7Ozs7O0lBRUEsbUNBQU07Ozs7SUFBTixVQUFPLENBQUM7UUFDTixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQzs7S0FFbkI7Ozs7SUFLRCxxQ0FBUTs7O0lBQVI7S0FDQzs7Z0JBbkNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsNlFBQTBDOztpQkFFM0M7Ozs7O2lDQUdFLEtBQUs7OEJBQ0wsS0FBSzs7NkJBVlI7O1NBT2Esa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdlY3Atc3dpdGNoJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbWFwLXN3aXRjaC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbWFwLXN3aXRjaC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIE1hcFN3aXRjaENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIGN1c3RvbVBvc2l0aW9uOm9iamVjdDtcclxuICBASW5wdXQoKSBzd2l0Y2hBcnJheTpBcnJheTxhbnk+O1xyXG4gIHNlbGVjdElkID0gMDsvL+W9k+WJjemAieS4reeahOmAiemhuS5cclxuLypcclxuICBzd2l0Y2hBcnJheSA9IFt7XHJcbiAgICBcIm5hbWVcIjogXCLmk43kvZxcIixcclxuICAgIFwiaWNvblwiOiBcImljb24tb3BlcmF0aW9uXCJcclxuICB9LCB7XHJcbiAgICBcIm5hbWVcIjogXCLlsZXnpLpcIixcclxuICAgIFwiaWNvblwiOiBcImljb24tZGVtb25zdHJhdGlvblwiXHJcbiAgfSwge1xyXG4gICAgXCJuYW1lXCI6IFwi5bGV56S65LqMXCIsXHJcbiAgICBcImljb25cIjogXCJpY29uLWRlbW9uc3RyYXRpb25cIlxyXG4gIH0sIHtcclxuICAgIFwibmFtZVwiOiBcIuWxleekuuS4iVwiLFxyXG4gICAgXCJpY29uXCI6IFwiaWNvbi1kZW1vbnN0cmF0aW9uXCJcclxuICB9XTtcclxuKi9cclxuXHJcbiAgc2VsZWN0KGkpIHtcclxuICAgIHRoaXMuc2VsZWN0SWQgPSBpO1xyXG4gICAgLy9jb25zb2xlLmxvZyhcIuW9k+WJjemAieS4rVwiICsgaSArIFwiIyMjIyMjI1wiICsgdGhpcy5zd2l0Y2hBcnJheVtpXS5uYW1lKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=