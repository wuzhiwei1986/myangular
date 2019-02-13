/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var FlexLeftCenterRightComponent = /** @class */ (function () {
    function FlexLeftCenterRightComponent() {
        this.leftWidth = 0;
        this.rightWidth = 0;
        this.leftBg = '#ffffff';
        this.bodyBg = '#ffffff';
        this.rightBg = '#ffffff';
    }
    /**
     * @return {?}
     */
    FlexLeftCenterRightComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    FlexLeftCenterRightComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ecp-flex-lcr',
                    template: "<div class=\"flex-lcb\">\r\n  <div class=\"flex-left\" *ngIf=\"leftWidth>0\" [ngStyle]=\"{'flex':'0 0 '+leftWidth+'px','background':leftBg}\">\r\n    <ng-content select=\"ecp-flex-left\"></ng-content>\r\n  </div>\r\n  <div class=\"flex-body\" [ngStyle]=\"{'background':bodyBg}\">\r\n    <ng-content select=\"ecp-flex-body\"></ng-content>\r\n  </div>\r\n  <div class=\"flex-right\" *ngIf=\"rightWidth>0\" [ngStyle]=\"{'flex':'0 0 '+rightWidth+'px','background':rightBg}\">\r\n    <ng-content select=\"ecp-flex-right\"></ng-content>\r\n  </div>\r\n</div>\r\n\r\n",
                    styles: [".flex-lcb{display:flex;width:100%;height:100%}.flex-left{flex:0 0 200px;height:100%;background:#fff;overflow:auto}.flex-body{flex:1;overflow:auto;background:#fff}.flex-right{flex:0 0 200px;height:100%;background:#fff;overflow:auto}"]
                }] }
    ];
    /** @nocollapse */
    FlexLeftCenterRightComponent.ctorParameters = function () { return []; };
    FlexLeftCenterRightComponent.propDecorators = {
        leftWidth: [{ type: Input }],
        rightWidth: [{ type: Input }],
        leftBg: [{ type: Input }],
        bodyBg: [{ type: Input }],
        rightBg: [{ type: Input }]
    };
    return FlexLeftCenterRightComponent;
}());
export { FlexLeftCenterRightComponent };
if (false) {
    /** @type {?} */
    FlexLeftCenterRightComponent.prototype.leftWidth;
    /** @type {?} */
    FlexLeftCenterRightComponent.prototype.rightWidth;
    /** @type {?} */
    FlexLeftCenterRightComponent.prototype.leftBg;
    /** @type {?} */
    FlexLeftCenterRightComponent.prototype.bodyBg;
    /** @type {?} */
    FlexLeftCenterRightComponent.prototype.rightBg;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxleC1sZWZ0LWNlbnRlci1yaWdodC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9lY3AtYW50LXVpLyIsInNvdXJjZXMiOlsibGliL2xheW91dC9mbGV4LWxjci1tb2R1bGUvZmxleC1sZWZ0LWNlbnRlci1yaWdodC9mbGV4LWxlZnQtY2VudGVyLXJpZ2h0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQVMsTUFBTSxlQUFlLENBQUM7O0lBY3JEO3lCQU42QixDQUFDOzBCQUNBLENBQUM7c0JBQ0wsU0FBUztzQkFDVCxTQUFTO3VCQUNSLFNBQVM7S0FHbkM7Ozs7SUFFRCwrQ0FBUTs7O0lBQVI7S0FDQzs7Z0JBaEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsNGpCQUFzRDs7aUJBRXZEOzs7Ozs0QkFFRSxLQUFLOzZCQUNMLEtBQUs7eUJBQ0wsS0FBSzt5QkFDTCxLQUFLOzBCQUNMLEtBQUs7O3VDQVpSOztTQU9hLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZWNwLWZsZXgtbGNyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZmxleC1sZWZ0LWNlbnRlci1yaWdodC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZmxleC1sZWZ0LWNlbnRlci1yaWdodC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEZsZXhMZWZ0Q2VudGVyUmlnaHRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGxlZnRXaWR0aDogbnVtYmVyID0gMDtcclxuICBASW5wdXQoKSByaWdodFdpZHRoOiBudW1iZXIgPSAwO1xyXG4gIEBJbnB1dCgpIGxlZnRCZzogc3RyaW5nID0gJyNmZmZmZmYnO1xyXG4gIEBJbnB1dCgpIGJvZHlCZzogc3RyaW5nID0gJyNmZmZmZmYnO1xyXG4gIEBJbnB1dCgpIHJpZ2h0Qmc6IHN0cmluZyA9ICcjZmZmZmZmJztcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==