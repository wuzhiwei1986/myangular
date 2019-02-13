/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
export class DropDownGroupMenuComponent {
    constructor() {
        this.changeOpen = false;
        this.currentSys = '切换系统';
        this.navHomeUrl = new EventEmitter();
        this.navUrl = new EventEmitter();
    }
    /**
     * @return {?}
     */
    navHome() {
        this.navHomeUrl.emit();
    }
    /**
     * @param {?} id
     * @return {?}
     */
    navSub(id) {
        this.navUrl.emit(id);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
DropDownGroupMenuComponent.decorators = [
    { type: Component, args: [{
                selector: 'ecp-drop-down-group-menu',
                template: "<span class=\"change-sys\" style=\"float: right\" (mouseleave)=\"changeOpen=false\">\n        <div class=\"title \" [ngClass]=\"{'bg':changeOpen}\" (mouseover)=\"changeOpen=true\">{{currentSys}}</div>\n        <ul style=\"display: none\" [@displayState]=\"changeOpen == true? 'block' : 'none'\">\n             <li class=\"item\" (click)=\"navHome()\"><div class=\"index\"><i class=\"icon dongxiniotwater revenue_home\"></i>\u7CFB\u7EDF\u4E3B\u9875</div></li>\n             <li class=\"item\">\n                 <span class=\"item-title\">\u4EA7\u54C1</span>\n                 <ol>\n                     <ng-container *ngFor=\"let menu of menusList;let i=index\">\n                        <li (click)=\"navSub(menu)\" *ngIf=\"menu.systype=='sys'\"><i class=\"icon dongxiniotwater {{menu.iconuri}}\"></i>{{menu.name}}</li>\n                     </ng-container>\n                 </ol>\n             </li>\n              <li class=\"item\">\n                 <span class=\"item-title\">\u5DE5\u5177</span>\n                 <ol>\n                     <ng-container *ngFor=\"let menu of menusList;let i=index\">\n                        <li (click)=\"navSub(menu)\" *ngIf=\"menu.systype=='tool'\"><i class=\"icon dongxiniotwater {{menu.iconuri}}\"></i>{{menu.name}}</li>\n                     </ng-container>\n                 </ol>\n             </li>\n        </ul>\n    <!--\n              <li class=\"index\" (click)=\"navHome()\">\u7CFB\u7EDF\u4E3B\u9875</li>\n              <li class=\"{{menu.iconuri}}\" *ngFor=\"let menu of menusList;let i=index\"\n                  (click)=\"navSub(menu)\">{{menu.name}}</li>\n        -->\n</span>\n",
                animations: [
                    trigger('displayState', [
                        state('none', style({
                            display: 'none', opacity: '0',
                        })),
                        state('block', style({
                            display: 'block', opacity: '1',
                        })),
                        transition('none => block', animate('100ms linear')),
                        transition('block => none', animate('80ms linear'))
                    ])
                ],
                styles: ["li,ol,ul{padding:0;margin:0;list-style:none}.change-sys{z-index:1000;margin-right:15px;height:32px;line-height:32px;display:block;float:right;position:relative}.change-sys .title{display:inline-block;float:right;color:#fff;height:50px;line-height:50px;text-align:right;padding-left:15px;padding-right:32px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAeCAYAAADOziUSAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAAAcElEQVRIx+3SMQqAMBBE0VkRco806XIWPamdns3qWwVEUaKkUNjppnkMy0qNElOma4VJkmOOOdYOAwKwcJ0FCNXiDVgNxZQ5gvPbRTFl+lLMbAVGSZMkkzSY2frkZv2+7EA9hU7YW6Tkw3/mmGN/wzY9A2lGL1XvVQAAAABJRU5ErkJggg==) right center no-repeat;cursor:pointer}.change-sys .bg{background-color:#22272e}.change-sys ul{position:absolute;right:0;top:50px;background:#22272e;width:150px;padding:0;box-shadow:0 0 6px rgba(0,0,0,.4)}.change-sys ul>li.item{list-style:none;color:#dadada;width:150px;text-align:left;display:block;cursor:pointer;border-bottom:1px solid #303844}.change-sys ul>li.item .index{height:42px;line-height:42px;font-size:14px;padding-left:15px}.change-sys ul>li.item .item-title{height:28px;line-height:28px;font-size:12px;color:#6e6e6e;padding-left:11px}.change-sys ul>li.item ol{font-size:14px;padding-bottom:4px}.change-sys ul>li.item ol>li{padding-left:15px;height:32px;line-height:32px}.change-sys ul>li.item ol>li:hover{background:#2768ec}.change-sys ul>li.item i{margin-right:10px}"]
            }] }
];
/** @nocollapse */
DropDownGroupMenuComponent.ctorParameters = () => [];
DropDownGroupMenuComponent.propDecorators = {
    menusList: [{ type: Input }],
    currentSys: [{ type: Input }],
    navHomeUrl: [{ type: Output }],
    navUrl: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    DropDownGroupMenuComponent.prototype.changeOpen;
    /** @type {?} */
    DropDownGroupMenuComponent.prototype.menusList;
    /** @type {?} */
    DropDownGroupMenuComponent.prototype.currentSys;
    /** @type {?} */
    DropDownGroupMenuComponent.prototype.navHomeUrl;
    /** @type {?} */
    DropDownGroupMenuComponent.prototype.navUrl;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcC1kb3duLWdyb3VwLW1lbnUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZWNwLWFudC11aS8iLCJzb3VyY2VzIjpbImxpYi9uYXYtbW9kdWxlL2Ryb3AtZG93bi1ncm91cC1tZW51L2Ryb3AtZG93bi1ncm91cC1tZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBbUIvRSxNQUFNO0lBZ0ZGOzBCQS9Fc0IsS0FBSzswQkFFTCxNQUFNOzBCQUNMLElBQUksWUFBWSxFQUFFO3NCQUN0QixJQUFJLFlBQVksRUFBRTtLQTRFcEM7Ozs7SUF6RUQsT0FBTztRQUNILElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDMUI7Ozs7O0lBRUQsTUFBTSxDQUFDLEVBQUU7UUFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUN4Qjs7OztJQXFFRCxRQUFRO0tBQ1A7OztZQXJHSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsa25EQUFvRDtnQkFFcEQsVUFBVSxFQUFFO29CQUNSLE9BQU8sQ0FBQyxjQUFjLEVBQUU7d0JBQ3BCLEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDOzRCQUNoQixPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHO3lCQUNoQyxDQUFDLENBQUM7d0JBQ0gsS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUM7NEJBQ2pCLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEdBQUc7eUJBQ2pDLENBQUMsQ0FBQzt3QkFDSCxVQUFVLENBQUMsZUFBZSxFQUFFLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQzt3QkFDcEQsVUFBVSxDQUFDLGVBQWUsRUFBRSxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7cUJBQ3RELENBQUM7aUJBQ0w7O2FBQ0o7Ozs7O3dCQUdJLEtBQUs7eUJBQ0wsS0FBSzt5QkFDTCxNQUFNO3FCQUNOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHthbmltYXRlLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXJ9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2VjcC1kcm9wLWRvd24tZ3JvdXAtbWVudScsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2Ryb3AtZG93bi1ncm91cC1tZW51LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9kcm9wLWRvd24tZ3JvdXAtbWVudS5jb21wb25lbnQuY3NzJ10sXG4gICAgYW5pbWF0aW9uczogW1xuICAgICAgICB0cmlnZ2VyKCdkaXNwbGF5U3RhdGUnLCBbXG4gICAgICAgICAgICBzdGF0ZSgnbm9uZScsIHN0eWxlKHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnbm9uZScsIG9wYWNpdHk6ICcwJyxcbiAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgIHN0YXRlKCdibG9jaycsIHN0eWxlKHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLCBvcGFjaXR5OiAnMScsXG4gICAgICAgICAgICB9KSksXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCdub25lID0+IGJsb2NrJywgYW5pbWF0ZSgnMTAwbXMgbGluZWFyJykpLFxuICAgICAgICAgICAgdHJhbnNpdGlvbignYmxvY2sgPT4gbm9uZScsIGFuaW1hdGUoJzgwbXMgbGluZWFyJykpXG4gICAgICAgIF0pXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBEcm9wRG93bkdyb3VwTWVudUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgY2hhbmdlT3BlbjogQm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIG1lbnVzTGlzdDogQXJyYXk8YW55PjtcbiAgICBASW5wdXQoKSBjdXJyZW50U3lzID0gJ+WIh+aNouezu+e7nyc7XG4gICAgQE91dHB1dCgpIG5hdkhvbWVVcmwgPSBuZXcgRXZlbnRFbWl0dGVyKCk7Ly/kuLvpobXot7PovaxcbiAgICBAT3V0cHV0KCkgbmF2VXJsID0gbmV3IEV2ZW50RW1pdHRlcigpOy8v5LqM57qn6Lez6L2sXG5cblxuICAgIG5hdkhvbWUoKSB7XG4gICAgICAgIHRoaXMubmF2SG9tZVVybC5lbWl0KCk7XG4gICAgfVxuXG4gICAgbmF2U3ViKGlkKSB7XG4gICAgICAgIHRoaXMubmF2VXJsLmVtaXQoaWQpO1xuICAgIH1cbi8qXG5cbiAgICBtZW51c0dyb3VwTGlzdCA9IFt7XG4gICAgICAgICdtZW51aWQnOiA5NjAwMDAwMCxcbiAgICAgICAgJ3BhcmVudGlkJzogMCxcbiAgICAgICAgJ25hbWUnOiAn5raI5oGv5Lit5b+DJyxcbiAgICAgICAgJ3VyaSc6ICcvc2lnbicsXG4gICAgICAgICdpY29udXJpJzogJ21lc3NhZ2UnLFxuICAgICAgICAnaGF2ZWNoaWxkJzogdHJ1ZSxcbiAgICAgICAgJ2NoaWxkJzogbnVsbCxcbiAgICAgICAgJ2ludHJvZHVjdGlvbic6ICfnu5/kuIDnrqHnkIbns7vnu5/lj5HpgIHnmoTpgq7ku7bvvIznn63kv6HvvIzlvq7kv6HnrYnmnaXlvoDkv6Hmga8nLFxuICAgICAgICAnc3lzX3R5cGUnOiAndG9vbCdcbiAgICB9e1xuICAgICAgICAnbWVudWlkJzogOTYwMDAwMDAsXG4gICAgICAgICdwYXJlbnRpZCc6IDAsXG4gICAgICAgICduYW1lJzogJ+a2iOaBr+S4reW/gzEnLFxuICAgICAgICAndXJpJzogJy9zaWduJyxcbiAgICAgICAgJ2ljb251cmknOiAnbWVzc2FnZScsXG4gICAgICAgICdoYXZlY2hpbGQnOiB0cnVlLFxuICAgICAgICAnY2hpbGQnOiBudWxsLFxuICAgICAgICAnaW50cm9kdWN0aW9uJzogJ+e7n+S4gOeuoeeQhuezu+e7n+WPkemAgeeahOmCruS7tu+8jOefreS/oe+8jOW+ruS/oeetieadpeW+gOS/oeaBrycsXG4gICAgICAgICdzeXNfdHlwZSc6ICd0b29sJ1xuICAgIH17XG4gICAgICAgICdtZW51aWQnOiA5NjAwMDAwMCxcbiAgICAgICAgJ3BhcmVudGlkJzogMCxcbiAgICAgICAgJ25hbWUnOiAn5raI5oGv5Lit5b+DMicsXG4gICAgICAgICd1cmknOiAnL3NpZ24nLFxuICAgICAgICAnaWNvbnVyaSc6ICdtZXNzYWdlJyxcbiAgICAgICAgJ2hhdmVjaGlsZCc6IHRydWUsXG4gICAgICAgICdjaGlsZCc6IG51bGwsXG4gICAgICAgICdpbnRyb2R1Y3Rpb24nOiAn57uf5LiA566h55CG57O757uf5Y+R6YCB55qE6YKu5Lu277yM55+t5L+h77yM5b6u5L+h562J5p2l5b6A5L+h5oGvJyxcbiAgICAgICAgJ3N5c190eXBlJzogJ3Rvb2wnXG4gICAgfSwge1xuICAgICAgICAnbWVudWlkJzogOTcwMDAwMDAsXG4gICAgICAgICdwYXJlbnRpZCc6IDAsXG4gICAgICAgICduYW1lJzogJ+WFrOWFsemFjee9ricsXG4gICAgICAgICd1cmknOiAnL3NpZ24nLFxuICAgICAgICAnaWNvbnVyaSc6ICdjb25maWd1cmF0aW9uJyxcbiAgICAgICAgJ2hhdmVjaGlsZCc6IHRydWUsXG4gICAgICAgICdjaGlsZCc6IG51bGwsXG4gICAgICAgICdpbnRyb2R1Y3Rpb24nOiAn6YWN572u6YKu5Lu244CB55+t5L+h44CB5oql6KGo44CB5b6u5L+h562J5YWs5YWx57uE5Lu25o6l5YWl5ZKM5qih5p2/5L+h5oGvJyxcbiAgICAgICAgJ3N5c190eXBlJzogJ3Rvb2wnXG4gICAgfSwge1xuICAgICAgICAnbWVudWlkJzogOTgwMDAwMDAsXG4gICAgICAgICdwYXJlbnRpZCc6IDAsXG4gICAgICAgICduYW1lJzogJ+euoea8j+euoeeQhicsXG4gICAgICAgICd1cmknOiAnL3Bscy9tYW5hZ2VtZW50JyxcbiAgICAgICAgJ2ljb251cmknOiAncGlwZScsXG4gICAgICAgICdoYXZlY2hpbGQnOiB0cnVlLFxuICAgICAgICAnY2hpbGQnOiBudWxsLFxuICAgICAgICAnaW50cm9kdWN0aW9uJzogJ+S4u+imgeWMheaLrOeuoea8j+ezu+e7n+WfuuacrOS/oeaBr+e7n+iuoe+8jOeuoea8j+eUqOaIt+euoeeQhu+8jOeuoea8j+WuouaIt+euoeeQhu+8jOa1gemHj+iuoeeuoeeQhuetieWKn+iDvScsXG4gICAgICAgICdzeXNfdHlwZSc6ICdzeXMnXG4gICAgfSwge1xuICAgICAgICAnbWVudWlkJzogOTkwMDAwMDAsXG4gICAgICAgICdwYXJlbnRpZCc6IDAsXG4gICAgICAgICduYW1lJzogJ+adg+mZkOeuoeeQhicsXG4gICAgICAgICd1cmknOiAnL3NpZ24nLFxuICAgICAgICAnaWNvbnVyaSc6ICdhdXRob3JpdHlfbWFuYWdlbWVudCcsXG4gICAgICAgICdoYXZlY2hpbGQnOiB0cnVlLFxuICAgICAgICAnY2hpbGQnOiBudWxsLFxuICAgICAgICAnaW50cm9kdWN0aW9uJzogJ+S4u+imgeWMheaLrOeZu+W9leW4kOWPt+euoeeQhu+8jOawtOWPuOeuoeeQhu+8jOaKpeihqOe7keWumu+8jOaJk+WNsOe7keWumu+8jOefreS/oeaooeadv++8jOWFrOS8l+WPt+mFjee9ruetieWKn+iDvScsXG4gICAgICAgICdzeXNfdHlwZSc6ICdzeXMnXG4gICAgfV07XG4qL1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgfVxuXG59XG4iXX0=