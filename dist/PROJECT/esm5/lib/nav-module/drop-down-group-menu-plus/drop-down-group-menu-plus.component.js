/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
var DropDownGroupMenuPlusComponent = /** @class */ (function () {
    function DropDownGroupMenuPlusComponent() {
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
    DropDownGroupMenuPlusComponent.prototype.navHome = /**
     * @return {?}
     */
    function () {
        this.navHomeUrl.emit();
    };
    /**
     * @param {?} id
     * @return {?}
     */
    DropDownGroupMenuPlusComponent.prototype.navSub = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        this.navUrl.emit(id);
    };
    /**
     * @return {?}
     */
    DropDownGroupMenuPlusComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var self = this;
        for (var i = 0; i < self.menusList.length; i++) {
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
    };
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
    DropDownGroupMenuPlusComponent.ctorParameters = function () { return []; };
    DropDownGroupMenuPlusComponent.propDecorators = {
        menusList: [{ type: Input }],
        currentSys: [{ type: Input }],
        navHomeUrl: [{ type: Output }],
        navUrl: [{ type: Output }]
    };
    return DropDownGroupMenuPlusComponent;
}());
export { DropDownGroupMenuPlusComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcC1kb3duLWdyb3VwLW1lbnUtcGx1cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9lY3AtYW50LXVpLyIsInNvdXJjZXMiOlsibGliL25hdi1tb2R1bGUvZHJvcC1kb3duLWdyb3VwLW1lbnUtcGx1cy9kcm9wLWRvd24tZ3JvdXAtbWVudS1wbHVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBQyxNQUFNLHFCQUFxQixDQUFDOztJQXVDM0U7MEJBbkJzQixLQUFLOzBCQUVMLE1BQU07MEJBQ0wsSUFBSSxZQUFZLEVBQUU7c0JBQ3RCLElBQUksWUFBWSxFQUFFO3VCQUUzQixFQUFFO29CQUVMLEVBQUU7S0FZUjs7OztJQVRELGdEQUFPOzs7SUFBUDtRQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDMUI7Ozs7O0lBRUQsK0NBQU07Ozs7SUFBTixVQUFPLEVBQUU7UUFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUN4Qjs7OztJQUtELGlEQUFROzs7SUFBUjs7UUFDSSxJQUFNLElBQUksR0FBRyxJQUFJLENBQUM7UUFDbEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBRTVDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBRTFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBQzFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQ3JDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQ3BCLENBQUM7O2dCQUVGLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQy9EO2lCQUFNO2dCQUNILElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQ3JDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQ3BCLENBQUM7YUFDTDtTQUVKOzs7S0FHSjs7Z0JBN0RKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsK0JBQStCO29CQUN6QyxxcERBQXlEO29CQUV6RCxVQUFVLEVBQUU7d0JBQ1IsT0FBTyxDQUFDLGNBQWMsRUFBRTs0QkFDcEIsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUM7Z0NBQ2hCLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUc7NkJBQ2hDLENBQUMsQ0FBQzs0QkFDSCxLQUFLLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQztnQ0FDakIsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsR0FBRzs2QkFDakMsQ0FBQyxDQUFDOzRCQUNILFVBQVUsQ0FBQyxlQUFlLEVBQUUsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDOzRCQUNwRCxVQUFVLENBQUMsZUFBZSxFQUFFLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQzt5QkFDdEQsQ0FBQztxQkFDTDs7aUJBQ0o7Ozs7OzRCQUdJLEtBQUs7NkJBQ0wsS0FBSzs2QkFDTCxNQUFNO3lCQUNOLE1BQU07O3lDQXpCWDs7U0FvQmEsOEJBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7YW5pbWF0ZSwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdlY3AtZHJvcC1kb3duLWdyb3VwLW1lbnUtcGx1cycsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2Ryb3AtZG93bi1ncm91cC1tZW51LXBsdXMuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2Ryb3AtZG93bi1ncm91cC1tZW51LXBsdXMuY29tcG9uZW50LmNzcyddLFxuICAgIGFuaW1hdGlvbnM6IFtcbiAgICAgICAgdHJpZ2dlcignZGlzcGxheVN0YXRlJywgW1xuICAgICAgICAgICAgc3RhdGUoJ25vbmUnLCBzdHlsZSh7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ25vbmUnLCBvcGFjaXR5OiAnMCcsXG4gICAgICAgICAgICB9KSksXG4gICAgICAgICAgICBzdGF0ZSgnYmxvY2snLCBzdHlsZSh7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJywgb3BhY2l0eTogJzEnLFxuICAgICAgICAgICAgfSkpLFxuICAgICAgICAgICAgdHJhbnNpdGlvbignbm9uZSA9PiBibG9jaycsIGFuaW1hdGUoJzEwMG1zIGxpbmVhcicpKSxcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJ2Jsb2NrID0+IG5vbmUnLCBhbmltYXRlKCc4MG1zIGxpbmVhcicpKVxuICAgICAgICBdKVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgRHJvcERvd25Hcm91cE1lbnVQbHVzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBjaGFuZ2VPcGVuOiBCb29sZWFuID0gZmFsc2U7XG4gICAgQElucHV0KCkgbWVudXNMaXN0OiBBcnJheTxhbnk+O1xuICAgIEBJbnB1dCgpIGN1cnJlbnRTeXMgPSAn5YiH5o2i57O757ufJztcbiAgICBAT3V0cHV0KCkgbmF2SG9tZVVybCA9IG5ldyBFdmVudEVtaXR0ZXIoKTsgLy8g5Li76aG16Lez6L2sXG4gICAgQE91dHB1dCgpIG5hdlVybCA9IG5ldyBFdmVudEVtaXR0ZXIoKTsgLy8g5LqM57qn6Lez6L2sXG5cbiAgICBtZW51TWFwID0ge307XG5cbiAgICBkZXNrID0gW107XG5cblxuICAgIG5hdkhvbWUoKSB7XG4gICAgICAgIHRoaXMubmF2SG9tZVVybC5lbWl0KCk7XG4gICAgfVxuXG4gICAgbmF2U3ViKGlkKSB7XG4gICAgICAgIHRoaXMubmF2VXJsLmVtaXQoaWQpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxmLm1lbnVzTGlzdC5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgICAgICBpZiAoIXNlbGYubWVudU1hcFtzZWxmLm1lbnVzTGlzdFtpXS5zeXN0eXBlXSkge1xuXG4gICAgICAgICAgICAgICAgc2VsZi5kZXNrW3NlbGYubWVudXNMaXN0W2ldLnN5c3R5cGVdID0gW107XG4gICAgICAgICAgICAgICAgc2VsZi5kZXNrW3NlbGYubWVudXNMaXN0W2ldLnN5c3R5cGVdLnB1c2goXG4gICAgICAgICAgICAgICAgICAgIHNlbGYubWVudXNMaXN0W2ldXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHNlbGYuZGVza1snc3lzJ10pO1xuICAgICAgICAgICAgICAgIHNlbGYubWVudU1hcFtzZWxmLm1lbnVzTGlzdFtpXS5zeXN0eXBlXSA9IHNlbGYubWVudXNMaXN0W2ldO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZWxmLmRlc2tbc2VsZi5tZW51c0xpc3RbaV0uc3lzdHlwZV0ucHVzaChcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5tZW51c0xpc3RbaV1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoc2VsZi5kZXNrKSk7XG4gICAgICAgIC8vY29uc29sZS5sb2coc2VsZi5kZXNrKTtcbiAgICB9XG5cbn1cbiJdfQ==