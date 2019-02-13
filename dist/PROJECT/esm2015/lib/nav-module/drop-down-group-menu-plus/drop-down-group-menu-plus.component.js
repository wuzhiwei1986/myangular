/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
export class DropDownGroupMenuPlusComponent {
    constructor() {
        this.changeOpen = false;
        this.currentSys = '切换系统';
        this.navHomeUrl = new EventEmitter();
        this.navUrl = new EventEmitter();
        this.menuMap = {};
        this.desk = [];
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
        /** @type {?} */
        const self = this;
        for (let i = 0; i < self.menusList.length; i++) {
            if (!self.menuMap[self.menusList[i].systype]) {
                self.desk[self.menusList[i].systype] = [];
                self.desk[self.menusList[i].systype].push(self.menusList[i]);
                //console.log(self.desk['sys']);
                self.menuMap[self.menusList[i].systype] = self.menusList[i];
            }
            else {
                self.desk[self.menusList[i].systype].push(self.menusList[i]);
            }
        }
        // console.log(JSON.stringify(self.desk));
        //console.log(self.desk);
    }
}
DropDownGroupMenuPlusComponent.decorators = [
    { type: Component, args: [{
                selector: 'ecp-drop-down-group-menu-plus',
                template: "<span class=\"change-sys\" style=\"float: right\" (mouseleave)=\"changeOpen=false\">\n        <div class=\"title \" [ngClass]=\"{'bg':changeOpen}\" (mouseover)=\"changeOpen=true\">{{currentSys}}</div>\n        <ul style=\"display: none\" [@displayState]=\"changeOpen == true? 'block' : 'none'\">\n             <li class=\"item\" (click)=\"navHome()\"><div class=\"index\"><i class=\"icon dongxiniotwater revenue_home\"></i>\u7CFB\u7EDF\u4E3B\u9875</div></li>\n             <li class=\"item\" *ngIf=\"desk['sys']\">\n                 <span class=\"item-title\">\u4EA7\u54C1</span>\n                 <ol>\n                     <ng-container *ngFor=\"let menu of menusList;let i=index\">\n                        <li (click)=\"navSub(menu)\" *ngIf=\"menu.systype=='sys'\"><i class=\"icon dongxiniotwater {{menu.iconuri}}\"></i>{{menu.name}}</li>\n                     </ng-container>\n                 </ol>\n             </li>\n              <li class=\"item\" *ngIf=\"desk['tool']\">\n                 <span class=\"item-title\">\u5DE5\u5177</span>\n                 <ol>\n                     <ng-container *ngFor=\"let menu of menusList;let i=index\">\n                        <li (click)=\"navSub(menu)\" *ngIf=\"menu.systype=='tool'\"><i class=\"icon dongxiniotwater {{menu.iconuri}}\"></i>{{menu.name}}</li>\n                     </ng-container>\n                 </ol>\n             </li>\n        </ul>\n  <!--\n            <li class=\"index\" (click)=\"navHome()\">\u7CFB\u7EDF\u4E3B\u9875</li>\n            <li class=\"{{menu.iconuri}}\" *ngFor=\"let menu of menusList;let i=index\"\n                (click)=\"navSub(menu)\">{{menu.name}}</li>\n      -->\n</span>\n",
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
DropDownGroupMenuPlusComponent.ctorParameters = () => [];
DropDownGroupMenuPlusComponent.propDecorators = {
    menusList: [{ type: Input }],
    currentSys: [{ type: Input }],
    navHomeUrl: [{ type: Output }],
    navUrl: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    DropDownGroupMenuPlusComponent.prototype.changeOpen;
    /** @type {?} */
    DropDownGroupMenuPlusComponent.prototype.menusList;
    /** @type {?} */
    DropDownGroupMenuPlusComponent.prototype.currentSys;
    /** @type {?} */
    DropDownGroupMenuPlusComponent.prototype.navHomeUrl;
    /** @type {?} */
    DropDownGroupMenuPlusComponent.prototype.navUrl;
    /** @type {?} */
    DropDownGroupMenuPlusComponent.prototype.menuMap;
    /** @type {?} */
    DropDownGroupMenuPlusComponent.prototype.desk;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcC1kb3duLWdyb3VwLW1lbnUtcGx1cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9lY3AtYW50LXVpLyIsInNvdXJjZXMiOlsibGliL25hdi1tb2R1bGUvZHJvcC1kb3duLWdyb3VwLW1lbnUtcGx1cy9kcm9wLWRvd24tZ3JvdXAtbWVudS1wbHVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBbUIvRSxNQUFNO0lBb0JGOzBCQW5Cc0IsS0FBSzswQkFFTCxNQUFNOzBCQUNMLElBQUksWUFBWSxFQUFFO3NCQUN0QixJQUFJLFlBQVksRUFBRTt1QkFFM0IsRUFBRTtvQkFFTCxFQUFFO0tBWVI7Ozs7SUFURCxPQUFPO1FBQ0gsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUMxQjs7Ozs7SUFFRCxNQUFNLENBQUMsRUFBRTtRQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ3hCOzs7O0lBS0QsUUFBUTs7UUFDSixNQUFNLElBQUksR0FBRyxJQUFJLENBQUM7UUFDbEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBRTVDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBRTFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBQzFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQ3JDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQ3BCLENBQUM7O2dCQUVGLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQy9EO2lCQUFNO2dCQUNILElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQ3JDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQ3BCLENBQUM7YUFDTDtTQUVKOzs7S0FHSjs7O1lBN0RKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsK0JBQStCO2dCQUN6QyxxcERBQXlEO2dCQUV6RCxVQUFVLEVBQUU7b0JBQ1IsT0FBTyxDQUFDLGNBQWMsRUFBRTt3QkFDcEIsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUM7NEJBQ2hCLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUc7eUJBQ2hDLENBQUMsQ0FBQzt3QkFDSCxLQUFLLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQzs0QkFDakIsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsR0FBRzt5QkFDakMsQ0FBQyxDQUFDO3dCQUNILFVBQVUsQ0FBQyxlQUFlLEVBQUUsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO3dCQUNwRCxVQUFVLENBQUMsZUFBZSxFQUFFLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztxQkFDdEQsQ0FBQztpQkFDTDs7YUFDSjs7Ozs7d0JBR0ksS0FBSzt5QkFDTCxLQUFLO3lCQUNMLE1BQU07cUJBQ04sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge2FuaW1hdGUsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlcn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZWNwLWRyb3AtZG93bi1ncm91cC1tZW51LXBsdXMnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9kcm9wLWRvd24tZ3JvdXAtbWVudS1wbHVzLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9kcm9wLWRvd24tZ3JvdXAtbWVudS1wbHVzLmNvbXBvbmVudC5jc3MnXSxcbiAgICBhbmltYXRpb25zOiBbXG4gICAgICAgIHRyaWdnZXIoJ2Rpc3BsYXlTdGF0ZScsIFtcbiAgICAgICAgICAgIHN0YXRlKCdub25lJywgc3R5bGUoe1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdub25lJywgb3BhY2l0eTogJzAnLFxuICAgICAgICAgICAgfSkpLFxuICAgICAgICAgICAgc3RhdGUoJ2Jsb2NrJywgc3R5bGUoe1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsIG9wYWNpdHk6ICcxJyxcbiAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJ25vbmUgPT4gYmxvY2snLCBhbmltYXRlKCcxMDBtcyBsaW5lYXInKSksXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCdibG9jayA9PiBub25lJywgYW5pbWF0ZSgnODBtcyBsaW5lYXInKSlcbiAgICAgICAgXSlcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIERyb3BEb3duR3JvdXBNZW51UGx1c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgY2hhbmdlT3BlbjogQm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIG1lbnVzTGlzdDogQXJyYXk8YW55PjtcbiAgICBASW5wdXQoKSBjdXJyZW50U3lzID0gJ+WIh+aNouezu+e7nyc7XG4gICAgQE91dHB1dCgpIG5hdkhvbWVVcmwgPSBuZXcgRXZlbnRFbWl0dGVyKCk7IC8vIOS4u+mhtei3s+i9rFxuICAgIEBPdXRwdXQoKSBuYXZVcmwgPSBuZXcgRXZlbnRFbWl0dGVyKCk7IC8vIOS6jOe6p+i3s+i9rFxuXG4gICAgbWVudU1hcCA9IHt9O1xuXG4gICAgZGVzayA9IFtdO1xuXG5cbiAgICBuYXZIb21lKCkge1xuICAgICAgICB0aGlzLm5hdkhvbWVVcmwuZW1pdCgpO1xuICAgIH1cblxuICAgIG5hdlN1YihpZCkge1xuICAgICAgICB0aGlzLm5hdlVybC5lbWl0KGlkKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZi5tZW51c0xpc3QubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICAgICAgaWYgKCFzZWxmLm1lbnVNYXBbc2VsZi5tZW51c0xpc3RbaV0uc3lzdHlwZV0pIHtcblxuICAgICAgICAgICAgICAgIHNlbGYuZGVza1tzZWxmLm1lbnVzTGlzdFtpXS5zeXN0eXBlXSA9IFtdO1xuICAgICAgICAgICAgICAgIHNlbGYuZGVza1tzZWxmLm1lbnVzTGlzdFtpXS5zeXN0eXBlXS5wdXNoKFxuICAgICAgICAgICAgICAgICAgICBzZWxmLm1lbnVzTGlzdFtpXVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhzZWxmLmRlc2tbJ3N5cyddKTtcbiAgICAgICAgICAgICAgICBzZWxmLm1lbnVNYXBbc2VsZi5tZW51c0xpc3RbaV0uc3lzdHlwZV0gPSBzZWxmLm1lbnVzTGlzdFtpXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2VsZi5kZXNrW3NlbGYubWVudXNMaXN0W2ldLnN5c3R5cGVdLnB1c2goXG4gICAgICAgICAgICAgICAgICAgIHNlbGYubWVudXNMaXN0W2ldXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHNlbGYuZGVzaykpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKHNlbGYuZGVzayk7XG4gICAgfVxuXG59XG4iXX0=