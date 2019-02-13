/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class FlexLeftCenterRightComponent {
    constructor() {
        this.leftWidth = 0;
        this.rightWidth = 0;
        this.leftBg = '#ffffff';
        this.bodyBg = '#ffffff';
        this.rightBg = '#ffffff';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
FlexLeftCenterRightComponent.decorators = [
    { type: Component, args: [{
                selector: 'ecp-flex-lcr',
                template: "<div class=\"flex-lcb\">\r\n  <div class=\"flex-left\" *ngIf=\"leftWidth>0\" [ngStyle]=\"{'flex':'0 0 '+leftWidth+'px','background':leftBg}\">\r\n    <ng-content select=\"ecp-flex-left\"></ng-content>\r\n  </div>\r\n  <div class=\"flex-body\" [ngStyle]=\"{'background':bodyBg}\">\r\n    <ng-content select=\"ecp-flex-body\"></ng-content>\r\n  </div>\r\n  <div class=\"flex-right\" *ngIf=\"rightWidth>0\" [ngStyle]=\"{'flex':'0 0 '+rightWidth+'px','background':rightBg}\">\r\n    <ng-content select=\"ecp-flex-right\"></ng-content>\r\n  </div>\r\n</div>\r\n\r\n",
                styles: [".flex-lcb{display:flex;width:100%;height:100%}.flex-left{flex:0 0 200px;height:100%;background:#fff;overflow:auto}.flex-body{flex:1;overflow:auto;background:#fff}.flex-right{flex:0 0 200px;height:100%;background:#fff;overflow:auto}"]
            }] }
];
/** @nocollapse */
FlexLeftCenterRightComponent.ctorParameters = () => [];
FlexLeftCenterRightComponent.propDecorators = {
    leftWidth: [{ type: Input }],
    rightWidth: [{ type: Input }],
    leftBg: [{ type: Input }],
    bodyBg: [{ type: Input }],
    rightBg: [{ type: Input }]
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxleC1sZWZ0LWNlbnRlci1yaWdodC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9lY3AtYW50LXVpLyIsInNvdXJjZXMiOlsibGliL2xheW91dC9mbGV4LWxjci1tb2R1bGUvZmxleC1sZWZ0LWNlbnRlci1yaWdodC9mbGV4LWxlZnQtY2VudGVyLXJpZ2h0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFPdkQsTUFBTTtJQU9KO3lCQU42QixDQUFDOzBCQUNBLENBQUM7c0JBQ0wsU0FBUztzQkFDVCxTQUFTO3VCQUNSLFNBQVM7S0FHbkM7Ozs7SUFFRCxRQUFRO0tBQ1A7OztZQWhCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLDRqQkFBc0Q7O2FBRXZEOzs7Ozt3QkFFRSxLQUFLO3lCQUNMLEtBQUs7cUJBQ0wsS0FBSztxQkFDTCxLQUFLO3NCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2VjcC1mbGV4LWxjcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2ZsZXgtbGVmdC1jZW50ZXItcmlnaHQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2ZsZXgtbGVmdC1jZW50ZXItcmlnaHQuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGbGV4TGVmdENlbnRlclJpZ2h0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBsZWZ0V2lkdGg6IG51bWJlciA9IDA7XHJcbiAgQElucHV0KCkgcmlnaHRXaWR0aDogbnVtYmVyID0gMDtcclxuICBASW5wdXQoKSBsZWZ0Qmc6IHN0cmluZyA9ICcjZmZmZmZmJztcclxuICBASW5wdXQoKSBib2R5Qmc6IHN0cmluZyA9ICcjZmZmZmZmJztcclxuICBASW5wdXQoKSByaWdodEJnOiBzdHJpbmcgPSAnI2ZmZmZmZic7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=