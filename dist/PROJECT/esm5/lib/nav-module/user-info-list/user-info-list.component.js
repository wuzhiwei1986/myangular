/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
var UserInfoListComponent = /** @class */ (function () {
    function UserInfoListComponent() {
        this.changeOpen = false;
        this.userHader = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAAEpklEQVRYw72XTWwUZRjHf/POzO7sV7dACtKWLhCiotJIcFED4TPuoZoYNSF6kYuJCQnEgycvxrNKojExQky8ezLxVAJyICApoKF8qSC2bul229Lubrc7O1+vB1iytN3ZGQv8b7vz/N/5Pc+8H8+rEFJnr+Tj6bi+K2Wou42I2BzRxAYgCWjAnOV4Y6bl3aiY7rnyvHPy1Rd6imHfoQQNHL5Z2L46HTkU1cU79yGCyK073onirPVdsWT9tH9bn3wkUL//Ob6xd5VxVFOVN8Nm3CzHk8P5KfPIi0+vPb0sqNHxqUMdMe0LILYcoCbJSs05dqtQ+2jP1nVmKKgzl/PaM92J73VNed/vDbNVm7sVm5rlARDVBR1xjVUpHVW0ztd25aU/xqoDO/t7JwJBnbmcVzf3Jn5UhfJWq0FN2+NWYZ6q6S75XFcVNq6Jk05oLcFcT/51I1/dt6O/N98Wamp65gdNVQ62Gqxue1z7dw7b9Z+zigLP9iRIxVqDOa4cvjI6t2PP1nWV5v9F8498YfpDPyCA28VaWyAAKeGfoukbo6nKlk1r48cW/v8AavhmYX3SUI/6DWJaHuV5py1QQzXLZb7u+sYkDfXd4ZuFA0tCda+MfgnE/QZo94IlE7G9tjHdK6NHT10afbDCBcC1vyf6/SZ2Q4poF7FYfquwKabnqc7oBw9BdaUjhwmwkepqeCpdDXZodKUjR05cGFEAxPmrY1FdVQ4EMQZIepGUgB5dVTalYtrLAKIjru0AOoIYx2fqoaEKM1bg2HRcex1AJA11d1CTCJr2/1Qiqu4EEIaubg5q0rXwUGE8RkQ8DyB0TVkf1NThszu3UtII7tFV0TU4NJIUQCowVFxj/ergDcOG1TE6E8Gh7s+OlADUMJmHqVZHPFxl5b3TSxW2IythjEZEkDTa55E0VKJ6uH3Ndj2AijBtdyyUE+jrivnuP0JRyIT4zA2ZtlfOZTMlUTXd62HNSUMlHmldrYShkoiGmhUAVE33BoAozTtnQ7sBv+bF9QLdDxapwSLKNee048rg2+5jku1IKjVnEEC89lKmNFm2fg5sdiX5aRPTat2S1CyX2xO1UK1OYbZelJITcO8CSWGm/u2azsjbfsdIpeZQLFncnbMbS7elpITJssVk2SIV01jTGWFFQm+5OFxPUixZx3PZjANN7crVW4VzPauMV5oD5+su5ZrLdMXyrUwQaarCyqROR1wjFdMeamlGJ825wmx9Qy6bmXpQKYDxmfqRFUn9V6Eo4s5MnemK1bYiYeS4kmLJoliyUIDOpE73iiielBRm6581gB6qFMAvv41+7rjy40cJE6CC5xxX7mp8Olhwm7Ed+YmUnHlySEw6rnyvGWgRVC6bsYE3gOEnAFQCBnLZzMjCB4sOp1w2UwL2AucfI9AEsD+XzVxY6uGSJ2Yum5kG9gDHePQ6C2zPZTMXWwW0bQsHh0YGgK+ATcuEKQOfqkL5Zv+2Pt8bbaBedXBoJAIcBA4DW0LC3AGOA1/nspm7QQyhm+7BoZF+YADYBTwH9C0YZwq4zr3PdFLXlFN7t/aFulov+3py6uKocKVMA6iKUt23rW/Zh/t/gqqwzo9c3wUAAAAASUVORK5CYII=';
    }
    /**
     * @return {?}
     */
    UserInfoListComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    UserInfoListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ecp-user-info-list',
                    template: "<span class=\"user-info-list\" style=\"float: right\" (mouseleave)=\"changeOpen=false\">\r\n  <div class=\"header\" [ngClass]=\"{'bg':changeOpen}\" (mouseover)=\"changeOpen=true\">\r\n        <img src=\"{{userHader}}\"/></div>\r\n        <ul style=\"display: none\" [@displayState]=\"changeOpen == true? 'block' : 'none'\">\r\n          <ng-content></ng-content>\r\n          <!--<li (click)=\"nav('\u59D3\u540D')\">\u674E\u5148\u751F</li>\r\n          <li (click)=\"nav('\u4FEE\u6539\u5BC6\u7801')\">\u4FEE\u6539\u5BC6\u7801</li>\r\n          <li (click)=\"nav('\u9000\u51FA')\">\u9000\u51FA</li>-->\r\n        </ul>\r\n</span>\r\n",
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
                    styles: [":host>>>.user-info-list{z-index:1000;margin-right:15px;height:32px;line-height:32px;display:block;float:right;position:relative}:host>>>.user-info-list .header{width:52px;height:50px;padding-top:7px;display:inline-block;float:left;text-align:center}:host>>>.user-info-list .header img{margin:0 auto}:host>>>.user-info-list .bg{background-color:#22272e}:host>>>.user-info-list ul{position:absolute;right:0;top:50px;background:#22272e;color:#dadada;width:125px;padding:0;box-shadow:0 0 6px rgba(0,0,0,.4)}:host>>>.user-info-list ul li{list-style:none;color:#dadada;width:125px;height:42px;line-height:42px;text-align:left;display:block;padding-left:10px;cursor:pointer;border-bottom:1px solid #303844}:host>>>.user-info-list ul li:last-child{border-bottom-width:0}:host>>>.user-info-list ul li:hover{background-color:#2768ec}"]
                }] }
    ];
    /** @nocollapse */
    UserInfoListComponent.ctorParameters = function () { return []; };
    UserInfoListComponent.propDecorators = {
        userHader: [{ type: Input }]
    };
    return UserInfoListComponent;
}());
export { UserInfoListComponent };
if (false) {
    /** @type {?} */
    UserInfoListComponent.prototype.changeOpen;
    /** @type {?} */
    UserInfoListComponent.prototype.userHader;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1pbmZvLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZWNwLWFudC11aS8iLCJzb3VyY2VzIjpbImxpYi9uYXYtbW9kdWxlL3VzZXItaW5mby1saXN0L3VzZXItaW5mby1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDdkQsT0FBTyxFQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQzs7SUF3QjNFOzBCQUpzQixLQUFLO3lCQUNOLDR4REFBNHhEO0tBSWh6RDs7OztJQUVELHdDQUFROzs7SUFBUjtLQUNDOztnQkExQkosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLG9vQkFBOEM7b0JBRTlDLFVBQVUsRUFBRTt3QkFDUixPQUFPLENBQUMsY0FBYyxFQUFFOzRCQUNwQixLQUFLLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQztnQ0FDaEIsT0FBTyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRzs2QkFDaEMsQ0FBQyxDQUFDOzRCQUNILEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDO2dDQUNqQixPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxHQUFHOzZCQUNqQyxDQUFDLENBQUM7NEJBQ0gsVUFBVSxDQUFDLGVBQWUsRUFBRSxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7NEJBQ3BELFVBQVUsQ0FBQyxlQUFlLEVBQUUsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO3lCQUN0RCxDQUFDO3FCQUNMOztpQkFDSjs7Ozs7NEJBR0ksS0FBSzs7Z0NBdEJWOztTQW9CYSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7YW5pbWF0ZSwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdlY3AtdXNlci1pbmZvLWxpc3QnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3VzZXItaW5mby1saXN0LmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL3VzZXItaW5mby1saXN0LmNvbXBvbmVudC5jc3MnXSxcclxuICAgIGFuaW1hdGlvbnM6IFtcclxuICAgICAgICB0cmlnZ2VyKCdkaXNwbGF5U3RhdGUnLCBbXHJcbiAgICAgICAgICAgIHN0YXRlKCdub25lJywgc3R5bGUoe1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ25vbmUnLCBvcGFjaXR5OiAnMCcsXHJcbiAgICAgICAgICAgIH0pKSxcclxuICAgICAgICAgICAgc3RhdGUoJ2Jsb2NrJywgc3R5bGUoe1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJywgb3BhY2l0eTogJzEnLFxyXG4gICAgICAgICAgICB9KSksXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJ25vbmUgPT4gYmxvY2snLCBhbmltYXRlKCcxMDBtcyBsaW5lYXInKSksXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJ2Jsb2NrID0+IG5vbmUnLCBhbmltYXRlKCc4MG1zIGxpbmVhcicpKVxyXG4gICAgICAgIF0pXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVc2VySW5mb0xpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgY2hhbmdlT3BlbjogQm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgdXNlckhhZGVyID0gJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ1VBQUFBbENBWUFBQURGbmlBREFBQUFCR2RCVFVFQUFMR1BDL3hoQlFBQUFDQmpTRkpOQUFCNkpnQUFnSVFBQVBvQUFBQ0E2QUFBZFRBQUFPcGdBQUE2bUFBQUYzQ2N1bEU4QUFBQUJtSkxSMFFBQUFBQUFBRDVRN3QvQUFBQUNYQklXWE1BQUFzU0FBQUxFZ0hTM1g3OEFBQUVwa2xFUVZSWXc3MlhUV3dVWlJqSGYvUE96TzdzVjdkQUN0S1dMaENpb3RKSWNGRUQ0VFB1b1pvWU5TRjZrWXVKQ1FuRWd5Y3Z4ck5Lb2pFeFFreThlekx4VkFKeUlDQXBvS0Y4cVNDMmJ1bDIyOUx1YnJjN08xK3ZCMWl5dE4zWkdRdjhiN3Z6L04vNVBjKzhIOCtyRUZKbnIrVGo2YmkrSzJXb3U0MkkyQnpSeEFZZ0NXakFuT1Y0WTZibDNhaVk3cm55dkhQeTFSZDZpbUhmb1FRTkhMNVoyTDQ2SFRrVTFjVTc5eUdDeUswNzNvbmlyUFZkc1dUOXRIOWJuM3drVUwvL09iNnhkNVZ4VkZPVk44Tm0zQ3pIazhQNUtmUElpMCt2UGIwc3FOSHhxVU1kTWUwTElMWWNvQ2JKU3MwNWRxdFErMmpQMW5WbUtLZ3psL1BhTTkySjczVk5lZC92RGJOVm03c1ZtNXJsQVJEVkJSMXhqVlVwSFZXMHp0ZDI1YVUveHFvRE8vdDdKd0pCbmJtY1Z6ZjNKbjVVaGZKV3EwRk4yK05XWVo2cTZTNzVYRmNWTnE2SmswNW9MY0ZjVC81MUkxL2R0Nk8vTjk4V2FtcDY1Z2ROVlE2MkdxeHVlMXo3ZHc3YjlaK3ppZ0xQOWlSSXhWcURPYTRjdmpJNnQyUFAxbldWNXY5Rjg0OThZZnBEUHlDQTI4VmFXeUFBS2VHZm91a2JvNm5LbGsxcjQ4Y1cvdjhBYXZobVlYM1NVSS82RFdKYUh1VjVweTFRUXpYTFpiN3Urc1lrRGZYZDRadUZBMHRDZGErTWZnbkUvUVpvOTRJbEU3Rzl0akhkSzZOSFQxMGFmYkRDQmNDMXZ5ZjYvU1oyUTRwb0Y3RllmcXV3S2FibnFjN29CdzlCZGFVamh3bXdrZXBxZUNwZERYWm9kS1VqUjA1Y0dGRUF4UG1yWTFGZFZRNEVNUVpJZXBHVWdCNWRWVGFsWXRyTEFLSWpydTBBT29JWXgyZnFvYUVLTTFiZzJIUmNleDFBSkExMWQxQ1RDSnIyLzFRaXF1NEVFSWF1Ymc1cTByWHdVR0U4UmtROER5QjBUVmtmMU5UaHN6dTNVdElJN3RGVjBUVTROSklVUUNvd1ZGeGovZXJnRGNPRzFURTZFOEdoN3MrT2xBRFVNSm1IcVZaSFBGeGw1YjNUU3hXMkl5dGhqRVpFa0RUYTU1RTBWS0o2dUgzTmRqMkFpakJ0ZHl5VUUranJpdm51UDBKUnlJVDR6QTJadGxmT1pUTWxVVFhkNjJITlNVTWxIbWxkcllTaGtvaUdtaFVBVkUzM0JvQW96VHRuUTdzQnYrYkY5UUxkRHhhcHdTTEtOZWUwNDhyZzIrNWprdTFJS2pWbkVFQzg5bEttTkZtMmZnNXNkaVg1YVJQVGF0MlMxQ3lYMnhPMVVLMU9ZYlplbEpJVGNPOENTV0dtL3UyYXpzamJmc2RJcGVaUUxGbmNuYk1iUzdlbHBJVEpzc1ZrMlNJVjAxalRHV0ZGUW0rNU9GeFBVaXhaeDNQWmpBTk43Y3JWVzRWelBhdU1WNW9ENStzdTVackxkTVh5clV3UWFhckN5cVJPUjF3akZkTWVhbWxHSjgyNXdteDlReTZibVhwUUtZRHhtZnFSRlVuOVY2RW80czVNbmVtSzFiWWlZZVM0a21MSm9saXlVSURPcEU3M2lpaWVsQlJtNjU4MWdCNnFGTUF2djQxKzdyank0MGNKRTZDQzV4eFg3bXA4T2xod203RWQrWW1VbkhseVNFdzZybnl2R1dnUlZDNmJzWUUzZ09FbkFGUUNCbkxaek1qQ0I0c09wMXcyVXdMMkF1Y2ZJOUFFc0QrWHpWeFk2dUdTSjJZdW01a0c5Z0RIZVBRNkMyelBaVE1YV3dXMGJRc0hoMFlHZ0srQVRjdUVLUU9mcWtMNVp2KzJQdDhiYmFCZWRYQm9KQUljQkE0RFcwTEMzQUdPQTEvbnNwbTdRUXlobSs3Qm9aRitZQURZQlR3SDlDMFlad3E0enIzUGRGTFhsRk43dC9hRnVsb3YrM3B5NnVLb2NLVk1BNmlLVXQyM3JXL1poL3QvZ3Fxd3pvOWMzd1VBQUFBQVNVVk9SSzVDWUlJPSc7XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=