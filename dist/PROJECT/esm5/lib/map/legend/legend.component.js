/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
var LegendComponent = /** @class */ (function () {
    function LegendComponent() {
        this.mapSideState = true;
        this.legendFold = true;
    }
    /**
     * @return {?}
     */
    LegendComponent.prototype.switchFold = /**
     * @return {?}
     */
    function () {
        this.legendFold = !this.legendFold;
    };
    /**
     * @return {?}
     */
    LegendComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
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
    LegendComponent.ctorParameters = function () { return []; };
    LegendComponent.propDecorators = {
        mapSideState: [{ type: Input }]
    };
    return LegendComponent;
}());
export { LegendComponent };
if (false) {
    /** @type {?} */
    LegendComponent.prototype.mapSideState;
    /** @type {?} */
    LegendComponent.prototype.legendFold;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVnZW5kLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2VjcC1hbnQtdWkvIiwic291cmNlcyI6WyJsaWIvbWFwL2xlZ2VuZC9sZWdlbmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUN2RCxPQUFPLEVBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBQyxNQUFNLHFCQUFxQixDQUFDOztJQWdEM0U7NEJBUHdCLElBQUk7MEJBQ2YsSUFBSTtLQU9oQjs7OztJQUxELG9DQUFVOzs7SUFBVjtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO0tBQ3RDOzs7O0lBS0Qsa0NBQVE7OztJQUFSO0tBQ0M7O2dCQWpESixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsZ2JBQXNDO29CQUV0QyxVQUFVLEVBQUU7d0JBQ1IsT0FBTyxDQUFDLFdBQVcsRUFBRTs0QkFDakIsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUM7Z0NBQ2hCLEtBQUssRUFBRSxPQUFPOzZCQUNqQixDQUFDLENBQUM7NEJBQ0gsS0FBSyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUM7Z0NBQ2xCLEtBQUssRUFBRSxLQUFLOzZCQUNmLENBQUMsQ0FBQzs0QkFDSCxVQUFVLENBQUMsZ0JBQWdCLEVBQUU7Z0NBQ3pCLE9BQU8sQ0FBQyxNQUFNLENBQUM7NkJBQ2xCLENBQUM7NEJBQ0YsVUFBVSxDQUFDLGdCQUFnQixFQUFFO2dDQUN6QixPQUFPLENBQUMsTUFBTSxDQUFDOzZCQUNsQixDQUFDO3lCQUNMLENBQUM7d0JBQ0YsT0FBTyxDQUFDLFlBQVksRUFBRTs0QkFDbEIsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUM7Z0NBQ2hCLEtBQUssRUFBRSxHQUFHO2dDQUNWLE9BQU8sRUFBRSxHQUFHOzZCQUNmLENBQUMsQ0FBQzs0QkFDSCxLQUFLLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQztnQ0FDbEIsS0FBSyxFQUFFLEtBQUs7Z0NBQ1osT0FBTyxFQUFFLEdBQUc7NkJBQ2YsQ0FBQyxDQUFDOzRCQUNILFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRTtnQ0FDekIsT0FBTyxDQUFDLE1BQU0sQ0FBQzs2QkFDbEIsQ0FBQzs0QkFDRixVQUFVLENBQUMsZ0JBQWdCLEVBQUU7Z0NBQ3pCLE9BQU8sQ0FBQyxNQUFNLENBQUM7NkJBQ2xCLENBQUM7eUJBQ0wsQ0FBQztxQkFDTDs7aUJBQ0o7Ozs7OytCQUVJLEtBQUs7OzBCQTFDVjs7U0F5Q2EsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHthbmltYXRlLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXJ9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdlY3AtbWFwLWxlZ2VuZCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vbGVnZW5kLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2xlZ2VuZC5jb21wb25lbnQuY3NzJ10sXHJcbiAgICBhbmltYXRpb25zOiBbXHJcbiAgICAgICAgdHJpZ2dlcignb3BlbkNsb3NlJywgW1xyXG4gICAgICAgICAgICBzdGF0ZSgnb3BlbicsIHN0eWxlKHtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAnMzYwcHgnLFxyXG4gICAgICAgICAgICB9KSksXHJcbiAgICAgICAgICAgIHN0YXRlKCdjbG9zZWQnLCBzdHlsZSh7XHJcbiAgICAgICAgICAgICAgICByaWdodDogJzBweCcsXHJcbiAgICAgICAgICAgIH0pKSxcclxuICAgICAgICAgICAgdHJhbnNpdGlvbignb3BlbiA9PiBjbG9zZWQnLCBbXHJcbiAgICAgICAgICAgICAgICBhbmltYXRlKCcwLjFzJylcclxuICAgICAgICAgICAgXSksXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJ2Nsb3NlZCA9PiBvcGVuJywgW1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0ZSgnMC4xcycpXHJcbiAgICAgICAgICAgIF0pLFxyXG4gICAgICAgIF0pLFxyXG4gICAgICAgIHRyaWdnZXIoJ2xlZ2VuZEZvbGQnLCBbXHJcbiAgICAgICAgICAgIHN0YXRlKCdvcGVuJywgc3R5bGUoe1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6ICcqJyxcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6ICcxJyxcclxuICAgICAgICAgICAgfSkpLFxyXG4gICAgICAgICAgICBzdGF0ZSgnY2xvc2VkJywgc3R5bGUoe1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6ICcwcHgnLFxyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogJzAnLFxyXG4gICAgICAgICAgICB9KSksXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJ29wZW4gPT4gY2xvc2VkJywgW1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0ZSgnMC4xcycpXHJcbiAgICAgICAgICAgIF0pLFxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCdjbG9zZWQgPT4gb3BlbicsIFtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGUoJzAuMXMnKVxyXG4gICAgICAgICAgICBdKSxcclxuICAgICAgICBdKSxcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIExlZ2VuZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBASW5wdXQoKSBtYXBTaWRlU3RhdGUgPSB0cnVlOyAvLyDkvqfovrnmoI/mmK/lkKblsZXlvIBcclxuICAgIGxlZ2VuZEZvbGQgPSB0cnVlOyAvLyDlm77kvovmmK/lkKbmipjlj6BcclxuXHJcbiAgICBzd2l0Y2hGb2xkKCkge1xyXG4gICAgICAgIHRoaXMubGVnZW5kRm9sZCA9ICF0aGlzLmxlZ2VuZEZvbGQ7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==