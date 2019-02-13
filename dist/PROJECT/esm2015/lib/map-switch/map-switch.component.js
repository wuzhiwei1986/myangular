/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class MapSwitchComponent {
    constructor() {
        this.selectId = 0;
    }
    /**
     * @param {?} i
     * @return {?}
     */
    select(i) {
        this.selectId = i;
        //console.log("当前选中" + i + "#######" + this.switchArray[i].name);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
MapSwitchComponent.decorators = [
    { type: Component, args: [{
                selector: 'ecp-switch',
                template: "<div class=\"map-switch\"  [ngStyle]=\"customPosition\">\r\n  <a [ngClass]=\"{'hover':selectId==i}\" *ngFor=\"let item of switchArray; let i = index;\" (click)=\"select(i)\"><i class=\"icon dongxiniotwater {{item.icon}}\"></i>{{item.name}}</a>\r\n</div>\r\n",
                styles: [".map-switch{position:absolute;width:auto;height:36px;line-height:36px;background:#fff;border-radius:4px;box-shadow:0 3px 8px 0 rgba(0,0,0,.3);overflow:hidden}.map-switch a{width:80px;float:left;text-align:center;color:rgba(25,25,25,1)}.map-switch a i{vertical-align:middle;margin-right:6px}.map-switch a.hover,.map-switch a:hover{background:#1e5bd6;color:#fff}"]
            }] }
];
/** @nocollapse */
MapSwitchComponent.ctorParameters = () => [];
MapSwitchComponent.propDecorators = {
    customPosition: [{ type: Input }],
    switchArray: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    MapSwitchComponent.prototype.customPosition;
    /** @type {?} */
    MapSwitchComponent.prototype.switchArray;
    /** @type {?} */
    MapSwitchComponent.prototype.selectId;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLXN3aXRjaC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9lY3AtYW50LXVpLyIsInNvdXJjZXMiOlsibGliL21hcC1zd2l0Y2gvbWFwLXN3aXRjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBT3ZELE1BQU07SUEwQko7d0JBdEJXLENBQUM7S0F1Qlg7Ozs7O0lBTkQsTUFBTSxDQUFDLENBQUM7UUFDTixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQzs7S0FFbkI7Ozs7SUFLRCxRQUFRO0tBQ1A7OztZQW5DRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLDZRQUEwQzs7YUFFM0M7Ozs7OzZCQUdFLEtBQUs7MEJBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZWNwLXN3aXRjaCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL21hcC1zd2l0Y2guY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL21hcC1zd2l0Y2guY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXBTd2l0Y2hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKSBjdXN0b21Qb3NpdGlvbjpvYmplY3Q7XHJcbiAgQElucHV0KCkgc3dpdGNoQXJyYXk6QXJyYXk8YW55PjtcclxuICBzZWxlY3RJZCA9IDA7Ly/lvZPliY3pgInkuK3nmoTpgInpobkuXHJcbi8qXHJcbiAgc3dpdGNoQXJyYXkgPSBbe1xyXG4gICAgXCJuYW1lXCI6IFwi5pON5L2cXCIsXHJcbiAgICBcImljb25cIjogXCJpY29uLW9wZXJhdGlvblwiXHJcbiAgfSwge1xyXG4gICAgXCJuYW1lXCI6IFwi5bGV56S6XCIsXHJcbiAgICBcImljb25cIjogXCJpY29uLWRlbW9uc3RyYXRpb25cIlxyXG4gIH0sIHtcclxuICAgIFwibmFtZVwiOiBcIuWxleekuuS6jFwiLFxyXG4gICAgXCJpY29uXCI6IFwiaWNvbi1kZW1vbnN0cmF0aW9uXCJcclxuICB9LCB7XHJcbiAgICBcIm5hbWVcIjogXCLlsZXnpLrkuIlcIixcclxuICAgIFwiaWNvblwiOiBcImljb24tZGVtb25zdHJhdGlvblwiXHJcbiAgfV07XHJcbiovXHJcblxyXG4gIHNlbGVjdChpKSB7XHJcbiAgICB0aGlzLnNlbGVjdElkID0gaTtcclxuICAgIC8vY29uc29sZS5sb2coXCLlvZPliY3pgInkuK1cIiArIGkgKyBcIiMjIyMjIyNcIiArIHRoaXMuc3dpdGNoQXJyYXlbaV0ubmFtZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbn1cclxuIl19