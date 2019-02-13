/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var RippleComponent = /** @class */ (function () {
    function RippleComponent() {
    }
    /**
     * @return {?}
     */
    RippleComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    RippleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ecp-ripple',
                    template: "<div style=\"position: absolute; \" [style.top]=\"customY\"  [style.left]=\"customX\" >\r\n  <div class=\"example\">\r\n    <div class=\"dot-{{customColor}}\"></div>\r\n  </div>\r\n</div>\r\n",
                    styles: [".example{position:relative;width:14px;height:14px}.dot-red:before{content:' ';position:absolute;z-index:2;left:0;top:0;width:14px;height:14px;background-color:#ff4200;border-radius:50%}.dot-red:after{content:' ';position:absolute;z-index:1;width:14px;height:14px;background-color:#ff4200;border-radius:50%;box-shadow:0 0 10px rgba(0,0,0,.3) inset;-webkit-animation-name:ripple;-webkit-animation-duration:1s;-webkit-animation-timing-function:ease;-webkit-animation-delay:0s;-webkit-animation-iteration-count:infinite;-webkit-animation-direction:normal}.dot-green:before{content:' ';position:absolute;z-index:2;left:0;top:0;width:14px;height:14px;background-color:#396;border-radius:50%}.dot-green:after{content:' ';position:absolute;z-index:1;width:14px;height:14px;background-color:#396;border-radius:50%;box-shadow:0 0 10px rgba(0,0,0,.3) inset;-webkit-animation-name:ripple;-webkit-animation-duration:1s;-webkit-animation-timing-function:ease;-webkit-animation-delay:0s;-webkit-animation-iteration-count:infinite;-webkit-animation-direction:normal}@-webkit-keyframes ripple{0%{left:7px;top:7px;opcity:75;width:0;height:0}100%{left:-18px;top:-18px;opacity:0;width:50px;height:50px}}@keyframes ripple{0%{left:7px;top:7px;opcity:75;width:0;height:0}100%{left:-18px;top:-18px;opacity:0;width:50px;height:50px}}"]
                }] }
    ];
    /** @nocollapse */
    RippleComponent.ctorParameters = function () { return []; };
    RippleComponent.propDecorators = {
        customColor: [{ type: Input }],
        customX: [{ type: Input }],
        customY: [{ type: Input }]
    };
    return RippleComponent;
}());
export { RippleComponent };
if (false) {
    /** @type {?} */
    RippleComponent.prototype.customColor;
    /** @type {?} */
    RippleComponent.prototype.customX;
    /** @type {?} */
    RippleComponent.prototype.customY;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmlwcGxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2VjcC1hbnQtdWkvIiwic291cmNlcyI6WyJsaWIvbWFwL3JpcHBsZS9yaXBwbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQzs7SUFZdEQ7S0FBaUI7Ozs7SUFFakIsa0NBQVE7OztJQUFSO0tBQ0M7O2dCQWJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsMk1BQXNDOztpQkFFdkM7Ozs7OzhCQUVFLEtBQUs7MEJBQ0wsS0FBSzswQkFDTCxLQUFLOzswQkFWUjs7U0FPYSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgLElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZWNwLXJpcHBsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3JpcHBsZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcmlwcGxlLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmlwcGxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBjdXN0b21Db2xvcjtcclxuICBASW5wdXQoKSBjdXN0b21YO1xyXG4gIEBJbnB1dCgpIGN1c3RvbVk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbn1cclxuIl19