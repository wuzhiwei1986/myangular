/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class RippleComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
RippleComponent.decorators = [
    { type: Component, args: [{
                selector: 'ecp-ripple',
                template: "<div style=\"position: absolute; \" [style.top]=\"customY\"  [style.left]=\"customX\" >\r\n  <div class=\"example\">\r\n    <div class=\"dot-{{customColor}}\"></div>\r\n  </div>\r\n</div>\r\n",
                styles: [".example{position:relative;width:14px;height:14px}.dot-red:before{content:' ';position:absolute;z-index:2;left:0;top:0;width:14px;height:14px;background-color:#ff4200;border-radius:50%}.dot-red:after{content:' ';position:absolute;z-index:1;width:14px;height:14px;background-color:#ff4200;border-radius:50%;box-shadow:0 0 10px rgba(0,0,0,.3) inset;-webkit-animation-name:ripple;-webkit-animation-duration:1s;-webkit-animation-timing-function:ease;-webkit-animation-delay:0s;-webkit-animation-iteration-count:infinite;-webkit-animation-direction:normal}.dot-green:before{content:' ';position:absolute;z-index:2;left:0;top:0;width:14px;height:14px;background-color:#396;border-radius:50%}.dot-green:after{content:' ';position:absolute;z-index:1;width:14px;height:14px;background-color:#396;border-radius:50%;box-shadow:0 0 10px rgba(0,0,0,.3) inset;-webkit-animation-name:ripple;-webkit-animation-duration:1s;-webkit-animation-timing-function:ease;-webkit-animation-delay:0s;-webkit-animation-iteration-count:infinite;-webkit-animation-direction:normal}@-webkit-keyframes ripple{0%{left:7px;top:7px;opcity:75;width:0;height:0}100%{left:-18px;top:-18px;opacity:0;width:50px;height:50px}}@keyframes ripple{0%{left:7px;top:7px;opcity:75;width:0;height:0}100%{left:-18px;top:-18px;opacity:0;width:50px;height:50px}}"]
            }] }
];
/** @nocollapse */
RippleComponent.ctorParameters = () => [];
RippleComponent.propDecorators = {
    customColor: [{ type: Input }],
    customX: [{ type: Input }],
    customY: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    RippleComponent.prototype.customColor;
    /** @type {?} */
    RippleComponent.prototype.customX;
    /** @type {?} */
    RippleComponent.prototype.customY;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmlwcGxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2VjcC1hbnQtdWkvIiwic291cmNlcyI6WyJsaWIvbWFwL3JpcHBsZS9yaXBwbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQztBQU94RCxNQUFNO0lBS0osaUJBQWlCOzs7O0lBRWpCLFFBQVE7S0FDUDs7O1lBYkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QiwyTUFBc0M7O2FBRXZDOzs7OzswQkFFRSxLQUFLO3NCQUNMLEtBQUs7c0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0ICxJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2VjcC1yaXBwbGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9yaXBwbGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3JpcHBsZS5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFJpcHBsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgY3VzdG9tQ29sb3I7XHJcbiAgQElucHV0KCkgY3VzdG9tWDtcclxuICBASW5wdXQoKSBjdXN0b21ZO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==