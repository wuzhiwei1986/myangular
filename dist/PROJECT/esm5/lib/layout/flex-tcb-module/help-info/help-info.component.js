/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
var HelpInfoComponent = /** @class */ (function () {
    function HelpInfoComponent() {
        this.isShowHelpInfo = false;
        this.showList = null;
    }
    /**
     * @return {?}
     */
    HelpInfoComponent.prototype.mouseOut = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var self = this;
        self.showList = setTimeout(function () {
            self.isShowHelpInfo = false;
        }, 200);
    };
    /**
     * @return {?}
     */
    HelpInfoComponent.prototype.cleanTime = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var self = this;
        clearTimeout(self.showList);
    };
    /**
     * @return {?}
     */
    HelpInfoComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    HelpInfoComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ecp-help-info',
                    template: "<span class=\"help-info\" (mouseover)=\"isShowHelpInfo=true\" (mouseleave)=\"mouseOut()\">\n     <div class=\"help-info-txt\" *ngIf=\"isShowHelpInfo\" (mouseover)=\"cleanTime()\" (mouseleave)=\"isShowHelpInfo=false\">\n            <ng-content></ng-content>\n     </div>\n</span>\n",
                    styles: [".help-info{cursor:pointer;position:relative;display:inline-block;height:14px;width:14px;margin-left:5px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABIUlEQVQokX3SvUpcYRDG8d+GRbBRNHoDEdRGBS/BJs2CIFgEqySdCqKFpa1WKmiz+EXQkEINCHoF3oKFiOQCNJV2KxIZmYWzh90MvJz5+D/vzOGdSr1eV7ABrKCG4Uzf4RKb+NtEqwXRDA7Rq9XG8szjO86j+qEgOktRA0v4iP70G1k7Tfa94yCOUMlLVrGDLxmH342NZIK9DuEiegrDHWMuvxLeS6Fkl2PU6dI/9WGqEHfhtcTUouNoKXlf8LfwA2slZqSqs/3Mp9nFQolqxKi3HaS/MN5GFPYnOl5gok3x83+muYqOMcpTm2I8+mSbfLDbIXzEV/wrASe5SUUL5hsempvzG7Olzvs4KMTPybSsXFgkhrCOG7zkCT9yn5oieANddjeLUeMtuwAAAABJRU5ErkJggg==) center center no-repeat}.help-info .help-info-txt{position:absolute;z-index:1000;right:0;top:25px;background:rgba(0,0,0,1);opacity:.8;width:300px;font-size:14px;line-height:26px;font-weight:400;padding:10px;color:#fff}:host>>>ol{margin:0;padding-left:20px}:host>>>ol li{padding-left:0}"]
                }] }
    ];
    /** @nocollapse */
    HelpInfoComponent.ctorParameters = function () { return []; };
    return HelpInfoComponent;
}());
export { HelpInfoComponent };
if (false) {
    /** @type {?} */
    HelpInfoComponent.prototype.isShowHelpInfo;
    /** @type {?} */
    HelpInfoComponent.prototype.showList;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscC1pbmZvLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2VjcC1hbnQtdWkvIiwic291cmNlcyI6WyJsaWIvbGF5b3V0L2ZsZXgtdGNiLW1vZHVsZS9oZWxwLWluZm8vaGVscC1pbmZvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBUyxNQUFNLGVBQWUsQ0FBQzs7SUF1QjlDOzhCQWZpQixLQUFLO3dCQUNYLElBQUk7S0FlZDs7OztJQWJELG9DQUFROzs7SUFBUjs7UUFDRSxJQUFNLElBQUksR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7WUFDekIsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7U0FDN0IsRUFBRSxHQUFHLENBQUMsQ0FBQztLQUNUOzs7O0lBRUQscUNBQVM7OztJQUFUOztRQUNFLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQztRQUNsQixZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQzdCOzs7O0lBS0Qsb0NBQVE7OztJQUFSO0tBQ0M7O2dCQXpCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLG9TQUF5Qzs7aUJBRTFDOzs7OzRCQU5EOztTQU9hLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlY3AtaGVscC1pbmZvJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2hlbHAtaW5mby5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2hlbHAtaW5mby5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSGVscEluZm9Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBpc1Nob3dIZWxwSW5mbyA9IGZhbHNlO1xuICBzaG93TGlzdCA9IG51bGw7XG5cbiAgbW91c2VPdXQoKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgc2VsZi5zaG93TGlzdCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi5pc1Nob3dIZWxwSW5mbyA9IGZhbHNlO1xuICAgIH0sIDIwMCk7XG4gIH1cblxuICBjbGVhblRpbWUoKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgY2xlYXJUaW1lb3V0KHNlbGYuc2hvd0xpc3QpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=