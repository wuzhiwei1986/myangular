/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class MapDotPopupComponent {
    constructor() {
        this.isCloseBtn = true;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
MapDotPopupComponent.decorators = [
    { type: Component, args: [{
                selector: 'ecp-map-dot-popup',
                template: "<div class=\"ol-popup\" [ngStyle]=\"customPosition\">\r\n  <a class=\"ol-popup-closer\" *ngIf=\"isCloseBtn\"></a>\r\n  <div class=\"overlay-content\">\r\n    <!--\u7528\u6237\u5185\u5BB9-->\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>\r\n",
                styles: [".ol-popup{position:absolute;top:10px;left:10px;background:#000c17;color:#fff;min-width:100px;opacity:.6;-webkit-filter:drop-shadow(0 1px 4px rgba(0, 0, 0, .2));filter:drop-shadow(0 1px 4px rgba(0, 0, 0, .2));padding:15px 20px}.ol-popup:after,.ol-popup:before{top:100%;border:solid transparent;content:\" \";height:0;width:0;position:absolute;pointer-events:none}.ol-popup:after{border-top-color:#000c17;border-width:10px;left:50%;margin-left:-10px}.ol-popup:before{border-top-color:#000c17;border-width:11px;left:50%;margin-left:-11px}.ol-popup-closer{text-decoration:none;position:absolute;top:2px;right:8px;color:#fff}.ol-popup-closer:after{content:\"\u2716\"}"]
            }] }
];
/** @nocollapse */
MapDotPopupComponent.ctorParameters = () => [];
MapDotPopupComponent.propDecorators = {
    isCloseBtn: [{ type: Input }],
    customPosition: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    MapDotPopupComponent.prototype.isCloseBtn;
    /** @type {?} */
    MapDotPopupComponent.prototype.customPosition;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLWRvdC1wb3B1cC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9lY3AtYW50LXVpLyIsInNvdXJjZXMiOlsibGliL21hcC9tYXAtZG90LXBvcHVwL21hcC1kb3QtcG9wdXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBUyxNQUFNLGVBQWUsQ0FBQztBQU92RCxNQUFNO0lBSUo7MEJBSCtCLElBQUk7S0FJbEM7Ozs7SUFFRCxRQUFRO0tBQ1A7OztZQWJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixvUUFBNkM7O2FBRTlDOzs7Ozt5QkFFRSxLQUFLOzZCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2VjcC1tYXAtZG90LXBvcHVwJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbWFwLWRvdC1wb3B1cC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbWFwLWRvdC1wb3B1cC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIE1hcERvdFBvcHVwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBpc0Nsb3NlQnRuOiBib29sZWFuID0gdHJ1ZTtcclxuICBASW5wdXQoKSBjdXN0b21Qb3NpdGlvbjpvYmplY3Q7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=