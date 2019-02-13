/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
export class LegendComponent {
    constructor() {
        this.mapSideState = true;
        this.legendFold = true;
    }
    /**
     * @return {?}
     */
    switchFold() {
        this.legendFold = !this.legendFold;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
LegendComponent.decorators = [
    { type: Component, args: [{
                selector: 'ecp-map-legend',
                template: "<!--\u53F3\u4E0B\u89D2\u56FE\u4F8B-->\r\n<div class=\"map-bottom-legend\" [@openClose]=\"mapSideState ? 'open' : 'closed'\">\r\n    <a class=\"fold-icon\" [ngClass]=\"{'unfold-icon':!legendFold}\" (click)=\"switchFold()\">\u56FE\u4F8B</a>\r\n\r\n    <div style=\"height:24px;overflow: hidden\" [@legendFold]=\"legendFold ? 'open' : 'closed'\">\r\n        <ng-content>\r\n        </ng-content>\r\n    </div>\r\n\r\n</div>",
                animations: [
                    trigger('openClose', [
                        state('open', style({
                            right: '360px',
                        })),
                        state('closed', style({
                            right: '0px',
                        })),
                        transition('open => closed', [
                            animate('0.1s')
                        ]),
                        transition('closed => open', [
                            animate('0.1s')
                        ]),
                    ]),
                    trigger('legendFold', [
                        state('open', style({
                            width: '*',
                            opacity: '1',
                        })),
                        state('closed', style({
                            width: '0px',
                            opacity: '0',
                        })),
                        transition('open => closed', [
                            animate('0.1s')
                        ]),
                        transition('closed => open', [
                            animate('0.1s')
                        ]),
                    ]),
                ],
                styles: [":host>>>.map-bottom-legend{height:24px;background:rgba(255,255,255,1);position:absolute;bottom:0;right:0}:host>>>.map-bottom-legend span{font-size:12px;display:inline-block;font-weight:400;color:rgba(25,25,25,1);padding:1px 1px 1px 20px;position:relative;margin:0 9px}:host>>>.map-bottom-legend span i{position:absolute;top:2px;left:1px;width:18px;height:18px}:host>>>.map-bottom-legend a.fold-icon{content:\"\";background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASBAMAAACk4JNkAAAAIVBMVEUAAACZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmOFP9JAAAACnRSTlMAYBDvzzCfj68g+rRHXwAAAC5JREFUCNdjwApYmxgKISz2JZpWAhBmllPwQgiLbYkqQUEECyFLUAhhG8IFmAAAbmQSUW8SjUQAAAAASUVORK5CYII=) 5px center no-repeat;width:70px;height:24px;line-height:24px;text-indent:30px;float:left;border-right:1px solid #ccc;cursor:pointer;color:#6e6e6e}:host>>>.map-bottom-legend a.unfold-icon{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASBAMAAACk4JNkAAAAIVBMVEUAAACZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmOFP9JAAAACnRSTlMAYBDvzzCfj68g+rRHXwAAAC1JREFUCNdjwAUYC5haISwpS5XlEKHFQV4JECFTlWX4hRAshCxhQYRtCBdgAgBiuBJRwUIFxwAAAABJRU5ErkJggg==) 5px center no-repeat}"]
            }] }
];
/** @nocollapse */
LegendComponent.ctorParameters = () => [];
LegendComponent.propDecorators = {
    mapSideState: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    LegendComponent.prototype.mapSideState;
    /** @type {?} */
    LegendComponent.prototype.legendFold;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVnZW5kLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2VjcC1hbnQtdWkvIiwic291cmNlcyI6WyJsaWIvbWFwL2xlZ2VuZC9sZWdlbmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUN2RCxPQUFPLEVBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBd0MvRSxNQUFNO0lBUUY7NEJBUHdCLElBQUk7MEJBQ2YsSUFBSTtLQU9oQjs7OztJQUxELFVBQVU7UUFDTixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztLQUN0Qzs7OztJQUtELFFBQVE7S0FDUDs7O1lBakRKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixnYkFBc0M7Z0JBRXRDLFVBQVUsRUFBRTtvQkFDUixPQUFPLENBQUMsV0FBVyxFQUFFO3dCQUNqQixLQUFLLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQzs0QkFDaEIsS0FBSyxFQUFFLE9BQU87eUJBQ2pCLENBQUMsQ0FBQzt3QkFDSCxLQUFLLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQzs0QkFDbEIsS0FBSyxFQUFFLEtBQUs7eUJBQ2YsQ0FBQyxDQUFDO3dCQUNILFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRTs0QkFDekIsT0FBTyxDQUFDLE1BQU0sQ0FBQzt5QkFDbEIsQ0FBQzt3QkFDRixVQUFVLENBQUMsZ0JBQWdCLEVBQUU7NEJBQ3pCLE9BQU8sQ0FBQyxNQUFNLENBQUM7eUJBQ2xCLENBQUM7cUJBQ0wsQ0FBQztvQkFDRixPQUFPLENBQUMsWUFBWSxFQUFFO3dCQUNsQixLQUFLLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQzs0QkFDaEIsS0FBSyxFQUFFLEdBQUc7NEJBQ1YsT0FBTyxFQUFFLEdBQUc7eUJBQ2YsQ0FBQyxDQUFDO3dCQUNILEtBQUssQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDOzRCQUNsQixLQUFLLEVBQUUsS0FBSzs0QkFDWixPQUFPLEVBQUUsR0FBRzt5QkFDZixDQUFDLENBQUM7d0JBQ0gsVUFBVSxDQUFDLGdCQUFnQixFQUFFOzRCQUN6QixPQUFPLENBQUMsTUFBTSxDQUFDO3lCQUNsQixDQUFDO3dCQUNGLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRTs0QkFDekIsT0FBTyxDQUFDLE1BQU0sQ0FBQzt5QkFDbEIsQ0FBQztxQkFDTCxDQUFDO2lCQUNMOzthQUNKOzs7OzsyQkFFSSxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge2FuaW1hdGUsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlcn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2VjcC1tYXAtbGVnZW5kJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9sZWdlbmQuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vbGVnZW5kLmNvbXBvbmVudC5jc3MnXSxcclxuICAgIGFuaW1hdGlvbnM6IFtcclxuICAgICAgICB0cmlnZ2VyKCdvcGVuQ2xvc2UnLCBbXHJcbiAgICAgICAgICAgIHN0YXRlKCdvcGVuJywgc3R5bGUoe1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6ICczNjBweCcsXHJcbiAgICAgICAgICAgIH0pKSxcclxuICAgICAgICAgICAgc3RhdGUoJ2Nsb3NlZCcsIHN0eWxlKHtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAnMHB4JyxcclxuICAgICAgICAgICAgfSkpLFxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCdvcGVuID0+IGNsb3NlZCcsIFtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGUoJzAuMXMnKVxyXG4gICAgICAgICAgICBdKSxcclxuICAgICAgICAgICAgdHJhbnNpdGlvbignY2xvc2VkID0+IG9wZW4nLCBbXHJcbiAgICAgICAgICAgICAgICBhbmltYXRlKCcwLjFzJylcclxuICAgICAgICAgICAgXSksXHJcbiAgICAgICAgXSksXHJcbiAgICAgICAgdHJpZ2dlcignbGVnZW5kRm9sZCcsIFtcclxuICAgICAgICAgICAgc3RhdGUoJ29wZW4nLCBzdHlsZSh7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogJyonLFxyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogJzEnLFxyXG4gICAgICAgICAgICB9KSksXHJcbiAgICAgICAgICAgIHN0YXRlKCdjbG9zZWQnLCBzdHlsZSh7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogJzBweCcsXHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAnMCcsXHJcbiAgICAgICAgICAgIH0pKSxcclxuICAgICAgICAgICAgdHJhbnNpdGlvbignb3BlbiA9PiBjbG9zZWQnLCBbXHJcbiAgICAgICAgICAgICAgICBhbmltYXRlKCcwLjFzJylcclxuICAgICAgICAgICAgXSksXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJ2Nsb3NlZCA9PiBvcGVuJywgW1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0ZSgnMC4xcycpXHJcbiAgICAgICAgICAgIF0pLFxyXG4gICAgICAgIF0pLFxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGVnZW5kQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIEBJbnB1dCgpIG1hcFNpZGVTdGF0ZSA9IHRydWU7IC8vIOS+p+i+ueagj+aYr+WQpuWxleW8gFxyXG4gICAgbGVnZW5kRm9sZCA9IHRydWU7IC8vIOWbvuS+i+aYr+WQpuaKmOWPoFxyXG5cclxuICAgIHN3aXRjaEZvbGQoKSB7XHJcbiAgICAgICAgdGhpcy5sZWdlbmRGb2xkID0gIXRoaXMubGVnZW5kRm9sZDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgIH1cclxuXHJcbn1cclxuIl19