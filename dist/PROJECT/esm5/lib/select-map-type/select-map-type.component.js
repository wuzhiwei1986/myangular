/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
var SelectMapTypeComponent = /** @class */ (function () {
    function SelectMapTypeComponent() {
        this.ecpStyle = {};
        this.isShow = false;
        this.showList = null;
    }
    /**
     * @return {?}
     */
    SelectMapTypeComponent.prototype.mouseOut = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var seft = this;
        seft.showList = setTimeout(function () {
            seft.isShow = false;
        }, 200);
    };
    /**
     * @return {?}
     */
    SelectMapTypeComponent.prototype.cleanTime = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var seft = this;
        clearTimeout(seft.showList);
    };
    /**
     * @return {?}
     */
    SelectMapTypeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    SelectMapTypeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ecp-select-map-type',
                    template: "<div class=\"select-map\" [ngStyle]=\"ecpStyle\">\r\n  <div class=\"content\">\r\n    <span class=\"icon\" (mouseover)=\"isShow=true\" (mouseleave)=\"mouseOut()\" [ngClass]=\"{'hover':isShow}\"><i\r\n      class=\"icon dongxiniotwater general_select-map\"></i></span>\r\n    <ul class=\"list\" *ngIf=\"isShow\" (mouseover)=\"cleanTime()\" (mouseleave)=\"isShow=false\"\r\n        [@openClose]=\"isShow ? 'open' : 'closed'\">\r\n      <!--\r\n      <li>\u767E\u5EA6\u5730\u56FE</li>\r\n      <li>\u9AD8\u5FB7\u5730\u56FE</li>\r\n      <li>\u8C37\u6B4C\u5730\u56FE</li>\r\n      -->\r\n      <ng-content></ng-content>\r\n    </ul>\r\n  </div>\r\n</div>\r\n",
                    animations: [
                        trigger('openClose', [
                            transition(':enter', [
                                style({ opacity: 0, width: '20px', color: '#000000' }),
                                animate(40, style({ opacity: 1, width: '120px', color: '#000000' }))
                            ]),
                            transition(':leave', [
                                animate(40, style({ opacity: 0, width: '20px', color: '#ffffff' }))
                            ]),
                        ]),
                    ],
                    styles: [".select-map{position:absolute;width:232px;height:32px}.select-map .content{position:relative}.select-map span.icon{position:absolute;right:0;top:0;width:32px;height:32px;background:rgba(0,0,0,1);opacity:.4;text-align:center;padding-top:4px;border-radius:4px;cursor:pointer}.select-map span.icon.hover,.select-map span.icon:hover{background:rgba(0,0,0,1);opacity:.6}.select-map span.icon i{width:18px;height:18px;font-size:18px;color:#fff}:host>>>.select-map ul.list{position:absolute;right:38px;top:0;width:120px;height:120px;background:rgba(255,255,255,1);box-shadow:0 3px 8px 0 rgba(0,0,0,.3);opacity:.86;padding:0}:host>>>.select-map ul.list li{height:40px;line-height:40px;text-align:left;list-style:none;padding:0 15px;color:#191919;font-size:14px;cursor:pointer;overflow:hidden}:host>>>.select-map ul.list li:hover{background:#d2ddf2}"]
                }] }
    ];
    /** @nocollapse */
    SelectMapTypeComponent.ctorParameters = function () { return []; };
    SelectMapTypeComponent.propDecorators = {
        ecpStyle: [{ type: Input }]
    };
    return SelectMapTypeComponent;
}());
export { SelectMapTypeComponent };
if (false) {
    /** @type {?} */
    SelectMapTypeComponent.prototype.ecpStyle;
    /** @type {?} */
    SelectMapTypeComponent.prototype.isShow;
    /** @type {?} */
    SelectMapTypeComponent.prototype.showList;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LW1hcC10eXBlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2VjcC1hbnQtdWkvIiwic291cmNlcyI6WyJsaWIvc2VsZWN0LW1hcC10eXBlL3NlbGVjdC1tYXAtdHlwZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBQ3ZELE9BQU8sRUFBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQzs7SUFvQ3BFO3dCQWhCNEIsRUFBRTtzQkFDckIsS0FBSzt3QkFDSCxJQUFJO0tBZWQ7Ozs7SUFiRCx5Q0FBUTs7O0lBQVI7O1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ3ZCLEVBQUUsR0FBRyxDQUFDLENBQUM7S0FDWDs7OztJQUVELDBDQUFTOzs7SUFBVDs7UUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUMvQjs7OztJQUtELHlDQUFROzs7SUFBUjtLQUNDOztnQkF0Q0osU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLDBwQkFBK0M7b0JBRS9DLFVBQVUsRUFBRTt3QkFDUixPQUFPLENBQUMsV0FBVyxFQUFFOzRCQUNqQixVQUFVLENBQUMsUUFBUSxFQUFFO2dDQUNqQixLQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBQyxDQUFDO2dDQUNwRCxPQUFPLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFDLENBQUMsQ0FBQzs2QkFDckUsQ0FBQzs0QkFDRixVQUFVLENBQUMsUUFBUSxFQUFFO2dDQUNqQixPQUFPLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFDLENBQUMsQ0FBQzs2QkFDcEUsQ0FBQzt5QkFFTCxDQUFDO3FCQUNMOztpQkFDSjs7Ozs7MkJBRUksS0FBSzs7aUNBckJWOztTQW9CYSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7YW5pbWF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXJ9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2VjcC1zZWxlY3QtbWFwLXR5cGUnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3NlbGVjdC1tYXAtdHlwZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9zZWxlY3QtbWFwLXR5cGUuY29tcG9uZW50LmNzcyddLFxyXG4gICAgYW5pbWF0aW9uczogW1xyXG4gICAgICAgIHRyaWdnZXIoJ29wZW5DbG9zZScsIFtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbignOmVudGVyJywgW1xyXG4gICAgICAgICAgICAgICAgc3R5bGUoe29wYWNpdHk6IDAsIHdpZHRoOiAnMjBweCcsIGNvbG9yOiAnIzAwMDAwMCd9KSxcclxuICAgICAgICAgICAgICAgIGFuaW1hdGUoNDAsIHN0eWxlKHtvcGFjaXR5OiAxLCB3aWR0aDogJzEyMHB4JywgY29sb3I6ICcjMDAwMDAwJ30pKVxyXG4gICAgICAgICAgICBdKSxcclxuICAgICAgICAgICAgdHJhbnNpdGlvbignOmxlYXZlJywgW1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0ZSg0MCwgc3R5bGUoe29wYWNpdHk6IDAsIHdpZHRoOiAnMjBweCcsIGNvbG9yOiAnI2ZmZmZmZid9KSlcclxuICAgICAgICAgICAgXSksXHJcblxyXG4gICAgICAgIF0pLFxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VsZWN0TWFwVHlwZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBASW5wdXQoKSBlY3BTdHlsZTogb2JqZWN0ID0ge307XHJcbiAgICBpc1Nob3cgPSBmYWxzZTtcclxuICAgIHNob3dMaXN0ID0gbnVsbDtcclxuXHJcbiAgICBtb3VzZU91dCgpIHtcclxuICAgICAgICBsZXQgc2VmdCA9IHRoaXM7XHJcbiAgICAgICAgc2VmdC5zaG93TGlzdCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzZWZ0LmlzU2hvdyA9IGZhbHNlO1xyXG4gICAgICAgIH0sIDIwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYW5UaW1lKCkge1xyXG4gICAgICAgIGxldCBzZWZ0ID0gdGhpcztcclxuICAgICAgICBjbGVhclRpbWVvdXQoc2VmdC5zaG93TGlzdCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==