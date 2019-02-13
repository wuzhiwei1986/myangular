/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
export class SelectMapTypeComponent {
    constructor() {
        this.ecpStyle = {};
        this.isShow = false;
        this.showList = null;
    }
    /**
     * @return {?}
     */
    mouseOut() {
        /** @type {?} */
        let seft = this;
        seft.showList = setTimeout(function () {
            seft.isShow = false;
        }, 200);
    }
    /**
     * @return {?}
     */
    cleanTime() {
        /** @type {?} */
        let seft = this;
        clearTimeout(seft.showList);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
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
SelectMapTypeComponent.ctorParameters = () => [];
SelectMapTypeComponent.propDecorators = {
    ecpStyle: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    SelectMapTypeComponent.prototype.ecpStyle;
    /** @type {?} */
    SelectMapTypeComponent.prototype.isShow;
    /** @type {?} */
    SelectMapTypeComponent.prototype.showList;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LW1hcC10eXBlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2VjcC1hbnQtdWkvIiwic291cmNlcyI6WyJsaWIvc2VsZWN0LW1hcC10eXBlL3NlbGVjdC1tYXAtdHlwZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBQ3ZELE9BQU8sRUFBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQW1CeEUsTUFBTTtJQWlCRjt3QkFoQjRCLEVBQUU7c0JBQ3JCLEtBQUs7d0JBQ0gsSUFBSTtLQWVkOzs7O0lBYkQsUUFBUTs7UUFDSixJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7WUFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDdkIsRUFBRSxHQUFHLENBQUMsQ0FBQztLQUNYOzs7O0lBRUQsU0FBUzs7UUFDTCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUMvQjs7OztJQUtELFFBQVE7S0FDUDs7O1lBdENKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQiwwcEJBQStDO2dCQUUvQyxVQUFVLEVBQUU7b0JBQ1IsT0FBTyxDQUFDLFdBQVcsRUFBRTt3QkFDakIsVUFBVSxDQUFDLFFBQVEsRUFBRTs0QkFDakIsS0FBSyxDQUFDLEVBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUMsQ0FBQzs0QkFDcEQsT0FBTyxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBQyxDQUFDLENBQUM7eUJBQ3JFLENBQUM7d0JBQ0YsVUFBVSxDQUFDLFFBQVEsRUFBRTs0QkFDakIsT0FBTyxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBQyxDQUFDLENBQUM7eUJBQ3BFLENBQUM7cUJBRUwsQ0FBQztpQkFDTDs7YUFDSjs7Ozs7dUJBRUksS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHthbmltYXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlcn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZWNwLXNlbGVjdC1tYXAtdHlwZScsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vc2VsZWN0LW1hcC10eXBlLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL3NlbGVjdC1tYXAtdHlwZS5jb21wb25lbnQuY3NzJ10sXHJcbiAgICBhbmltYXRpb25zOiBbXHJcbiAgICAgICAgdHJpZ2dlcignb3BlbkNsb3NlJywgW1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCc6ZW50ZXInLCBbXHJcbiAgICAgICAgICAgICAgICBzdHlsZSh7b3BhY2l0eTogMCwgd2lkdGg6ICcyMHB4JywgY29sb3I6ICcjMDAwMDAwJ30pLFxyXG4gICAgICAgICAgICAgICAgYW5pbWF0ZSg0MCwgc3R5bGUoe29wYWNpdHk6IDEsIHdpZHRoOiAnMTIwcHgnLCBjb2xvcjogJyMwMDAwMDAnfSkpXHJcbiAgICAgICAgICAgIF0pLFxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCc6bGVhdmUnLCBbXHJcbiAgICAgICAgICAgICAgICBhbmltYXRlKDQwLCBzdHlsZSh7b3BhY2l0eTogMCwgd2lkdGg6ICcyMHB4JywgY29sb3I6ICcjZmZmZmZmJ30pKVxyXG4gICAgICAgICAgICBdKSxcclxuXHJcbiAgICAgICAgXSksXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZWxlY3RNYXBUeXBlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIEBJbnB1dCgpIGVjcFN0eWxlOiBvYmplY3QgPSB7fTtcclxuICAgIGlzU2hvdyA9IGZhbHNlO1xyXG4gICAgc2hvd0xpc3QgPSBudWxsO1xyXG5cclxuICAgIG1vdXNlT3V0KCkge1xyXG4gICAgICAgIGxldCBzZWZ0ID0gdGhpcztcclxuICAgICAgICBzZWZ0LnNob3dMaXN0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHNlZnQuaXNTaG93ID0gZmFsc2U7XHJcbiAgICAgICAgfSwgMjAwKTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhblRpbWUoKSB7XHJcbiAgICAgICAgbGV0IHNlZnQgPSB0aGlzO1xyXG4gICAgICAgIGNsZWFyVGltZW91dChzZWZ0LnNob3dMaXN0KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgIH1cclxuXHJcbn1cclxuIl19