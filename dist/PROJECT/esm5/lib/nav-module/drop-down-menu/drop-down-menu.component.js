/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
var DropDownMenuComponent = /** @class */ (function () {
    /*
      menusList: Array<any> = [{
        'menuid': 10000000,
        'parentid': 0,
        'name': '营收系统',
        'uri': null,
        'iconuri': 'menu-1',
        'havechild': true,
        'child': null,
        'introduction': '主要包括营收主页统计信息，用户信息管理，设备管理，抄表管理，缴费管理等功能'
      }, {
        'menuid': 20000000,
        'parentid': 0,
        'name': '管漏管理',
        'uri': null,
        'iconuri': 'menu-2',
        'havechild': true,
        'child': null,
        'introduction': '主要包括管漏系统基本信息统计，管漏用户管理，管漏客户管理，流量计管理等功能'
      }, {
        'menuid': 30000000,
        'parentid': 0,
        'name': '权限管理',
        'uri': null,
        'iconuri': 'menu-3',
        'havechild': true,
        'child': null,
        'introduction': '主要功能包括系统帐号管理，角色权限管理，帐号权限分配等'
      }, {
        'menuid': 40000000,
        'parentid': 0,
        'name': '系统管理',
        'uri': null,
        'iconuri': 'menu-4',
        'havechild': true,
        'child': null,
        'introduction': '主要功能包括短信模板管理，报表模板管理，系统信息配置等'
      }];

     */
    function DropDownMenuComponent() {
        this.changeOpen = false;
        this.currentSys = "切换系统";
        this.navHomeUrl = new EventEmitter();
        this.navUrl = new EventEmitter();
    }
    /**
     * @return {?}
     */
    DropDownMenuComponent.prototype.navHome = /**
     * @return {?}
     */
    function () {
        this.navHomeUrl.emit();
    };
    /**
     * @param {?} id
     * @return {?}
     */
    DropDownMenuComponent.prototype.navSub = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        this.navUrl.emit(id);
    };
    /**
     * @return {?}
     */
    DropDownMenuComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    DropDownMenuComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ecp-drop-down-menu',
                    template: "<span class=\"change-sys\" style=\"float: right\" (mouseleave)=\"changeOpen=false\">\r\n        <div class=\"title \" [ngClass]=\"{'bg':changeOpen}\" (mouseover)=\"changeOpen=true\">{{currentSys}}</div>\r\n        <ul style=\"display: none\" [@displayState]=\"changeOpen == true? 'block' : 'none'\">\r\n          <li class=\"index\" (click)=\"navHome()\">\u7CFB\u7EDF\u4E3B\u9875</li>\r\n          <li class=\"{{menu.iconuri}}\" *ngFor=\"let menu of menusList;let i=index\"\r\n              (click)=\"navSub(menu)\">{{menu.name}}</li></ul>\r\n</span>\r\n",
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
                    styles: [".change-sys{z-index:1000;margin-right:15px;height:32px;line-height:32px;display:block;float:right;position:relative}.change-sys .title{display:inline-block;float:right;color:#fff;height:50px;line-height:50px;text-align:right;padding-left:15px;padding-right:32px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAeCAYAAADOziUSAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAAAcElEQVRIx+3SMQqAMBBE0VkRco806XIWPamdns3qWwVEUaKkUNjppnkMy0qNElOma4VJkmOOOdYOAwKwcJ0FCNXiDVgNxZQ5gvPbRTFl+lLMbAVGSZMkkzSY2frkZv2+7EA9hU7YW6Tkw3/mmGN/wzY9A2lGL1XvVQAAAABJRU5ErkJggg==) right center no-repeat;cursor:pointer}.change-sys .bg{background-color:#22272e}.change-sys ul{position:absolute;right:0;top:51px;background:#fff;width:150px;padding:0;box-shadow:0 0 6px rgba(0,0,0,.4)}.change-sys ul li{list-style:none;color:#22272e;width:150px;height:50px;line-height:50px;text-align:left;display:block;padding-left:45px;cursor:pointer}.change-sys ul li.index{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAXCAYAAAARIY8tAAABuklEQVRIibWTzUrDQBSFz8SmaqlKFdSF0K2C+Aw+gSCKG8Ft/VuJmqBUsYKNIoKg1W4L3YiCb+DajWt3IgqKotXa1th2Ji5MSiZpakL0woXMvWfON8PcEHiJtKYAAGJEttRbATTrqzxihBktwa03SVGFUCYRyiSSogrXo0whlOX07DH3XAGaDioJgTFJYAx6Sk0HlYTRDxa/uPQECOyXZUK1OKEaLBkP7JdlABCL6pVYVGEkt7+RubinyqAs2UCSFPdUFBZalM6lhwEAku2ATjuDu6V5sIbmNUhwt1R4XQzJPTM3bdYmqbejZbswAyDlwtwcs6oUPuqbuhbuM/21KbIBWrfyMQDHHs2NmP5caU+bCxwgtPk+CSADD+NrCQZgqhTvyNoA4Y2cX3MOUliPZGuAtrWXMQAnf2Buhkx8JLrOSPvq8wiAUwDiH5kbUQEwHhCYVgUwoRcHAWz6NFYAXOrfVe6RI8uPwwAufAJGczu958aC+9EIZXa5z+AAAvtnAKGak+4OP5NhjahHgOMNhp4Oo2/WYvfcreOJ6gIEj2/gRs/fwOMbuNH7miI3ereP7AD4Xe9rTN3ovwFmj7Ca6g0P4gAAAABJRU5ErkJggg==) 10px center no-repeat;border-bottom:1px solid #bacbe1}.change-sys ul li.menu-1{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAVCAYAAABc6S4mAAACrUlEQVQ4jZ2VW0hUURSGv31mchiH0YYkowtdEDMiip6C0m4vvRRG0EsXioTIqAYMUxIlEwwzMiIpKCIhgigq6i2CiB4rurxIWAmZaWhqMQ2Ts9bpwTPT8TRjUws27L3Wf9ln78Nehqnikj0d2AFsBlYAxU5lEHgJ3Aeus9+MZpMwGZOd4geOAnVA4ZSbgDHgFNBuV/uSfzXwnR+PAHeBCic1DjwCHgJ9QBKYD2wANgF+B/cEqJRD00ayGvg7EiEHuNJJ3QTqktHAh0xb93ckyoBnQMhJvQAqktFALI1xEyzRTpf44Z81wfOZhAHyzsRnItrliI8AEYd7AdiT/oJAW+yxy2y1Mz+ZqA01pkCBtlgZUMXERQO8BiqZOKoWIOrw8536U0AA/JboWs/meoDm1CLY+j2KaDvgc2E2Aj+ALY5RAbAeuAgsBtakT8WI4hmt8fpwEiC/ZWybET1rRH0ezKARrTCi/UZ0nxG9Ea8PPzaip716XgM1ovcAQidGTCaCEe02oqt+NBQ+N6LnjKgxoscAjOgdI2pPMrBEcY3PsabIMIAlusQSXeiq3bJESyzR5bGmSG+4cXi7JVru1MIAsabIV0u0163pN2q7zz9Q0DDUAYDac135UWDnt5aiRPrvUPu4q95c0DDU5/DCbkG/lRT3ugg4wp/xZfRUccKdsJKS51puy8CZwBm1yWGURmoHUr8wkdqBcqP24py4M2r67WzunogDtwEL2AoEcyH5jWiO+gSBnbmC3QavnLkFLPtXgSzxBlDwPHbF1b1dwC4P+AHwLovQXP684GuDnQv2pBaTHjsjegBYyu8HD+DKwKVFdzOpz9r/fp3H4AVwcJKmlzS7qsfbD3KNJ0Bl/+WS7P0gFXP2vv2vjvbpaunfO5o75u3uzqknf+wqy9qTfwGL01GWRme9hgAAAABJRU5ErkJggg==) 10px center no-repeat}.change-sys ul li.menu-2{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAXVBMVEUAAAAQd+gQdugKhPEXad8DkfoClfwPeeoSdOYBmP8Clf0Dk/sKhPEXad8MgO8VbeIEkfoClfwIh/QNfe0aY9wcXtgFj/kScuYVbuMXaN8ClPwHi/YLgvAQeOkBmP9ioV3GAAAAEnRSTlMAQL+AgECAz8+/v7+fn3BwMCBq18XAAAAAg0lEQVQoz4XL2w7CIBBFUVCx99Z6QxT8/890puIckklkPUAOO5if7r3pTOFI1v656VdeOfCDG75hcHzmcCfu5BhdvBBKCC8lh7NSCzHGcS9GmgizFTPCRamFlFKzEw1NBGuERfDet/jR0kQoITwUhMWKBSGEMB3ERBOhhHBVauGm/AsfPGEdMX6iTWAAAAAASUVORK5CYII=) 10px center no-repeat}.change-sys ul li.menu-3{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAhFBMVEUAAAAEkfoYZ94aYtsKg/EWbOEOfOwaY9sEkfoYZ94ClfwBl/4SdOYGjfcBl/4SdOcOfOwAmf8ClfwSdOYYZ94OfOwYZ94aY9scX9kUcOQYZ94SdOYWbOEOfOwGjfcKhPESdOYWbOEIiPQMgO8PeOoUcOQAmf8ClfwEkfoYZ94aY9scX9kbVSd6AAAAHXRSTlMA0NCQ+VgY9+rqzJCLgYB+bhAF5s7JvICATk0/Kbi7C7oAAACWSURBVCjPjdDHEsIwDATQhfSQkEIvKUDo//9/SBywnJFneKf17snCjcxgmXOHOxkP3OFB4okl5g6tA84O6BxwEXyR0RirRsBgFIOA/mdx6AVcjWInHjgJx8BkPEkyZes9wiWHhDu8iAfLhju8yWjYcod/VBVUdZrW0ORtm0MR+l3nh8pQNqRUhqwnmTJ8zxFA4UWR+OkHQz8mo91TktwAAAAASUVORK5CYII=) 10px center no-repeat}.change-sys ul li.menu-4{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAkFBMVEUAAAATcuYYad8Mfu4TceUaYtsIh/QAmP4Dk/sBlf0Nfe0bYdsClfwAmf8Blv0EkfkClfwTceQBmP4ClfwXauAYZ94ClfwNfu0SdOcHi/YKhfIXauAEkPkClfwAmf8Amf8Amf8Fj/kGjPcJhvMPeusaZNwcXtkMgO8RdegXauAUbuQEkPkClf0Lg/ETceUYZ94ptDkqAAAAInRSTlMAQIBAv0BAEL9Av7+vYGAw7+/f39/fz8/Pv7+/n49wMCAguTdrBQAAAJtJREFUKM+NydcOgkAURdEzAg4gxd4rvYzw/3/naG5CLo6J63FvmEVLmHgrpUzZVcowHuf2AyNxQjAy/TlS8v94EoxYJfkeO0szjIwAtxC4XwEZSkhvGLFSkZyrC7YqQOCKiqBl9NgLTY+EOYhuYWtdh5Q5ioagZHxRE2SM79TriaZHxdhOv3mPvkfD2E5OUDOnYeTMzCkICmYYL15aLx3SvXmGAAAAAElFTkSuQmCC) 10px center no-repeat}.change-sys ul li.menu-5{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAmVBMVEUAAAARdOcNfe0XaeADk/wClv0PeuoVbuIYad8IiPUFj/gFkPkDlPwMf+4Qd+kVbeMQeeoDk/sClv0GjvgLg/EYZ94Gj/gTceQHivUOfOsBmP4ClfwEkfoAmf8Amf8JhvIEkfoGjfcAmf8cXtgWbOENfu0LgvAJhvMbYtsZZt0HivUTceURdugGjvgPeuoBl/4Dk/sYZ94Fj/m4XanxAAAAI3RSTlMAgEC/gL+fgIC/n+/fv7+/gBDvz8/Pv5+AcGBgYFBAMCAgEFminxgAAAC8SURBVCjPdc7ZkoIwEEbhY2SUUWfU2fdFW1yCEX3/hzMdghdBvgvqp06lqmn5OHg3tGWdofKuhpOibbRXtN3u1LWwVp3hl9riG/UDPBXKoObZg973OTkAxSX8jcZVlc2/Jv5+YBUY/uvzHsf6fbmEd3aJNxfMWCfuymBGkYihxypxb4NXnBuYgXPGxBHDFH3VK0uaYSWYYq3/t5ZmSK2PyJChCM2QY/CMj3lfJM/jOG5rbBObiE1iGbHscAb8MDRwhQ/7pgAAAABJRU5ErkJggg==) 10px center no-repeat}.change-sys ul li.menu-6{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAjVBMVEUAAAAAl/4RdecBlf0Hi/YIh/QNf+4ZZd0VbeIEkfoEkfoAmf8Wa+AJhvIJhvIUcOQGjPYZZd0ClPwAmf8Fj/gClPwBlv0PeusClPwYaN8Fj/gEkfoAmf8UcOQJh/MKhPEcX9kRdugUb+MXaeAKgvEMf+4OfewaY9sPeusTcuUZZd0Ck/wFjvgIifUJh/Ouc4p8AAAAIHRSTlMA/kD1wJEJ9e/l3tjV0MC2pZyUiWBXT0xGODEjGBKAgPdbWmkAAAChSURBVCjPdclXDoMwFETRoYSe0DukQaoN+19eEAp+TiSfrxldbLrU1zQ/7fCnMLSVUeBHxZiR5HliMFZBYrnMa7FoPeZaIBnnDVYN5xlIxM1tmjwCMafdNneTCXKYRTjOezmMIpzGbxgVcFPAXQFPUpbSwYXounTU4UV0XTq4CmHfh/QoOBZgORSGTYBFIC4GoQZqengLdhzb9PBQwFlBGT5MMTUWigYuWAAAAABJRU5ErkJggg==) 10px center no-repeat}.change-sys ul li.menu-7{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAb1BMVEUAAAAAmf8YaN8dXdcGjPYMgO8HifUOfOwEkPoKhPEbYNoNfu0QeekeXNYaYtsOfOwYZ94YZ94ClPwYaN4QeOkQeeoSdOcUbuMDk/wKhPEBl/4XauAGjvgHi/YJiPQNf+4OfOwQeeodXtgZZd0bYdpuHx3eAAAAFnRSTlMAv0C/MDDvv+/vgO/vYEDPz5+AcGBAueGEAwAAAIhJREFUKM+VyUkWgyAURNGKirFN32AiCsH9rzGfAckB/APvrOphux0DLwakvFRyBWRVFGsF41hSGRNQSlEpVQwTcWWKYCC1EPUQgf9jmOdWiHZOQGv6NTnuHe3BdLfOOHc4xsODwYcngw9vBjLvZLPsas9+4ie3wME2SOQLhSUMzSfwj30e6EG+JmInSEQNhbgAAAAASUVORK5CYII=) 10px center no-repeat}.change-sys ul li.menu-10,.change-sys ul li.menu-11,.change-sys ul li.menu-8,.change-sys ul li.menu-9{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAASFBMVEUAAAAYZt4OfOwQeOkbYdobYdoOfOwYZt0QeekKhvIdXdcBl/4Hi/UTceUNfu4XaN8EkvsFj/gLgvARdugWbOIKhvIQeeoaYtv+8vvLAAAAC3RSTlMAv79AMO/v78+/39SOGsAAAABcSURBVCjPrcnJDoAgFEPRqozOE/D/fyqYwOIljRvPrr340UTwsBM4CMwEDyEED8HnEyeBlSjB9IIpIcboBsHlExeBheDhJrAR6Cr7blsnGqVTSlpBKqX9sowK3x7PcxS5bwuZ0AAAAABJRU5ErkJggg==) 10px center no-repeat}.change-sys ul li:hover{background-color:#e8eefb}"]
                }] }
    ];
    /** @nocollapse */
    DropDownMenuComponent.ctorParameters = function () { return []; };
    DropDownMenuComponent.propDecorators = {
        menusList: [{ type: Input }],
        currentSys: [{ type: Input }],
        navHomeUrl: [{ type: Output }],
        navUrl: [{ type: Output }]
    };
    return DropDownMenuComponent;
}());
export { DropDownMenuComponent };
if (false) {
    /** @type {?} */
    DropDownMenuComponent.prototype.changeOpen;
    /** @type {?} */
    DropDownMenuComponent.prototype.menusList;
    /** @type {?} */
    DropDownMenuComponent.prototype.currentSys;
    /** @type {?} */
    DropDownMenuComponent.prototype.navHomeUrl;
    /** @type {?} */
    DropDownMenuComponent.prototype.navUrl;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcC1kb3duLW1lbnUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZWNwLWFudC11aS8iLCJzb3VyY2VzIjpbImxpYi9uYXYtbW9kdWxlL2Ryb3AtZG93bi1tZW51L2Ryb3AtZG93bi1tZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBQyxNQUFNLHFCQUFxQixDQUFDOztJQW9DM0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQXVDRztJQUVIOzBCQXpEc0IsS0FBSzswQkFFUCxNQUFNOzBCQUNILElBQUksWUFBWSxFQUFFO3NCQUN0QixJQUFJLFlBQVksRUFBRTtLQXNEcEM7Ozs7SUFuREQsdUNBQU87OztJQUFQO1FBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUMxQjs7Ozs7SUFFRCxzQ0FBTTs7OztJQUFOLFVBQU8sRUFBRTtRQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ3hCOzs7O0lBK0NELHdDQUFROzs7SUFBUjtLQUNDOztnQkEvRUosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLHNqQkFBOEM7b0JBRTlDLFVBQVUsRUFBRTt3QkFDUixPQUFPLENBQUMsY0FBYyxFQUFFOzRCQUNwQixLQUFLLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQztnQ0FDaEIsT0FBTyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRzs2QkFDaEMsQ0FBQyxDQUFDOzRCQUNILEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDO2dDQUNqQixPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxHQUFHOzZCQUNqQyxDQUFDLENBQUM7NEJBQ0gsVUFBVSxDQUFDLGVBQWUsRUFBRSxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7NEJBQ3BELFVBQVUsQ0FBQyxlQUFlLEVBQUUsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO3lCQUN0RCxDQUFDO3FCQUNMOztpQkFDSjs7Ozs7NEJBR0ksS0FBSzs2QkFDTCxLQUFLOzZCQUNMLE1BQU07eUJBQ04sTUFBTTs7Z0NBekJYOztTQW9CYSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge2FuaW1hdGUsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlcn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZWNwLWRyb3AtZG93bi1tZW51JyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9kcm9wLWRvd24tbWVudS5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9kcm9wLWRvd24tbWVudS5jb21wb25lbnQuY3NzJ10sXHJcbiAgICBhbmltYXRpb25zOiBbXHJcbiAgICAgICAgdHJpZ2dlcignZGlzcGxheVN0YXRlJywgW1xyXG4gICAgICAgICAgICBzdGF0ZSgnbm9uZScsIHN0eWxlKHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdub25lJywgb3BhY2l0eTogJzAnLFxyXG4gICAgICAgICAgICB9KSksXHJcbiAgICAgICAgICAgIHN0YXRlKCdibG9jaycsIHN0eWxlKHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsIG9wYWNpdHk6ICcxJyxcclxuICAgICAgICAgICAgfSkpLFxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCdub25lID0+IGJsb2NrJywgYW5pbWF0ZSgnMTAwbXMgbGluZWFyJykpLFxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCdibG9jayA9PiBub25lJywgYW5pbWF0ZSgnODBtcyBsaW5lYXInKSlcclxuICAgICAgICBdKVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHJvcERvd25NZW51Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGNoYW5nZU9wZW46IEJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIG1lbnVzTGlzdDogQXJyYXk8YW55PjtcclxuICAgIEBJbnB1dCgpIGN1cnJlbnRTeXM9XCLliIfmjaLns7vnu59cIjtcclxuICAgIEBPdXRwdXQoKSBuYXZIb21lVXJsID0gbmV3IEV2ZW50RW1pdHRlcigpOy8v5Li76aG16Lez6L2sXHJcbiAgICBAT3V0cHV0KCkgbmF2VXJsID0gbmV3IEV2ZW50RW1pdHRlcigpOy8v5LqM57qn6Lez6L2sXHJcblxyXG5cclxuICAgIG5hdkhvbWUoKSB7XHJcbiAgICAgICAgdGhpcy5uYXZIb21lVXJsLmVtaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBuYXZTdWIoaWQpIHtcclxuICAgICAgICB0aGlzLm5hdlVybC5lbWl0KGlkKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLypcclxuICAgICAgbWVudXNMaXN0OiBBcnJheTxhbnk+ID0gW3tcclxuICAgICAgICAnbWVudWlkJzogMTAwMDAwMDAsXHJcbiAgICAgICAgJ3BhcmVudGlkJzogMCxcclxuICAgICAgICAnbmFtZSc6ICfokKXmlLbns7vnu58nLFxyXG4gICAgICAgICd1cmknOiBudWxsLFxyXG4gICAgICAgICdpY29udXJpJzogJ21lbnUtMScsXHJcbiAgICAgICAgJ2hhdmVjaGlsZCc6IHRydWUsXHJcbiAgICAgICAgJ2NoaWxkJzogbnVsbCxcclxuICAgICAgICAnaW50cm9kdWN0aW9uJzogJ+S4u+imgeWMheaLrOiQpeaUtuS4u+mhtee7n+iuoeS/oeaBr++8jOeUqOaIt+S/oeaBr+euoeeQhu+8jOiuvuWkh+euoeeQhu+8jOaKhOihqOeuoeeQhu+8jOe8tOi0ueeuoeeQhuetieWKn+iDvSdcclxuICAgICAgfSwge1xyXG4gICAgICAgICdtZW51aWQnOiAyMDAwMDAwMCxcclxuICAgICAgICAncGFyZW50aWQnOiAwLFxyXG4gICAgICAgICduYW1lJzogJ+euoea8j+euoeeQhicsXHJcbiAgICAgICAgJ3VyaSc6IG51bGwsXHJcbiAgICAgICAgJ2ljb251cmknOiAnbWVudS0yJyxcclxuICAgICAgICAnaGF2ZWNoaWxkJzogdHJ1ZSxcclxuICAgICAgICAnY2hpbGQnOiBudWxsLFxyXG4gICAgICAgICdpbnRyb2R1Y3Rpb24nOiAn5Li76KaB5YyF5ous566h5ryP57O757uf5Z+65pys5L+h5oGv57uf6K6h77yM566h5ryP55So5oi3566h55CG77yM566h5ryP5a6i5oi3566h55CG77yM5rWB6YeP6K6h566h55CG562J5Yqf6IO9J1xyXG4gICAgICB9LCB7XHJcbiAgICAgICAgJ21lbnVpZCc6IDMwMDAwMDAwLFxyXG4gICAgICAgICdwYXJlbnRpZCc6IDAsXHJcbiAgICAgICAgJ25hbWUnOiAn5p2D6ZmQ566h55CGJyxcclxuICAgICAgICAndXJpJzogbnVsbCxcclxuICAgICAgICAnaWNvbnVyaSc6ICdtZW51LTMnLFxyXG4gICAgICAgICdoYXZlY2hpbGQnOiB0cnVlLFxyXG4gICAgICAgICdjaGlsZCc6IG51bGwsXHJcbiAgICAgICAgJ2ludHJvZHVjdGlvbic6ICfkuLvopoHlip/og73ljIXmi6zns7vnu5/luJDlj7fnrqHnkIbvvIzop5LoibLmnYPpmZDnrqHnkIbvvIzluJDlj7fmnYPpmZDliIbphY3nrYknXHJcbiAgICAgIH0sIHtcclxuICAgICAgICAnbWVudWlkJzogNDAwMDAwMDAsXHJcbiAgICAgICAgJ3BhcmVudGlkJzogMCxcclxuICAgICAgICAnbmFtZSc6ICfns7vnu5/nrqHnkIYnLFxyXG4gICAgICAgICd1cmknOiBudWxsLFxyXG4gICAgICAgICdpY29udXJpJzogJ21lbnUtNCcsXHJcbiAgICAgICAgJ2hhdmVjaGlsZCc6IHRydWUsXHJcbiAgICAgICAgJ2NoaWxkJzogbnVsbCxcclxuICAgICAgICAnaW50cm9kdWN0aW9uJzogJ+S4u+imgeWKn+iDveWMheaLrOefreS/oeaooeadv+euoeeQhu+8jOaKpeihqOaooeadv+euoeeQhu+8jOezu+e7n+S/oeaBr+mFjee9ruetiSdcclxuICAgICAgfV07XHJcblxyXG4gICAgICovXHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==