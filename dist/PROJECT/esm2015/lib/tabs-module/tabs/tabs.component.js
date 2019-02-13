/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, ElementRef } from '@angular/core';
export class TabsComponent {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        let titleArry = this.el.nativeElement.querySelectorAll('.tabs .tab-title a');
        console.log(titleArry);
    }
}
TabsComponent.decorators = [
    { type: Component, args: [{
                selector: 'ecp-tabs',
                template: "<div class=\"tabs\">\r\n <ng-content></ng-content>\r\n</div>\r\n",
                styles: [".tabs{width:100%}.tabs .tab-title a{display:inline-block;padding:0 20px;line-height:30px;height:30px;text-align:center}.tabs .tab-title .hover,.tabs .tab-title a:hover{background:#1e5bd6;color:#fff}.tabs .tab-content{display:block}.tabs .tab-content .item{display:block;border:1px solid #ccc;min-height:300px}"]
            }] }
];
/** @nocollapse */
TabsComponent.ctorParameters = () => [
    { type: ElementRef }
];
if (false) {
    /** @type {?} */
    TabsComponent.prototype.el;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9lY3AtYW50LXVpLyIsInNvdXJjZXMiOlsibGliL3RhYnMtbW9kdWxlL3RhYnMvdGFicy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFvQixNQUFNLGVBQWUsQ0FBQztBQVF2RSxNQUFNOzs7O0lBR0osWUFBb0IsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7S0FFakM7Ozs7SUFFRCxRQUFROztRQUNOLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDN0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUV4Qjs7O1lBaEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTtnQkFDcEIsNEVBQW9DOzthQUVyQzs7OztZQVBrQixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtUYWJDb21wb25lbnR9IGZyb20gJy4uL3RhYi90YWIuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZWNwLXRhYnMnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90YWJzLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi90YWJzLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFic0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBsZXQgdGl0bGVBcnJ5ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJzIC50YWItdGl0bGUgYScpO1xyXG4gICAgY29uc29sZS5sb2codGl0bGVBcnJ5KTtcclxuXHJcbiAgfVxyXG5cclxufVxyXG4iXX0=