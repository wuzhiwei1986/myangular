/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var MapDotPopupComponent = /** @class */ (function () {
    function MapDotPopupComponent() {
        this.isCloseBtn = true;
    }
    /**
     * @return {?}
     */
    MapDotPopupComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    MapDotPopupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ecp-map-dot-popup',
                    template: "<div class=\"ol-popup\" [ngStyle]=\"customPosition\">\r\n  <a class=\"ol-popup-closer\" *ngIf=\"isCloseBtn\"></a>\r\n  <div class=\"overlay-content\">\r\n    <!--\u7528\u6237\u5185\u5BB9-->\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>\r\n",
                    styles: [".ol-popup{position:absolute;top:10px;left:10px;background:#000c17;color:#fff;min-width:100px;opacity:.6;-webkit-filter:drop-shadow(0 1px 4px rgba(0, 0, 0, .2));filter:drop-shadow(0 1px 4px rgba(0, 0, 0, .2));padding:15px 20px}.ol-popup:after,.ol-popup:before{top:100%;border:solid transparent;content:\" \";height:0;width:0;position:absolute;pointer-events:none}.ol-popup:after{border-top-color:#000c17;border-width:10px;left:50%;margin-left:-10px}.ol-popup:before{border-top-color:#000c17;border-width:11px;left:50%;margin-left:-11px}.ol-popup-closer{text-decoration:none;position:absolute;top:2px;right:8px;color:#fff}.ol-popup-closer:after{content:\"\u2716\"}"]
                }] }
    ];
    /** @nocollapse */
    MapDotPopupComponent.ctorParameters = function () { return []; };
    MapDotPopupComponent.propDecorators = {
        isCloseBtn: [{ type: Input }],
        customPosition: [{ type: Input }]
    };
    return MapDotPopupComponent;
}());
export { MapDotPopupComponent };
if (false) {
    /** @type {?} */
    MapDotPopupComponent.prototype.isCloseBtn;
    /** @type {?} */
    MapDotPopupComponent.prototype.customPosition;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLWRvdC1wb3B1cC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9lY3AtYW50LXVpLyIsInNvdXJjZXMiOlsibGliL21hcC9tYXAtZG90LXBvcHVwL21hcC1kb3QtcG9wdXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBUyxNQUFNLGVBQWUsQ0FBQzs7SUFXckQ7MEJBSCtCLElBQUk7S0FJbEM7Ozs7SUFFRCx1Q0FBUTs7O0lBQVI7S0FDQzs7Z0JBYkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLG9RQUE2Qzs7aUJBRTlDOzs7Ozs2QkFFRSxLQUFLO2lDQUNMLEtBQUs7OytCQVRSOztTQU9hLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZWNwLW1hcC1kb3QtcG9wdXAnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9tYXAtZG90LXBvcHVwLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9tYXAtZG90LXBvcHVwLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWFwRG90UG9wdXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGlzQ2xvc2VCdG46IGJvb2xlYW4gPSB0cnVlO1xyXG4gIEBJbnB1dCgpIGN1c3RvbVBvc2l0aW9uOm9iamVjdDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==