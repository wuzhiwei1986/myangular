/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class FlexTopCenterBottomComponent {
    constructor() {
        this.topHeight = 0;
        this.bottomHeight = 0;
        this.topBg = '#ffffff';
        this.bottomBg = '#ffffff';
        this.bodyBg = '#ffffff';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
FlexTopCenterBottomComponent.decorators = [
    { type: Component, args: [{
                selector: 'ecp-flex-tcb',
                template: "<div class=\"flex-tcb\">\r\n  <div class=\"flex-top\" *ngIf=\"topHeight>0\" [ngStyle]=\"{'height':topHeight+'px','background':topBg}\">\r\n    <ng-content select=\"ecp-flex-top\"></ng-content>\r\n  </div>\r\n  <div class=\"flex-body\"  [ngStyle]=\"{'background':bodyBg}\">\r\n    <ng-content select=\"ecp-flex-body\"></ng-content>\r\n  </div>\r\n  <div class=\"flex-footer\" *ngIf=\"bottomHeight>0\" [ngStyle]=\"{'height':bottomHeight+'px','background':bottomBg}\">\r\n    <ng-content select=\"ecp-flex-bottom\"></ng-content>\r\n  </div>\r\n</div>\r\n",
                styles: [".flex-tcb{height:100%;display:flex;flex-direction:column}:host>>>.flex-tcb .flex-top{flex-grow:0;flex-shrink:0;width:100%}.flex-tcb .flex-body{overflow-y:auto;flex-grow:1;height:inherit}:host>>>.flex-tcb .flex-footer{flex-grow:0;flex-shrink:0;width:100%}"]
            }] }
];
/** @nocollapse */
FlexTopCenterBottomComponent.ctorParameters = () => [];
FlexTopCenterBottomComponent.propDecorators = {
    topHeight: [{ type: Input }],
    bottomHeight: [{ type: Input }],
    topBg: [{ type: Input }],
    bottomBg: [{ type: Input }],
    bodyBg: [{ type: Input }]
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxleC10b3AtY2VudGVyLWJvdHRvbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9lY3AtYW50LXVpLyIsInNvdXJjZXMiOlsibGliL2xheW91dC9mbGV4LXRjYi1tb2R1bGUvZmxleC10b3AtY2VudGVyLWJvdHRvbS9mbGV4LXRvcC1jZW50ZXItYm90dG9tLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFPdkQsTUFBTTtJQVFKO3lCQVA2QixDQUFDOzRCQUNFLENBQUM7cUJBRVIsU0FBUzt3QkFDTixTQUFTO3NCQUNYLFNBQVM7S0FHbEM7Ozs7SUFFRCxRQUFRO0tBQ1A7OztZQWpCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLG1qQkFBc0Q7O2FBRXZEOzs7Ozt3QkFFRSxLQUFLOzJCQUNMLEtBQUs7b0JBRUwsS0FBSzt1QkFDTCxLQUFLO3FCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdlY3AtZmxleC10Y2InLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9mbGV4LXRvcC1jZW50ZXItYm90dG9tLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9mbGV4LXRvcC1jZW50ZXItYm90dG9tLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmxleFRvcENlbnRlckJvdHRvbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgdG9wSGVpZ2h0OiBudW1iZXIgPSAwO1xyXG4gIEBJbnB1dCgpIGJvdHRvbUhlaWdodDogbnVtYmVyID0gMDtcclxuXHJcbiAgQElucHV0KCkgdG9wQmc6IHN0cmluZyA9ICcjZmZmZmZmJztcclxuICBASW5wdXQoKSBib3R0b21CZzogc3RyaW5nID0gJyNmZmZmZmYnO1xyXG4gIEBJbnB1dCgpIGJvZHlCZzogc3RyaW5nID0gJyNmZmZmZmYnO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxufVxyXG4iXX0=