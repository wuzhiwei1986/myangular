/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var StatusBarComponent = /** @class */ (function () {
    function StatusBarComponent() {
        this.defaultColor = ['#bcbcbc', '#E81E1E', '#339966', '#edc601'];
    }
    /**
     * @return {?}
     */
    StatusBarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var self = this;
        if (self.customColor != null) {
            self.defaultColor = self.customColor;
        }
    };
    StatusBarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ecp-status-bar',
                    template: "<span class=\"status\" [ngStyle]=\"{'background':defaultColor[statusNum]}\">{{txt}}</span>\r\n\r\n",
                    styles: [".status{width:45px;display:inline-block;font-size:12px;color:#fff;text-align:center;height:22px;line-height:22px;border-radius:2px;margin:0 5px}.status-gray{background:#bcbcbc}.status-red{background:#e81e1e}.status-green{background:#396}.status-yellow{background:#edc601}"]
                }] }
    ];
    /** @nocollapse */
    StatusBarComponent.ctorParameters = function () { return []; };
    StatusBarComponent.propDecorators = {
        txt: [{ type: Input }],
        statusNum: [{ type: Input }],
        customColor: [{ type: Input }]
    };
    return StatusBarComponent;
}());
export { StatusBarComponent };
if (false) {
    /** @type {?} */
    StatusBarComponent.prototype.txt;
    /** @type {?} */
    StatusBarComponent.prototype.statusNum;
    /** @type {?} */
    StatusBarComponent.prototype.customColor;
    /** @type {?} */
    StatusBarComponent.prototype.defaultColor;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHVzLWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9lY3AtYW50LXVpLyIsInNvdXJjZXMiOlsibGliL3N0YXR1cy1iYXIvc3RhdHVzLWJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFTLE1BQU0sZUFBZSxDQUFDOztJQWNyRDs0QkFGOEIsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUM7S0FHekU7Ozs7SUFFRCxxQ0FBUTs7O0lBQVI7O1FBQ0UsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLEVBQUU7WUFDNUIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1NBQ3RDO0tBQ0Y7O2dCQXBCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsOEdBQTBDOztpQkFFM0M7Ozs7O3NCQUVFLEtBQUs7NEJBQ0wsS0FBSzs4QkFDTCxLQUFLOzs2QkFWUjs7U0FPYSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2VjcC1zdGF0dXMtYmFyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc3RhdHVzLWJhci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc3RhdHVzLWJhci5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFN0YXR1c0JhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgdHh0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgc3RhdHVzTnVtOiBudW1iZXI7XHJcbiAgQElucHV0KCkgY3VzdG9tQ29sb3I6IEFycmF5PHN0cmluZz47XHJcblxyXG4gIGRlZmF1bHRDb2xvcjogQXJyYXk8c3RyaW5nPiA9IFsnI2JjYmNiYycsICcjRTgxRTFFJywgJyMzMzk5NjYnLCAnI2VkYzYwMSddO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgaWYgKHNlbGYuY3VzdG9tQ29sb3IgIT0gbnVsbCkge1xyXG4gICAgICBzZWxmLmRlZmF1bHRDb2xvciA9IHNlbGYuY3VzdG9tQ29sb3I7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=