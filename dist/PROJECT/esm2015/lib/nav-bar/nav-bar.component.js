/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Router } from '@angular/router';
export class NavBarComponent {
    /**
     * @param {?} router
     */
    constructor(router) {
        this.router = router;
        this.ecpStyle = {};
        this.menuList = [];
        this.goTo = new EventEmitter();
        this.menuStatus = 'off';
        this.hoverId = 0;
        this.selectId = 0;
        this.thisMenuId = 0;
        this.hisHover = 0;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.customScaling == null) {
            this.customScaling = true;
        }
    }
    /**
     * @param {?} id
     * @return {?}
     */
    hoverMenu(id) {
        if (this.hoverId === id) {
            this.hoverId = null;
        }
        else {
            this.hoverId = id;
        }
    }
    /**
     * @param {?} id
     * @return {?}
     */
    selectMenu(id) {
        this.selectId = id;
    }
    /**
     * @return {?}
     */
    cleanSel() {
        this.selectId = null;
    }
    /**
     * @return {?}
     */
    on() {
        /** @type {?} */
        const self = this;
        if (self.menuStatus === 'off') {
            self.hoverId = self.hisHover;
            self.menuStatus = 'on';
        }
    }
    /**
     * @return {?}
     */
    off() {
        /** @type {?} */
        const self = this;
        self.hisHover = self.hoverId;
        if (self.customScaling == true) {
            this.menuStatus = 'off';
        }
    }
    /**
     * @param {?} i
     * @return {?}
     */
    showChildMenu(i) {
        if (i === this.hoverId && this.menuStatus === 'on') {
            return 'block';
        }
        else {
            return 'none';
        }
    }
    /**
     * @param {?} uri
     * @param {?} hoverId
     * @return {?}
     */
    selectedApp(uri, hoverId) {
        /** @type {?} */
        const self = this;
        this.goTo.emit(uri);
        if (hoverId == null || hoverId == '') {
            self.thisMenuId = 0;
        }
        self.thisMenuId = hoverId;
        // console.log('click');
        // self.router.navigate([uri]);
        return false;
    }
}
NavBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'ecp-nav-bar',
                template: "<nav class=\"main-menu\" [ngClass]=\"{'on':!customScaling}\" [ngStyle]=\"ecpStyle\" (mouseleave)=\"off()\" (mouseover)=\"on()\">\r\n    <!--\u5DE6\u8FB9\u56FE\u6807-->\r\n    <ul class=\"menu-body\">\r\n        <ng-container *ngFor=\"let menu of menuList;let i=index;\">\r\n            <li [ngClass]=\"{'select':i==selectId,'hover':i==hoverId}\">\r\n                <div class=\"menu-title\" [ngClass]=\"{'select':i==selectId,'hover':i==hoverId}\"\r\n                     (click)=\"hoverMenu(i);selectedApp(menu.uri,i)\" (mouseover)=\"selectMenu(i)\"\r\n                     (mouseout)=\"cleanSel()\">\r\n                    <i class=\"icon dongxiniotwater {{menu.iconuri}}\"></i>{{menu.name}}\r\n                    <i class=\"right icon dongxiniotwater\"\r\n                       [ngClass]=\"{'general_fold':hoverId==i,'general_unfold':hoverId!=i||hoverId==null}\"\r\n                       *ngIf=\"menu.havechild==true\"></i>\r\n                </div>\r\n                <ul *ngIf=\"menu.havechild==true\" class=\"menu-sub\" [@displayState]=\"showChildMenu(i)\">\r\n                    <ng-container *ngFor=\"let childmenu of menu.child; let childId = index;\">\r\n                        <li class=\"hover\" (click)=\"selectedApp(childmenu.uri,childId)\"\r\n                            [ngClass]=\"{'hover':childId==thisMenuId}\" (mouseover)=\"selectMenu(i)\"\r\n                            (mouseout)=\"cleanSel()\">\r\n                            {{childmenu.name}}\r\n                        </li>\r\n                    </ng-container>\r\n                </ul>\r\n            </li>\r\n        </ng-container>\r\n    </ul>\r\n</nav>\r\n\r\n\r\n\r\n\r\n\r\n",
                animations: [
                    trigger('displayState', [
                        state('none', style({
                            height: 0, display: 'none', opacity: '0',
                        })),
                        state('block', style({
                            height: '*', display: 'block', opacity: '1',
                        })),
                        transition('none => block', animate('100ms linear')),
                        transition('block => none', animate('100ms linear'))
                    ])
                ],
                styles: [".main-menu.hover,.main-menu.on,.main-menu:hover{width:220px;overflow:hidden;opacity:1}.main-menu.off{width:60px;overflow:hidden;opacity:1}.main-menu{background:#22272e;color:#fff;position:absolute;top:0;bottom:0;left:0;width:60px;overflow:hidden;transition:width .2s linear;-webkit-transform:translateZ(0) scale(1,1);opacity:1;z-index:1000}.main-menu>ul{margin:0}.main-menu li{position:relative;display:block;width:220px}nav{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none}nav li,nav ul{outline:0;margin:0;padding:0}.main-menu .menu-body{height:100%}.main-menu .menu-body li{width:220px;min-height:42px;line-height:42px;clear:both;text-align:center}.main-menu .menu-body li .menu-title{height:42px;line-height:42px;text-align:left;cursor:pointer;color:#999;font-weight:700}.main-menu .menu-body li .menu-title i{width:60px;float:left;text-align:center;margin-right:0;font-size:18px;font-weight:400}.main-menu .menu-body li .menu-title i.right{margin-top:0;width:13px;height:13px;float:right;margin-right:15px;font-size:12px;font-weight:400}.main-menu .menu-body li .menu-title i.on{margin-top:16px;width:13px;height:13px;float:right;margin-right:15px;font-size:12px;font-weight:400}.main-menu .menu-body li .menu-title.select{background:#1979ff;color:#fff}.main-menu .menu-body li .menu-title.hover{background:#1e5bd6;color:#fff}.menu-sub{background:#181b1f}.menu-sub li{height:42px;line-height:42px;color:#999;cursor:pointer;text-align:left!important;padding-left:60px}.menu-sub li:hover{background:#111214;color:#fff}.menu-sub li.hover{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAAAdElEQVQY04XOwQnCQBQE0JetwApyE2Er2ALEJtKIkHtII3tNAWIBVhAC3raCgA14cA8qER/MZT58poG2m/cYcfRyxbnkeG/abj7ghp1PK1LAsHFUuyG8vd1yCv4IddAvl4C+Dvq2og8lxwUJEx41E1LJcXkCWCIYS4tT67sAAAAASUVORK5CYII=) 25px center no-repeat #111214;color:#fff}"]
            }] }
];
/** @nocollapse */
NavBarComponent.ctorParameters = () => [
    { type: Router }
];
NavBarComponent.propDecorators = {
    customScaling: [{ type: Input }],
    ecpStyle: [{ type: Input }],
    menuList: [{ type: Input }],
    goTo: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    NavBarComponent.prototype.customScaling;
    /** @type {?} */
    NavBarComponent.prototype.ecpStyle;
    /** @type {?} */
    NavBarComponent.prototype.menuList;
    /** @type {?} */
    NavBarComponent.prototype.goTo;
    /** @type {?} */
    NavBarComponent.prototype.menuStatus;
    /** @type {?} */
    NavBarComponent.prototype.hoverId;
    /** @type {?} */
    NavBarComponent.prototype.selectId;
    /** @type {?} */
    NavBarComponent.prototype.thisMenuId;
    /** @type {?} */
    NavBarComponent.prototype.hisHover;
    /** @type {?} */
    NavBarComponent.prototype.router;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9lY3AtYW50LXVpLyIsInNvdXJjZXMiOlsibGliL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBLE9BQU8sRUFBQyxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDN0UsT0FBTyxFQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUMvRSxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFtQnZDLE1BQU07Ozs7SUFzUEosWUFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7d0JBcFBOLEVBQUU7d0JBQ0UsRUFBRTtvQkFDakIsSUFBSSxZQUFZLEVBQUU7MEJBQ3RCLEtBQUs7dUJBQ1IsQ0FBQzt3QkFDQSxDQUFDOzBCQUNDLENBQUM7d0JBQ0gsQ0FBQztLQThPWDs7OztJQUVELFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxFQUFFO1lBQzlCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1NBQzNCO0tBQ0Y7Ozs7O0lBR0QsU0FBUyxDQUFDLEVBQUU7UUFDVixJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssRUFBRSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1NBQ3JCO2FBQU07WUFDTCxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztTQUNuQjtLQUNGOzs7OztJQUdELFVBQVUsQ0FBQyxFQUFFO1FBQ1gsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7S0FFcEI7Ozs7SUFHRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7S0FDdEI7Ozs7SUFHRCxFQUFFOztRQUNBLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssS0FBSyxFQUFFO1lBQzdCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUU3QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztTQUV4QjtLQUNGOzs7O0lBR0QsR0FBRzs7UUFDRCxNQUFNLElBQUksR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzdCLElBQUksSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLEVBQUU7WUFDOUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7U0FDekI7S0FDRjs7Ozs7SUFFRCxhQUFhLENBQUMsQ0FBQztRQUNiLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxJQUFJLEVBQUU7WUFDbEQsT0FBTyxPQUFPLENBQUM7U0FDaEI7YUFBTTtZQUNMLE9BQU8sTUFBTSxDQUFDO1NBQ2Y7S0FDRjs7Ozs7O0lBR0QsV0FBVyxDQUFDLEdBQUcsRUFBRSxPQUFPOztRQUN0QixNQUFNLElBQUksR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEIsSUFBSSxPQUFPLElBQUksSUFBSSxJQUFJLE9BQU8sSUFBSSxFQUFFLEVBQUU7WUFDcEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7U0FDckI7UUFDRCxJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQzs7O1FBRzFCLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7OztZQTNVRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLDRvREFBdUM7Z0JBRXZDLFVBQVUsRUFBRTtvQkFDVixPQUFPLENBQUMsY0FBYyxFQUFFO3dCQUN0QixLQUFLLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQzs0QkFDbEIsTUFBTSxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHO3lCQUN6QyxDQUFDLENBQUM7d0JBQ0gsS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUM7NEJBQ25CLE1BQU0sRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsR0FBRzt5QkFDNUMsQ0FBQyxDQUFDO3dCQUNILFVBQVUsQ0FBQyxlQUFlLEVBQUUsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO3dCQUNwRCxVQUFVLENBQUMsZUFBZSxFQUFFLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztxQkFDckQsQ0FBQztpQkFDSDs7YUFDRjs7OztZQWxCTyxNQUFNOzs7NEJBb0JYLEtBQUs7dUJBQ0wsS0FBSzt1QkFDTCxLQUFLO21CQUNMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gICDlt6bovrnlr7zoiKogJ2VjcC1uYXYtYmFyJyB2MS4yXHJcbiovXHJcbmltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7YW5pbWF0ZSwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2VjcC1uYXYtYmFyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbmF2LWJhci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbmF2LWJhci5jb21wb25lbnQuY3NzJ10sXHJcbiAgYW5pbWF0aW9uczogW1xyXG4gICAgdHJpZ2dlcignZGlzcGxheVN0YXRlJywgW1xyXG4gICAgICBzdGF0ZSgnbm9uZScsIHN0eWxlKHtcclxuICAgICAgICBoZWlnaHQ6IDAsIGRpc3BsYXk6ICdub25lJywgb3BhY2l0eTogJzAnLFxyXG4gICAgICB9KSksXHJcbiAgICAgIHN0YXRlKCdibG9jaycsIHN0eWxlKHtcclxuICAgICAgICBoZWlnaHQ6ICcqJywgZGlzcGxheTogJ2Jsb2NrJywgb3BhY2l0eTogJzEnLFxyXG4gICAgICB9KSksXHJcbiAgICAgIHRyYW5zaXRpb24oJ25vbmUgPT4gYmxvY2snLCBhbmltYXRlKCcxMDBtcyBsaW5lYXInKSksXHJcbiAgICAgIHRyYW5zaXRpb24oJ2Jsb2NrID0+IG5vbmUnLCBhbmltYXRlKCcxMDBtcyBsaW5lYXInKSlcclxuICAgIF0pXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmF2QmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBjdXN0b21TY2FsaW5nOiBib29sZWFuOyAvLyDoh6rlrprkuYnkvLjnvKksdHJ1ZSDlj6/ku6XnvKnmlL7vvIxmYWxzZSDnpoHmraLnvKnmlL5cclxuICBASW5wdXQoKSBlY3BTdHlsZTogb2JqZWN0ID0ge307XHJcbiAgQElucHV0KCkgbWVudUxpc3Q6IEFycmF5PGFueT4gPSBbXTtcclxuICBAT3V0cHV0KCkgZ29UbyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBtZW51U3RhdHVzID0gJ29mZic7XHJcbiAgaG92ZXJJZCA9IDA7IC8vIOW9k+WJjeW3sumAieS4rVxyXG4gIHNlbGVjdElkID0gMDsgLy8g5b2T5YmN6byg5qCH6YCJ5LitXHJcbiAgdGhpc01lbnVJZCA9IDA7IC8vIOW9k+WJjemAieS4reWtkOiPnOWNlVxyXG4gIGhpc0hvdmVyID0gMDsgLy8g5Y6G5Y+y6YCJ5Lit6I+c5Y2VLOaUtue8qeaXtuiusOW9le+8jOWxleW8gOaXtuS9v+eUqFxyXG5cclxuXHJcbiAgLypcclxuXHJcbiAgICBtZW51czogQXJyYXk8YW55PiA9IFtcclxuICAgICAge1xyXG4gICAgICAgICduYW1lJzogJ+WfuuacrOe7hOS7ticsXHJcbiAgICAgICAgJ3VyaSc6ICcnLFxyXG4gICAgICAgICdpY29udXJpJzogJ3BpcGVfYXJlYScsXHJcbiAgICAgICAgJ2NoaWxkJzogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICAnbmFtZSc6ICflt6bovrnlr7zoiKonLFxyXG4gICAgICAgICAgICAndXJpJzogJ25hdkJhclBhZ2UnLFxyXG4gICAgICAgICAgICAnaWNvbnVyaSc6ICcnLFxyXG4gICAgICAgICAgICAnY2hpbGQnOiBudWxsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICAnbmFtZSc6ICfpobbpg6jlr7zoiKonLFxyXG4gICAgICAgICAgICAndXJpJzogJ3RvcE5hdlBhZ2UnLFxyXG4gICAgICAgICAgICAnaWNvbnVyaSc6ICcnLFxyXG4gICAgICAgICAgICAnY2hpbGQnOiBudWxsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICAnbmFtZSc6ICfpobXpnaLlt6bovrnlr7zoiKonLFxyXG4gICAgICAgICAgICAndXJpJzogJ3BhZ2VMZWZ0TmF2UGFnZScsXHJcbiAgICAgICAgICAgICdpY29udXJpJzogJycsXHJcbiAgICAgICAgICAgICdjaGlsZCc6IG51bGxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgICduYW1lJzogJ+W8gOWFs+WIh+aNoicsXHJcbiAgICAgICAgICAgICd1cmknOiAnc3dpdGNoUGFnZScsXHJcbiAgICAgICAgICAgICdpY29udXJpJzogJycsXHJcbiAgICAgICAgICAgICdjaGlsZCc6IG51bGxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgICduYW1lJzogJ+mdouWMheWxkScsXHJcbiAgICAgICAgICAgICd1cmknOiAnYnJlYWRDcnVtYlBhZ2UnLFxyXG4gICAgICAgICAgICAnaWNvbnVyaSc6ICcnLFxyXG4gICAgICAgICAgICAnY2hpbGQnOiBudWxsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICAnbmFtZSc6ICfmraXpqqTmnaEnLFxyXG4gICAgICAgICAgICAndXJpJzogJ3N0ZXBzSW5mbycsXHJcbiAgICAgICAgICAgICdpY29udXJpJzogJycsXHJcbiAgICAgICAgICAgICdjaGlsZCc6IG51bGxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgICduYW1lJzogJ+W3peWFt+adoScsXHJcbiAgICAgICAgICAgICd1cmknOiAndG9vbEJhclBhZ2UnLFxyXG4gICAgICAgICAgICAnaWNvbnVyaSc6ICcnLFxyXG4gICAgICAgICAgICAnY2hpbGQnOiBudWxsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAsXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgICduYW1lJzogJ+aQnOe0ouaooeWdlycsXHJcbiAgICAgICAgICAgICd1cmknOiAnc2VhY2hNb2R1bGVQYWdlJyxcclxuICAgICAgICAgICAgJ2ljb251cmknOiAnJyxcclxuICAgICAgICAgICAgJ2NoaWxkJzogbnVsbFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICAnbmFtZSc6ICflvLnlh7ror6bmg4UnLFxyXG4gICAgICAgICAgICAndXJpJzogJ29wZW5EZXRhaWxzSW5mbycsXHJcbiAgICAgICAgICAgICdpY29udXJpJzogJycsXHJcbiAgICAgICAgICAgICdjaGlsZCc6IG51bGxcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgJ25hbWUnOiAn5by55Ye66K+m5oOFMicsXHJcbiAgICAgICAgICAgICd1cmknOiAnb3BlbkRldGFpbHNJbmZvMicsXHJcbiAgICAgICAgICAgICdpY29udXJpJzogJycsXHJcbiAgICAgICAgICAgICdjaGlsZCc6IG51bGxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgICduYW1lJzogJ+WcsOWbvueUqOe7hOS7ticsXHJcbiAgICAgICAgICAgICd1cmknOiAnZG90UmlwcGxlUGFnZScsXHJcbiAgICAgICAgICAgICdpY29udXJpJzogJycsXHJcbiAgICAgICAgICAgICdjaGlsZCc6IG51bGxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgICduYW1lJzogJ+S+p+i+ueagj+W8ueWHuicsXHJcbiAgICAgICAgICAgICd1cmknOiAncG9wdXBTaWRlYmFyUGFnZScsXHJcbiAgICAgICAgICAgICdpY29udXJpJzogJycsXHJcbiAgICAgICAgICAgICdjaGlsZCc6IG51bGxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgICduYW1lJzogJ+agh+etvumhtScsXHJcbiAgICAgICAgICAgICd1cmknOiAndGFic1BhZ2UnLFxyXG4gICAgICAgICAgICAnaWNvbnVyaSc6ICcnLFxyXG4gICAgICAgICAgICAnY2hpbGQnOiBudWxsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICAnbmFtZSc6ICfnirbmgIHmnaEnLFxyXG4gICAgICAgICAgICAndXJpJzogJ3N0YXR1c0JhclBhZ2UnLFxyXG4gICAgICAgICAgICAnaWNvbnVyaSc6ICcnLFxyXG4gICAgICAgICAgICAnY2hpbGQnOiBudWxsXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgIF1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgICduYW1lJzogJ+W4g+WxgOe7hOS7ticsXHJcbiAgICAgICAgJ3VyaSc6ICcnLFxyXG4gICAgICAgICdpY29udXJpJzogJ3BpcGVfYXJlYScsXHJcbiAgICAgICAgJ2NoaWxkJzogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICAnbmFtZSc6ICfluIPlsYDmvJTnpLonLFxyXG4gICAgICAgICAgICAndXJpJzogJ2xheW91dERlbW9QYWdlJyxcclxuICAgICAgICAgICAgJ2ljb251cmknOiAnJyxcclxuICAgICAgICAgICAgJ2NoaWxkJzogbnVsbFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgJ25hbWUnOiAn5LiK5Lit5LiLJyxcclxuICAgICAgICAgICAgJ3VyaSc6ICdmbGV4VG9wQ2VudGVyQm90dG9tJyxcclxuICAgICAgICAgICAgJ2ljb251cmknOiAnJyxcclxuICAgICAgICAgICAgJ2NoaWxkJzogbnVsbFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgJ25hbWUnOiAn5bem5Lit5Y+zJyxcclxuICAgICAgICAgICAgJ3VyaSc6ICdmbGV4bGVmdENlbnRlclJpZ2h0JyxcclxuICAgICAgICAgICAgJ2ljb251cmknOiAnJyxcclxuICAgICAgICAgICAgJ2NoaWxkJzogbnVsbFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgICduYW1lJzogJ+aVsOaNruWxleekuicsXHJcbiAgICAgICAgJ3VyaSc6ICcnLFxyXG4gICAgICAgICdpY29udXJpJzogJ3BpcGVfYXJlYScsXHJcbiAgICAgICAgJ2NoaWxkJzogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICAnbmFtZSc6ICfnmbvlvZXnlYzpnaInLFxyXG4gICAgICAgICAgICAndXJpJzogJ2xvZ2luUGFnZScsXHJcbiAgICAgICAgICAgICdpY29udXJpJzogJycsXHJcbiAgICAgICAgICAgICdjaGlsZCc6IG51bGxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgICduYW1lJzogJ+ezu+e7n+WIh+aNoicsXHJcbiAgICAgICAgICAgICd1cmknOiAnaG9tZVBhZ2UnLFxyXG4gICAgICAgICAgICAnaWNvbnVyaSc6ICcnLFxyXG4gICAgICAgICAgICAnY2hpbGQnOiBudWxsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICAnbmFtZSc6ICfpobXpnaLmvJTnpLoxJyxcclxuICAgICAgICAgICAgJ3VyaSc6ICdwYWdlRGVtbycsXHJcbiAgICAgICAgICAgICdpY29udXJpJzogJycsXHJcbiAgICAgICAgICAgICdjaGlsZCc6IG51bGxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgICduYW1lJzogJ+mhtemdoua8lOekujMnLFxyXG4gICAgICAgICAgICAndXJpJzogJ3BhZ2VEZW1vMycsXHJcbiAgICAgICAgICAgICdpY29udXJpJzogJycsXHJcbiAgICAgICAgICAgICdjaGlsZCc6IG51bGxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgICduYW1lJzogJ+mhtemdoua8lOekujInLFxyXG4gICAgICAgICAgICAndXJpJzogJ2RldGFpbHNTdHlsZTEnLFxyXG4gICAgICAgICAgICAnaWNvbnVyaSc6ICcnLFxyXG4gICAgICAgICAgICAnY2hpbGQnOiBudWxsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICAnbmFtZSc6ICfooajmoLzlsZXnpLoxJyxcclxuICAgICAgICAgICAgJ3VyaSc6ICdkYXRhRGVtb1BhZ2UnLFxyXG4gICAgICAgICAgICAnaWNvbnVyaSc6ICcnLFxyXG4gICAgICAgICAgICAnY2hpbGQnOiBudWxsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICAnbmFtZSc6ICfooajmoLzlsZXnpLonLFxyXG4gICAgICAgICAgICAndXJpJzogJ3RhYmxlUGFnZScsXHJcbiAgICAgICAgICAgICdpY29udXJpJzogJycsXHJcbiAgICAgICAgICAgICdjaGlsZCc6IG51bGxcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgJ25hbWUnOiAn5Zu+5qCH5ryU56S6JyxcclxuICAgICAgICAgICAgJ3VyaSc6ICdpY29uUGFnZScsXHJcbiAgICAgICAgICAgICdpY29udXJpJzogJycsXHJcbiAgICAgICAgICAgICdjaGlsZCc6IG51bGxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgICduYW1lJzogJ+agh+etvumhte+8iOS8oOmAkuaooeadv++8iScsXHJcbiAgICAgICAgICAgICd1cmknOiAnZWNwVGFic2V0JyxcclxuICAgICAgICAgICAgJ2ljb251cmknOiAnJyxcclxuICAgICAgICAgICAgJ2NoaWxkJzogbnVsbFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgJ25hbWUnOiAnNDA0LzUwMOmhtemdoicsXHJcbiAgICAgICAgICAgICd1cmknOiAnaHR0cFBhZ2UnLFxyXG4gICAgICAgICAgICAnaWNvbnVyaSc6ICcnLFxyXG4gICAgICAgICAgICAnY2hpbGQnOiBudWxsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAsXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgICduYW1lJzogJ+eUn+aIkOW4kOWNlScsXHJcbiAgICAgICAgICAgICd1cmknOiAnZ2VuZXJhdGVCaWxsUGFnZScsXHJcbiAgICAgICAgICAgICdpY29udXJpJzogJycsXHJcbiAgICAgICAgICAgICdjaGlsZCc6IG51bGxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgICduYW1lJzogJ+W8ueeql+a8lOekuicsXHJcbiAgICAgICAgICAgICd1cmknOiAnd2F0ZXJDb25zdW1wdGlvbkFuYWx5c2lzUG9wdXAnLFxyXG4gICAgICAgICAgICAnaWNvbnVyaSc6ICcnLFxyXG4gICAgICAgICAgICAnY2hpbGQnOiBudWxsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAsXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgICduYW1lJzogJ+e7hOS7tuiBlOWKqCcsXHJcbiAgICAgICAgICAgICd1cmknOiAncGFnZURlbW8yJyxcclxuICAgICAgICAgICAgJ2ljb251cmknOiAnJyxcclxuICAgICAgICAgICAgJ2NoaWxkJzogbnVsbFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgJ25hbWUnOiAn6LCD5bqm5Lit5b+DJyxcclxuICAgICAgICAgICAgJ3VyaSc6ICdkaXNwYXRjaFBhZ2UnLFxyXG4gICAgICAgICAgICAnaWNvbnVyaSc6ICcnLFxyXG4gICAgICAgICAgICAnY2hpbGQnOiBudWxsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAsXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgICduYW1lJzogJ+aOp+WItuWPsOS4u+mhtScsXHJcbiAgICAgICAgICAgICd1cmknOiAnY29uc29sZVBhZ2UnLFxyXG4gICAgICAgICAgICAnaWNvbnVyaSc6ICcnLFxyXG4gICAgICAgICAgICAnY2hpbGQnOiBudWxsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgJ25hbWUnOiAn5YWz5LqOJyxcclxuICAgICAgICAndXJpJzogJ2Fib3V0JyxcclxuICAgICAgICAnaWNvbnVyaSc6ICdwaXBlX3JlcG9ydCcsXHJcbiAgICAgICAgJ2NoaWxkJzogW11cclxuICAgICAgfVxyXG4gICAgXTtcclxuXHJcbiAgKi9cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBpZiAodGhpcy5jdXN0b21TY2FsaW5nID09IG51bGwpIHtcclxuICAgICAgdGhpcy5jdXN0b21TY2FsaW5nID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIOiPnOWNlemAieS4rVxyXG4gIGhvdmVyTWVudShpZCkge1xyXG4gICAgaWYgKHRoaXMuaG92ZXJJZCA9PT0gaWQpIHtcclxuICAgICAgdGhpcy5ob3ZlcklkID0gbnVsbDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaG92ZXJJZCA9IGlkO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g56e75LiK5Y6755qEXHJcbiAgc2VsZWN0TWVudShpZCkge1xyXG4gICAgdGhpcy5zZWxlY3RJZCA9IGlkO1xyXG5cclxuICB9XHJcblxyXG4gIC8vIOa4hemZpOmAieS4rVxyXG4gIGNsZWFuU2VsKCkge1xyXG4gICAgdGhpcy5zZWxlY3RJZCA9IG51bGw7XHJcbiAgfVxyXG5cclxuICAvLyDlsZXlvIBcclxuICBvbigpIHtcclxuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgaWYgKHNlbGYubWVudVN0YXR1cyA9PT0gJ29mZicpIHtcclxuICAgICAgc2VsZi5ob3ZlcklkID0gc2VsZi5oaXNIb3ZlcjtcclxuXHJcbiAgICAgIHNlbGYubWVudVN0YXR1cyA9ICdvbic7XHJcblxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g5pS257ypXHJcbiAgb2ZmKCkge1xyXG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICBzZWxmLmhpc0hvdmVyID0gc2VsZi5ob3ZlcklkO1xyXG4gICAgaWYgKHNlbGYuY3VzdG9tU2NhbGluZyA9PSB0cnVlKSB7XHJcbiAgICAgIHRoaXMubWVudVN0YXR1cyA9ICdvZmYnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2hvd0NoaWxkTWVudShpKSB7XHJcbiAgICBpZiAoaSA9PT0gdGhpcy5ob3ZlcklkICYmIHRoaXMubWVudVN0YXR1cyA9PT0gJ29uJykge1xyXG4gICAgICByZXR1cm4gJ2Jsb2NrJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAnbm9uZSc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgc2VsZWN0ZWRBcHAodXJpLCBob3ZlcklkKSB7XHJcbiAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgIHRoaXMuZ29Uby5lbWl0KHVyaSk7XHJcbiAgICBpZiAoaG92ZXJJZCA9PSBudWxsIHx8IGhvdmVySWQgPT0gJycpIHtcclxuICAgICAgc2VsZi50aGlzTWVudUlkID0gMDtcclxuICAgIH1cclxuICAgIHNlbGYudGhpc01lbnVJZCA9IGhvdmVySWQ7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnY2xpY2snKTtcclxuICAgIC8vIHNlbGYucm91dGVyLm5hdmlnYXRlKFt1cmldKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG5cclxufVxyXG4iXX0=