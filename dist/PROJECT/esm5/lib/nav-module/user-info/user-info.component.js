/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var UserInfoComponent = /** @class */ (function () {
    function UserInfoComponent() {
        // @Input() userHader  = 'assets/base/user_default.png';
        this.userHader = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAAEpklEQVRYw72XTWwUZRjHf/POzO7sV7dACtKWLhCiotJIcFED4TPuoZoYNSF6kYuJCQnEgycvxrNKojExQky8ezLxVAJyICApoKF8qSC2bul229Lubrc7O1+vB1iytN3ZGQv8b7vz/N/5Pc+8H8+rEFJnr+Tj6bi+K2Wou42I2BzRxAYgCWjAnOV4Y6bl3aiY7rnyvHPy1Rd6imHfoQQNHL5Z2L46HTkU1cU79yGCyK073onirPVdsWT9tH9bn3wkUL//Ob6xd5VxVFOVN8Nm3CzHk8P5KfPIi0+vPb0sqNHxqUMdMe0LILYcoCbJSs05dqtQ+2jP1nVmKKgzl/PaM92J73VNed/vDbNVm7sVm5rlARDVBR1xjVUpHVW0ztd25aU/xqoDO/t7JwJBnbmcVzf3Jn5UhfJWq0FN2+NWYZ6q6S75XFcVNq6Jk05oLcFcT/51I1/dt6O/N98Wamp65gdNVQ62Gqxue1z7dw7b9Z+zigLP9iRIxVqDOa4cvjI6t2PP1nWV5v9F8498YfpDPyCA28VaWyAAKeGfoukbo6nKlk1r48cW/v8AavhmYX3SUI/6DWJaHuV5py1QQzXLZb7u+sYkDfXd4ZuFA0tCda+MfgnE/QZo94IlE7G9tjHdK6NHT10afbDCBcC1vyf6/SZ2Q4poF7FYfquwKabnqc7oBw9BdaUjhwmwkepqeCpdDXZodKUjR05cGFEAxPmrY1FdVQ4EMQZIepGUgB5dVTalYtrLAKIjru0AOoIYx2fqoaEKM1bg2HRcex1AJA11d1CTCJr2/1Qiqu4EEIaubg5q0rXwUGE8RkQ8DyB0TVkf1NThszu3UtII7tFV0TU4NJIUQCowVFxj/ergDcOG1TE6E8Gh7s+OlADUMJmHqVZHPFxl5b3TSxW2IythjEZEkDTa55E0VKJ6uH3Ndj2AijBtdyyUE+jrivnuP0JRyIT4zA2ZtlfOZTMlUTXd62HNSUMlHmldrYShkoiGmhUAVE33BoAozTtnQ7sBv+bF9QLdDxapwSLKNee048rg2+5jku1IKjVnEEC89lKmNFm2fg5sdiX5aRPTat2S1CyX2xO1UK1OYbZelJITcO8CSWGm/u2azsjbfsdIpeZQLFncnbMbS7elpITJssVk2SIV01jTGWFFQm+5OFxPUixZx3PZjANN7crVW4VzPauMV5oD5+su5ZrLdMXyrUwQaarCyqROR1wjFdMeamlGJ825wmx9Qy6bmXpQKYDxmfqRFUn9V6Eo4s5MnemK1bYiYeS4kmLJoliyUIDOpE73iiielBRm6581gB6qFMAvv41+7rjy40cJE6CC5xxX7mp8Olhwm7Ed+YmUnHlySEw6rnyvGWgRVC6bsYE3gOEnAFQCBnLZzMjCB4sOp1w2UwL2AucfI9AEsD+XzVxY6uGSJ2Yum5kG9gDHePQ6C2zPZTMXWwW0bQsHh0YGgK+ATcuEKQOfqkL5Zv+2Pt8bbaBedXBoJAIcBA4DW0LC3AGOA1/nspm7QQyhm+7BoZF+YADYBTwH9C0YZwq4zr3PdFLXlFN7t/aFulov+3py6uKocKVMA6iKUt23rW/Zh/t/gqqwzo9c3wUAAAAASUVORK5CYII=';
        this.userName = 'username';
    }
    /**
     * @return {?}
     */
    UserInfoComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    UserInfoComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ecp-user-info',
                    template: "<span class=\"user\">\r\n  <span class=\"header\"><img src=\"{{userHader}}\"/></span>\r\n  <span class=\"name\">{{userName}}</span>\r\n</span>\r\n",
                    styles: [".user{padding:0;margin-right:10px;margin-top:7px;float:right!important;color:#fff}.user .header{width:37px;height:37px;display:inline-block;float:left}.user .name{padding:0 8px;height:37px;line-height:37px;margin:0;vertical-align:middle;display:table-cell;float:left;font-size:14px;font-weight:700}"]
                }] }
    ];
    /** @nocollapse */
    UserInfoComponent.ctorParameters = function () { return []; };
    UserInfoComponent.propDecorators = {
        userHader: [{ type: Input }],
        userName: [{ type: Input }]
    };
    return UserInfoComponent;
}());
export { UserInfoComponent };
if (false) {
    /** @type {?} */
    UserInfoComponent.prototype.userHader;
    /** @type {?} */
    UserInfoComponent.prototype.userName;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1pbmZvLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2VjcC1hbnQtdWkvIiwic291cmNlcyI6WyJsaWIvbmF2LW1vZHVsZS91c2VyLWluZm8vdXNlci1pbmZvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQVMsTUFBTSxlQUFlLENBQUM7O0lBWW5EOzt5QkFIcUIsNHhEQUE0eEQ7d0JBQzd4RCxVQUFVO0tBRzdCOzs7O0lBRUQsb0NBQVE7OztJQUFSO0tBQ0M7O2dCQWRKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsOEpBQXlDOztpQkFFNUM7Ozs7OzRCQUdJLEtBQUs7MkJBQ0wsS0FBSzs7NEJBVlY7O1NBT2EsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2VjcC11c2VyLWluZm8nLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3VzZXItaW5mby5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi91c2VyLWluZm8uY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVc2VySW5mb0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICAvLyBASW5wdXQoKSB1c2VySGFkZXIgID0gJ2Fzc2V0cy9iYXNlL3VzZXJfZGVmYXVsdC5wbmcnO1xyXG4gICAgQElucHV0KCkgdXNlckhhZGVyID0gJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ1VBQUFBbENBWUFBQURGbmlBREFBQUFCR2RCVFVFQUFMR1BDL3hoQlFBQUFDQmpTRkpOQUFCNkpnQUFnSVFBQVBvQUFBQ0E2QUFBZFRBQUFPcGdBQUE2bUFBQUYzQ2N1bEU4QUFBQUJtSkxSMFFBQUFBQUFBRDVRN3QvQUFBQUNYQklXWE1BQUFzU0FBQUxFZ0hTM1g3OEFBQUVwa2xFUVZSWXc3MlhUV3dVWlJqSGYvUE96TzdzVjdkQUN0S1dMaENpb3RKSWNGRUQ0VFB1b1pvWU5TRjZrWXVKQ1FuRWd5Y3Z4ck5Lb2pFeFFreThlekx4VkFKeUlDQXBvS0Y4cVNDMmJ1bDIyOUx1YnJjN08xK3ZCMWl5dE4zWkdRdjhiN3Z6L04vNVBjKzhIOCtyRUZKbnIrVGo2YmkrSzJXb3U0MkkyQnpSeEFZZ0NXakFuT1Y0WTZibDNhaVk3cm55dkhQeTFSZDZpbUhmb1FRTkhMNVoyTDQ2SFRrVTFjVTc5eUdDeUswNzNvbmlyUFZkc1dUOXRIOWJuM3drVUwvL09iNnhkNVZ4VkZPVk44Tm0zQ3pIazhQNUtmUElpMCt2UGIwc3FOSHhxVU1kTWUwTElMWWNvQ2JKU3MwNWRxdFErMmpQMW5WbUtLZ3psL1BhTTkySjczVk5lZC92RGJOVm03c1ZtNXJsQVJEVkJSMXhqVlVwSFZXMHp0ZDI1YVUveHFvRE8vdDdKd0pCbmJtY1Z6ZjNKbjVVaGZKV3EwRk4yK05XWVo2cTZTNzVYRmNWTnE2SmswNW9MY0ZjVC81MUkxL2R0Nk8vTjk4V2FtcDY1Z2ROVlE2MkdxeHVlMXo3ZHc3YjlaK3ppZ0xQOWlSSXhWcURPYTRjdmpJNnQyUFAxbldWNXY5Rjg0OThZZnBEUHlDQTI4VmFXeUFBS2VHZm91a2JvNm5LbGsxcjQ4Y1cvdjhBYXZobVlYM1NVSS82RFdKYUh1VjVweTFRUXpYTFpiN3Urc1lrRGZYZDRadUZBMHRDZGErTWZnbkUvUVpvOTRJbEU3Rzl0akhkSzZOSFQxMGFmYkRDQmNDMXZ5ZjYvU1oyUTRwb0Y3RllmcXV3S2FibnFjN29CdzlCZGFVamh3bXdrZXBxZUNwZERYWm9kS1VqUjA1Y0dGRUF4UG1yWTFGZFZRNEVNUVpJZXBHVWdCNWRWVGFsWXRyTEFLSWpydTBBT29JWXgyZnFvYUVLTTFiZzJIUmNleDFBSkExMWQxQ1RDSnIyLzFRaXF1NEVFSWF1Ymc1cTByWHdVR0U4UmtROER5QjBUVmtmMU5UaHN6dTNVdElJN3RGVjBUVTROSklVUUNvd1ZGeGovZXJnRGNPRzFURTZFOEdoN3MrT2xBRFVNSm1IcVZaSFBGeGw1YjNUU3hXMkl5dGhqRVpFa0RUYTU1RTBWS0o2dUgzTmRqMkFpakJ0ZHl5VUUranJpdm51UDBKUnlJVDR6QTJadGxmT1pUTWxVVFhkNjJITlNVTWxIbWxkcllTaGtvaUdtaFVBVkUzM0JvQW96VHRuUTdzQnYrYkY5UUxkRHhhcHdTTEtOZWUwNDhyZzIrNWprdTFJS2pWbkVFQzg5bEttTkZtMmZnNXNkaVg1YVJQVGF0MlMxQ3lYMnhPMVVLMU9ZYlplbEpJVGNPOENTV0dtL3UyYXpzamJmc2RJcGVaUUxGbmNuYk1iUzdlbHBJVEpzc1ZrMlNJVjAxalRHV0ZGUW0rNU9GeFBVaXhaeDNQWmpBTk43Y3JWVzRWelBhdU1WNW9ENStzdTVackxkTVh5clV3UWFhckN5cVJPUjF3akZkTWVhbWxHSjgyNXdteDlReTZibVhwUUtZRHhtZnFSRlVuOVY2RW80czVNbmVtSzFiWWlZZVM0a21MSm9saXlVSURPcEU3M2lpaWVsQlJtNjU4MWdCNnFGTUF2djQxKzdyank0MGNKRTZDQzV4eFg3bXA4T2xod203RWQrWW1VbkhseVNFdzZybnl2R1dnUlZDNmJzWUUzZ09FbkFGUUNCbkxaek1qQ0I0c09wMXcyVXdMMkF1Y2ZJOUFFc0QrWHpWeFk2dUdTSjJZdW01a0c5Z0RIZVBRNkMyelBaVE1YV3dXMGJRc0hoMFlHZ0srQVRjdUVLUU9mcWtMNVp2KzJQdDhiYmFCZWRYQm9KQUljQkE0RFcwTEMzQUdPQTEvbnNwbTdRUXlobSs3Qm9aRitZQURZQlR3SDlDMFlad3E0enIzUGRGTFhsRk43dC9hRnVsb3YrM3B5NnVLb2NLVk1BNmlLVXQyM3JXL1poL3QvZ3Fxd3pvOWMzd1VBQUFBQVNVVk9SSzVDWUlJPSc7XHJcbiAgICBASW5wdXQoKSB1c2VyTmFtZSA9ICd1c2VybmFtZSc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==