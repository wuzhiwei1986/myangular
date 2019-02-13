/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var FlexTopCenterBottomComponent = /** @class */ (function () {
    function FlexTopCenterBottomComponent() {
        this.topHeight = 0;
        this.bottomHeight = 0;
        this.topBg = '#ffffff';
        this.bottomBg = '#ffffff';
        this.bodyBg = '#ffffff';
    }
    /**
     * @return {?}
     */
    FlexTopCenterBottomComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    FlexTopCenterBottomComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ecp-flex-tcb',
                    template: "<div class=\"flex-tcb\">\r\n  <div class=\"flex-top\" *ngIf=\"topHeight>0\" [ngStyle]=\"{'height':topHeight+'px','background':topBg}\">\r\n    <ng-content select=\"ecp-flex-top\"></ng-content>\r\n  </div>\r\n  <div class=\"flex-body\"  [ngStyle]=\"{'background':bodyBg}\">\r\n    <ng-content select=\"ecp-flex-body\"></ng-content>\r\n  </div>\r\n  <div class=\"flex-footer\" *ngIf=\"bottomHeight>0\" [ngStyle]=\"{'height':bottomHeight+'px','background':bottomBg}\">\r\n    <ng-content select=\"ecp-flex-bottom\"></ng-content>\r\n  </div>\r\n</div>\r\n",
                    styles: [".flex-tcb{height:100%;display:flex;flex-direction:column}:host>>>.flex-tcb .flex-top{flex-grow:0;flex-shrink:0;width:100%}.flex-tcb .flex-body{overflow-y:auto;flex-grow:1;height:inherit}:host>>>.flex-tcb .flex-footer{flex-grow:0;flex-shrink:0;width:100%}"]
                }] }
    ];
    /** @nocollapse */
    FlexTopCenterBottomComponent.ctorParameters = function () { return []; };
    FlexTopCenterBottomComponent.propDecorators = {
        topHeight: [{ type: Input }],
        bottomHeight: [{ type: Input }],
        topBg: [{ type: Input }],
        bottomBg: [{ type: Input }],
        bodyBg: [{ type: Input }]
    };
    return FlexTopCenterBottomComponent;
}());
export { FlexTopCenterBottomComponent };
if (false) {
    /** @type {?} */
    FlexTopCenterBottomComponent.prototype.topHeight;
    /** @type {?} */
    FlexTopCenterBottomComponent.prototype.bottomHeight;
    /** @type {?} */
    FlexTopCenterBottomComponent.prototype.topBg;
    /** @type {?} */
    FlexTopCenterBottomComponent.prototype.bottomBg;
    /** @type {?} */
    FlexTopCenterBottomComponent.prototype.bodyBg;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxleC10b3AtY2VudGVyLWJvdHRvbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9lY3AtYW50LXVpLyIsInNvdXJjZXMiOlsibGliL2xheW91dC9mbGV4LXRjYi1tb2R1bGUvZmxleC10b3AtY2VudGVyLWJvdHRvbS9mbGV4LXRvcC1jZW50ZXItYm90dG9tLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQVMsTUFBTSxlQUFlLENBQUM7O0lBZXJEO3lCQVA2QixDQUFDOzRCQUNFLENBQUM7cUJBRVIsU0FBUzt3QkFDTixTQUFTO3NCQUNYLFNBQVM7S0FHbEM7Ozs7SUFFRCwrQ0FBUTs7O0lBQVI7S0FDQzs7Z0JBakJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsbWpCQUFzRDs7aUJBRXZEOzs7Ozs0QkFFRSxLQUFLOytCQUNMLEtBQUs7d0JBRUwsS0FBSzsyQkFDTCxLQUFLO3lCQUNMLEtBQUs7O3VDQWRSOztTQVFhLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2VjcC1mbGV4LXRjYicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2ZsZXgtdG9wLWNlbnRlci1ib3R0b20uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2ZsZXgtdG9wLWNlbnRlci1ib3R0b20uY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGbGV4VG9wQ2VudGVyQm90dG9tQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSB0b3BIZWlnaHQ6IG51bWJlciA9IDA7XHJcbiAgQElucHV0KCkgYm90dG9tSGVpZ2h0OiBudW1iZXIgPSAwO1xyXG5cclxuICBASW5wdXQoKSB0b3BCZzogc3RyaW5nID0gJyNmZmZmZmYnO1xyXG4gIEBJbnB1dCgpIGJvdHRvbUJnOiBzdHJpbmcgPSAnI2ZmZmZmZic7XHJcbiAgQElucHV0KCkgYm9keUJnOiBzdHJpbmcgPSAnI2ZmZmZmZic7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG59XHJcbiJdfQ==