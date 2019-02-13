/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
export class HelpInfoComponent {
    constructor() {
        this.isShowHelpInfo = false;
        this.showList = null;
    }
    /**
     * @return {?}
     */
    mouseOut() {
        /** @type {?} */
        const self = this;
        self.showList = setTimeout(function () {
            self.isShowHelpInfo = false;
        }, 200);
    }
    /**
     * @return {?}
     */
    cleanTime() {
        /** @type {?} */
        const self = this;
        clearTimeout(self.showList);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
HelpInfoComponent.decorators = [
    { type: Component, args: [{
                selector: 'ecp-help-info',
                template: "<span class=\"help-info\" (mouseover)=\"isShowHelpInfo=true\" (mouseleave)=\"mouseOut()\">\n     <div class=\"help-info-txt\" *ngIf=\"isShowHelpInfo\" (mouseover)=\"cleanTime()\" (mouseleave)=\"isShowHelpInfo=false\">\n            <ng-content></ng-content>\n     </div>\n</span>\n",
                styles: [".help-info{cursor:pointer;position:relative;display:inline-block;height:14px;width:14px;margin-left:5px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABIUlEQVQokX3SvUpcYRDG8d+GRbBRNHoDEdRGBS/BJs2CIFgEqySdCqKFpa1WKmiz+EXQkEINCHoF3oKFiOQCNJV2KxIZmYWzh90MvJz5+D/vzOGdSr1eV7ABrKCG4Uzf4RKb+NtEqwXRDA7Rq9XG8szjO86j+qEgOktRA0v4iP70G1k7Tfa94yCOUMlLVrGDLxmH342NZIK9DuEiegrDHWMuvxLeS6Fkl2PU6dI/9WGqEHfhtcTUouNoKXlf8LfwA2slZqSqs/3Mp9nFQolqxKi3HaS/MN5GFPYnOl5gok3x83+muYqOMcpTm2I8+mSbfLDbIXzEV/wrASe5SUUL5hsempvzG7Olzvs4KMTPybSsXFgkhrCOG7zkCT9yn5oieANddjeLUeMtuwAAAABJRU5ErkJggg==) center center no-repeat}.help-info .help-info-txt{position:absolute;z-index:1000;right:0;top:25px;background:rgba(0,0,0,1);opacity:.8;width:300px;font-size:14px;line-height:26px;font-weight:400;padding:10px;color:#fff}:host>>>ol{margin:0;padding-left:20px}:host>>>ol li{padding-left:0}"]
            }] }
];
/** @nocollapse */
HelpInfoComponent.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    HelpInfoComponent.prototype.isShowHelpInfo;
    /** @type {?} */
    HelpInfoComponent.prototype.showList;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscC1pbmZvLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2VjcC1hbnQtdWkvIiwic291cmNlcyI6WyJsaWIvbGF5b3V0L2ZsZXgtdGNiLW1vZHVsZS9oZWxwLWluZm8vaGVscC1pbmZvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBUyxNQUFNLGVBQWUsQ0FBQztBQU9oRCxNQUFNO0lBZ0JKOzhCQWZpQixLQUFLO3dCQUNYLElBQUk7S0FlZDs7OztJQWJELFFBQVE7O1FBQ04sTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1NBQzdCLEVBQUUsR0FBRyxDQUFDLENBQUM7S0FDVDs7OztJQUVELFNBQVM7O1FBQ1AsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDN0I7Ozs7SUFLRCxRQUFRO0tBQ1A7OztZQXpCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLG9TQUF5Qzs7YUFFMUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZWNwLWhlbHAtaW5mbycsXG4gIHRlbXBsYXRlVXJsOiAnLi9oZWxwLWluZm8uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9oZWxwLWluZm8uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEhlbHBJbmZvQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgaXNTaG93SGVscEluZm8gPSBmYWxzZTtcbiAgc2hvd0xpc3QgPSBudWxsO1xuXG4gIG1vdXNlT3V0KCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIHNlbGYuc2hvd0xpc3QgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYuaXNTaG93SGVscEluZm8gPSBmYWxzZTtcbiAgICB9LCAyMDApO1xuICB9XG5cbiAgY2xlYW5UaW1lKCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIGNsZWFyVGltZW91dChzZWxmLnNob3dMaXN0KTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIl19