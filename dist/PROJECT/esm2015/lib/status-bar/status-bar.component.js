/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class StatusBarComponent {
    constructor() {
        this.defaultColor = ['#bcbcbc', '#E81E1E', '#339966', '#edc601'];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        let self = this;
        if (self.customColor != null) {
            self.defaultColor = self.customColor;
        }
    }
}
StatusBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'ecp-status-bar',
                template: "<span class=\"status\" [ngStyle]=\"{'background':defaultColor[statusNum]}\">{{txt}}</span>\r\n\r\n",
                styles: [".status{width:45px;display:inline-block;font-size:12px;color:#fff;text-align:center;height:22px;line-height:22px;border-radius:2px;margin:0 5px}.status-gray{background:#bcbcbc}.status-red{background:#e81e1e}.status-green{background:#396}.status-yellow{background:#edc601}"]
            }] }
];
/** @nocollapse */
StatusBarComponent.ctorParameters = () => [];
StatusBarComponent.propDecorators = {
    txt: [{ type: Input }],
    statusNum: [{ type: Input }],
    customColor: [{ type: Input }]
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHVzLWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9lY3AtYW50LXVpLyIsInNvdXJjZXMiOlsibGliL3N0YXR1cy1iYXIvc3RhdHVzLWJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBT3ZELE1BQU07SUFPSjs0QkFGOEIsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUM7S0FHekU7Ozs7SUFFRCxRQUFROztRQUNOLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxFQUFFO1lBQzVCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztTQUN0QztLQUNGOzs7WUFwQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLDhHQUEwQzs7YUFFM0M7Ozs7O2tCQUVFLEtBQUs7d0JBQ0wsS0FBSzswQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdlY3Atc3RhdHVzLWJhcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3N0YXR1cy1iYXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3N0YXR1cy1iYXIuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdGF0dXNCYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIHR4dDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHN0YXR1c051bTogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGN1c3RvbUNvbG9yOiBBcnJheTxzdHJpbmc+O1xyXG5cclxuICBkZWZhdWx0Q29sb3I6IEFycmF5PHN0cmluZz4gPSBbJyNiY2JjYmMnLCAnI0U4MUUxRScsICcjMzM5OTY2JywgJyNlZGM2MDEnXTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIGlmIChzZWxmLmN1c3RvbUNvbG9yICE9IG51bGwpIHtcclxuICAgICAgc2VsZi5kZWZhdWx0Q29sb3IgPSBzZWxmLmN1c3RvbUNvbG9yO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIl19