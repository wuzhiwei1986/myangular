/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
var ToolBar3Component = /** @class */ (function () {
    function ToolBar3Component() {
        this.hoverId = 0;
        this.thisMenuId = 0;
    }
    /**
     * @param {?} i
     * @return {?}
     */
    ToolBar3Component.prototype.menuSel = /**
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
    ToolBar3Component.prototype.showSubMenu = /**
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
    ToolBar3Component.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    ToolBar3Component.decorators = [
        { type: Component, args: [{
                    selector: 'ecp-tool-bar3',
                    template: "<div class=\"map-top-toolbar\">\r\n  <span> <a (mouseover)=\"menuSel(1)\" (click)=\"menuSel(1)\" [ngClass]=\"{'hover':hoverId==1}\">\u9600\u95E8\u5206\u6790</a> </span>\r\n  <span> <a (mouseover)=\"menuSel(2)\" (click)=\"menuSel(2)\" [ngClass]=\"{'hover':hoverId==2}\">\u7206\u7BA1\u5206\u6790</a> </span>\r\n  <span> <a (mouseover)=\"menuSel(3)\" (click)=\"menuSel(3)\" [ngClass]=\"{'hover':hoverId==3}\">\u9884\u8B66<i class=\"icon-unfold\"></i></a>\r\n    <ul class=\"sub-menu\" [ngClass]=\"{'show':thisMenuId==3}\" (mouseleave)=\"showSubMenu(50)\" style=\"width: 160px;\">\r\n      <li>\u5B9E\u65F6\u6D41\u91CF\u663E\u793A<!--<nz-switch style=\"float: right; margin-right: 7px;\"></nz-switch>--></li>\r\n      <li>\u5206\u533A\u7528\u6C34\u91CF\u5206\u6790</li>\r\n    </ul>\r\n  </span>\r\n  <span>\r\n    <a (mouseover)=\"menuSel(4)\" (click)=\"menuSel(4)\" [ngClass]=\"{'hover':hoverId==4}\">\u7B5B\u67E5</a>\r\n  </span>\r\n  <span>\r\n    <a (mouseover)=\"menuSel(5)\" (click)=\"menuSel(5)\" [ngClass]=\"{'hover':hoverId==5}\">\u6DFB\u52A0\u5143\u7D20<i\r\n      class=\"icon-unfold\"></i></a>\r\n    <ul class=\"sub-menu\" [ngClass]=\"{'show':thisMenuId==5}\" (mouseleave)=\"showSubMenu(50)\">\r\n      <li>\u5750\u6807</li>\r\n      <li>\u4F20\u611F\u5668</li>\r\n      <li>\u7BA1\u9053</li>\r\n      <li>\u8282\u70B9</li>\r\n      <li>\u5835\u5934\u5C01\u677F</li>\r\n      <li>\u95F8\u9600</li>\r\n      <li>\u6D88\u9632\u6813</li>\r\n    </ul>\r\n  </span>\r\n</div>\r\n",
                    styles: [".map-top-toolbar{position:absolute;top:20px;left:20px;font-weight:400;color:rgba(25,25,25,1);font-size:16px;height:36px;line-height:36px;text-align:center;background:rgba(255,255,255,1);border-radius:8px;box-shadow:0 0 8px rgba(0,0,0,.3)}.map-top-toolbar span{position:relative;width:100px;float:right;text-align:center;cursor:pointer;font-size:14px;font-family:MicrosoftYaHei;font-weight:400;color:rgba(255,255,255,1)}.map-top-toolbar span a{height:36px;display:block;color:#191919;border-right:1px solid #dadada}.map-top-toolbar span a.hover,.map-top-toolbar span a:hover{background:#1e5bd6;color:#fff}.map-top-toolbar span:first-child a{border-radius:0 8px 8px 0;border-right:0 solid #dadada!important}.map-top-toolbar span:last-child a{border-radius:8px 0 0 8px}.map-top-toolbar span a i{vertical-align:middle;font-size:6px;margin-left:4px;color:#999}.map-top-toolbar .sub-menu{position:absolute;right:0;top:-1000px;min-width:100px;padding:0;background:rgba(255,255,255,1);box-shadow:0 3px 8px 0 rgba(0,0,0,.3);height:auto}.map-top-toolbar .show{top:40px!important}.map-top-toolbar .sub-menu li{width:100%;text-align:left;height:42px;line-height:42px;background:#fff;padding:0 0 0 15px;color:rgba(25,25,25,1);list-style:none}.map-top-toolbar .sub-menu li:hover{background:#d2ddf2;color:#191919}"]
                }] }
    ];
    /** @nocollapse */
    ToolBar3Component.ctorParameters = function () { return []; };
    return ToolBar3Component;
}());
export { ToolBar3Component };
if (false) {
    /** @type {?} */
    ToolBar3Component.prototype.hoverId;
    /** @type {?} */
    ToolBar3Component.prototype.thisMenuId;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbC1iYXIzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2VjcC1hbnQtdWkvIiwic291cmNlcyI6WyJsaWIvdG9vbC1iYXIzL3Rvb2wtYmFyMy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQVMsTUFBTSxlQUFlLENBQUM7O0lBb0I5Qzt1QkFYa0IsQ0FBQzswQkFDRSxDQUFDO0tBV3JCOzs7OztJQVZELG1DQUFPOzs7O0lBQVAsVUFBUSxDQUFDO1FBQ1AsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7S0FDckI7Ozs7O0lBQ0QsdUNBQVc7Ozs7SUFBWCxVQUFZLENBQUM7UUFDWCxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztLQUNyQjs7OztJQUtELG9DQUFROzs7SUFBUjtLQUNDOztnQkF0QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6Qix3OUNBQXlDOztpQkFFMUM7Ozs7NEJBTkQ7O1NBT2EsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2VjcC10b29sLWJhcjMnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90b29sLWJhcjMuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3Rvb2wtYmFyMy5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFRvb2xCYXIzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgaG92ZXJJZDogbnVtYmVyID0gMDsgLy8g5b2T5YmN5bey6YCJ5LitXHJcbiAgdGhpc01lbnVJZDogbnVtYmVyID0gMDsgLy8g5b2T5YmN6YCJ5Lit5a2Q6I+c5Y2VXHJcbiAgbWVudVNlbChpKSB7XHJcbiAgICB0aGlzLmhvdmVySWQgPSBpO1xyXG4gICAgdGhpcy50aGlzTWVudUlkID0gaTtcclxuICB9XHJcbiAgc2hvd1N1Yk1lbnUoaSkge1xyXG4gICAgdGhpcy5ob3ZlcklkID0gaTtcclxuICAgIHRoaXMudGhpc01lbnVJZCA9IGk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbn1cclxuIl19