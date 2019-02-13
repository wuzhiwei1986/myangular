(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/router'), require('@angular/animations'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('ecp-ant-ui', ['exports', '@angular/common', '@angular/router', '@angular/animations', '@angular/core'], factory) :
    (factory((global['ecp-ant-ui'] = {}),global.ng.common,global.ng.router,global.ng.animations,global.ng.core));
}(this, (function (exports,common,router,animations,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var EcpAntUiService = /** @class */ (function () {
        function EcpAntUiService() {
        }
        EcpAntUiService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        EcpAntUiService.ctorParameters = function () { return []; };
        /** @nocollapse */ EcpAntUiService.ngInjectableDef = i0.defineInjectable({ factory: function EcpAntUiService_Factory() { return new EcpAntUiService(); }, token: EcpAntUiService, providedIn: "root" });
        return EcpAntUiService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var EcpAntUiComponent = /** @class */ (function () {
        function EcpAntUiComponent() {
        }
        /**
         * @return {?}
         */
        EcpAntUiComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        EcpAntUiComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ecp-ecp-ant-ui',
                        template: "\n    <p>\n      ecp-ant-ui works!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        EcpAntUiComponent.ctorParameters = function () { return []; };
        return EcpAntUiComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var BreadCrumbComponent = /** @class */ (function () {
        function BreadCrumbComponent() {
        }
        /**
         * @return {?}
         */
        BreadCrumbComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        BreadCrumbComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ecp-bread-crumb',
                        template: "<!--\u81EA\u5B9A\u4E49\u9762\u5305\u5C51-->\r\n<div class=\"custom-breadcrumb\">\r\n  <span class=\"breadcrumb-item\">\r\n      <ng-content></ng-content>\r\n  </span>\r\n  <ng-content select=\".right-link\"></ng-content>\r\n</div>\r\n",
                        styles: [".custom-breadcrumb{height:50px;background:rgba(255,255,255,1);border-bottom:1px solid rgba(218,218,218,1);line-height:50px;padding:0 30px;font-size:14px;font-weight:400;color:rgba(153,153,153,1)}:host>>>.breadcrumb-item span:not(:last-child):after{content:\" > \"}:host>>>.right-link{float:right;font-size:14px;font-family:MicrosoftYaHei;font-weight:400;color:rgba(110,110,110,1)}:host>>>.right-link a{color:#1e5bd6;margin-left:30px}:host>>>.custom-breadcrumb .right-link a i{color:#1e5bd6;margin-right:9px}"]
                    }] }
        ];
        /** @nocollapse */
        BreadCrumbComponent.ctorParameters = function () { return []; };
        return BreadCrumbComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var CopyrightComponent = /** @class */ (function () {
        function CopyrightComponent() {
        }
        /**
         * @return {?}
         */
        CopyrightComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        CopyrightComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ecp-copyright',
                        template: "<div class=\"copyright\"><ng-content></ng-content></div>\r\n",
                        styles: [".copyright{text-align:center;height:28px;line-height:28px;margin-bottom:20px}"]
                    }] }
        ];
        /** @nocollapse */
        CopyrightComponent.ctorParameters = function () { return []; };
        return CopyrightComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var TopNavComponent = /** @class */ (function () {
        function TopNavComponent() {
        }
        // 处理警告
        /**
         * @param {?} id
         * @return {?}
         */
        TopNavComponent.prototype.disposedId = /**
         * @param {?} id
         * @return {?}
         */
            function (id) {
                alert('alarm组件回传ID------' + id);
            };
        /**
         * @param {?} txt
         * @return {?}
         */
        TopNavComponent.prototype.test = /**
         * @param {?} txt
         * @return {?}
         */
            function (txt) {
                console.log(txt);
            };
        /**
         * @return {?}
         */
        TopNavComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        TopNavComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ecp-top-nav',
                        template: "<div class=\"top-header\">\r\n  <ng-content></ng-content>\r\n</div>\r\n",
                        styles: [".top-header{background:#303844;height:50px;min-width:1000px;z-index:1000}:host>>>.top-header .logo{height:32px;margin-left:23px;margin-top:8px;display:inline-block;float:left;padding-right:20px;margin-right:20px;border-right:3px solid #fff;cursor:pointer}:host>>>.top-header .logo img{vertical-align:top;height:32px}:host>>>.top-header .name{display:inline-block;float:left;color:#fff;font-size:24px;margin-top:5px;cursor:pointer}:host>>>.logout{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAUCAYAAACAl21KAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAABrklEQVQ4y53UP2xNcRQH8M+7ESUGR0loIo2BrSwikSA1EPbOJaQbtg4maWJgNzMwiIGJpIlqTEgsEiYkBIlKDGeokAY1vPPqpel7LSf55f7O+f7J+Z3fvbelT2TmRjyr9GBEfO/FXad/7Ma+rv3LNRll5jqM41VEPO/R5QGM4FZE/OzUmy7CZszgBqb7dDldnJnS/DXKzPW4j9GqP+lj1MFG8aC0Sx1dwuHa38ZYH6Ox4sCh0moycwiTBcxgPCIWerkUNo6HVZrMzKEGZzCA3zgXEb+sEsU5X5oBnG5wvPDZiHi9mkmX2WvMVnqi0b7K1QbcK57Wc6TBYCVz/2H0uZ6DDb5VsnUF4jwWa82vgHc08w3eVLJ/hTm8077usdovj47mbSszr+BidbYrIr6u5UyZuQ3vsQlXG9wpbBOm/mE+U6Wx5JGZ9zJzsdbEGrqZ6OLfhVYBO/AcO2uw13B5+TEzc0t1cqG0n3AgIuZaXaS92q/99ir90P5kOpexB8ewofIvOBkRL5Y66jIbxvUS9ItHOBsRHzqF1kqszDyKUziCYSzgo/Zv92ZEPF6u+QMQUZg4AXXrgwAAAABJRU5ErkJggg==) no-repeat;width:18px;height:20px;text-indent:-999999px;display:inline-block;margin-top:16px;margin-right:30px;float:right!important}"]
                    }] }
        ];
        /** @nocollapse */
        TopNavComponent.ctorParameters = function () { return []; };
        return TopNavComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var AlarmComponent = /** @class */ (function () {
        /* 测试
          alarmList = [
            {
              id: '1',
              title: '流量计【004557】200流速超过10m³'

            },
            {
              id: '2',
              title: '【00DX34557】200流速超过10m³'

            },
            {
              id: '3',
              title: '流量计【00DX34557】200流超过10m³'

            },
            {
              id: '4',
              title: '流量计【00DX4557】流速超过10m³'

            },
            {
              id: '5',
              title: '流量200流速计【20流速】200流速超过10m³'

            },
            {
              id: '6',
              title: '200流速流量计【00D557】200流速超过10m³'

            },
            {
              id: '7',
              title: '流量计200流速【00D57】200流速超过10m³'

            },
            {
              id: '8',
              title: '流量计【00DX34557】200流速超过10m³'

            },
            {
              id: '9',
              title: '200流量计【00DX34557】200流过10m³'

            },
            {
              id: '10',
              title: '流量计【00DX34557】200流速超过10m³'

            }
          ];
        */
        function AlarmComponent() {
            this.isShow = false;
            // 传入列表
            this.alarmList = [];
            // 传入列表总长度
            this.alarmTotal = 0;
            // 回传ID
            // @Output() disposed = new EventEmitter<string>();
            // 点击‘查看全部’回传
            this.viewAll = new i0.EventEmitter();
        }
        /*

          dispose(id) {
            this.disposed.emit(id);
            // alert(id);
          }
        */
        /**
         * @return {?}
         */
        AlarmComponent.prototype.viewMore = /**
         * @return {?}
         */
            function () {
                this.viewAll.emit();
            };
        /**
         * @return {?}
         */
        AlarmComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                if (this.alarmTotal == 0) {
                    this.alarmTotal = this.alarmList.length;
                }
                // console.log('alarmList', this.alarmList);
            };
        AlarmComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ecp-alarm',
                        template: "<span class=\"alarm\" (mouseover)=\"isShow=true\" (mouseleave)=\"isShow=false\"> <span\r\n  class=\"alarm-num\"><span>{{alarmTotal}}</span></span> <span class=\"txt\">\u8B66\u62A5</span> <span class=\"icon\"><i\r\n  class=\"icon dongxiniotwater general_alarm\"></i></span>\r\n<div class=\"alarm-content\" [@displayState]=\"isShow == true? 'block' : 'none'\">\r\n  <div class=\"top-title\">\r\n    <div class=\"content\"> <span>{{alarmTitle}}</span>\r\n      <nav class=\"right-link\"><a (click)=\"viewMore()\">\u67E5\u770B\u5168\u90E8</a></nav>\r\n    </div>\r\n  </div>\r\n  <div class=\"alarm-list\">\r\n    <div class=\"content\">\r\n      <div class=\"no-data\" *ngIf=\"alarmList.length==0\">\u6682\u65E0\u8B66\u544A\u4FE1\u606F</div>\r\n      <table *ngIf=\"alarmList.length>0\">\r\n        <ng-content></ng-content>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n</span>\r\n",
                        animations: [
                            animations.trigger('displayState', [
                                animations.state('none', animations.style({
                                    display: 'none', opacity: '0',
                                })),
                                animations.state('block', animations.style({
                                    display: 'block', opacity: '1',
                                })),
                                animations.transition('none => block', animations.animate('100ms linear')),
                                animations.transition('block => none', animations.animate('80ms linear'))
                            ])
                        ],
                        styles: [":host>>>.alarm{position:relative;display:inline-block;float:right;font-family:MicrosoftYaHei;height:50px;width:90px;line-height:50px;text-align:right;padding-left:15px;padding-right:32px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAeCAYAAADOziUSAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAAAcElEQVRIx+3SMQqAMBBE0VkRco806XIWPamdns3qWwVEUaKkUNjppnkMy0qNElOma4VJkmOOOdYOAwKwcJ0FCNXiDVgNxZQ5gvPbRTFl+lLMbAVGSZMkkzSY2frkZv2+7EA9hU7YW6Tkw3/mmGN/wzY9A2lGL1XvVQAAAABJRU5ErkJggg==) right center no-repeat}:host>>>.alarm .icon{position:absolute;right:35px;top:0;cursor:pointer}:host>>>.alarm .icon i{font-size:18px;color:#fff!important}:host>>>.alarm .alarm-num{position:absolute;right:60px;top:3px;z-index:10;border-radius:10px;height:20px;line-height:20px;min-width:20px;display:inline-block;background:rgba(232,30,30,1)}:host>>>.alarm .alarm-num span{display:block;color:#fff;height:20px;text-align:center;font-size:12px;padding:0 5px}:host>>>.alarm .txt{position:absolute;right:35px;color:#fff}:host>>>.alarm-content{position:absolute;right:32px;top:50px;width:428px;padding-bottom:4px;z-index:100000;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAawAAAAECAYAAADS8AubAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA39pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2OGIyMGJhZi0xYWJiLTdmNDctOGJjZi02YzI0N2MyZTJiMmQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Qjc0M0RGQzdFNDBDMTFFODg3NDdENzI5RTMyRUQyOEEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Qjc0M0RGQzZFNDBDMTFFODg3NDdENzI5RTMyRUQyOEEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmJjMzQ3MjI2LWZmOTktYmU0Ni1iMDE2LTIxNWQ4NWQzMzk5MSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjJjMTRhMTZlLTViMjctOTE0My05Mjk2LTIxZmI5ODVkMzc5YSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrzxMr0AAAB0SURBVHja7NVJCoAwEETRdBxA8P4nFYQ4tN1SXkFd/AdFEpduvrl7MbOulDLGptisM9/5HQCAtxyxFltji84WrTpMwaqKU69QDXob/w4A8CJXtDaFa893tOp8gmWKU65qxAoA8FW0Ti3vnu5gAQDwd5cAAwCFGij5wONw1AAAAABJRU5ErkJggg==) center bottom no-repeat}:host>>>.alarm-content .top-title{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAawAAAAMCAYAAAA+o4n2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5NzhEMkY2RkUxOEMxMUU4OTAxREI0M0UzQkNBNzk2QiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5NzhEMkY3MEUxOEMxMUU4OTAxREI0M0UzQkNBNzk2QiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjk3OEQyRjZERTE4QzExRTg5MDFEQjQzRTNCQ0E3OTZCIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjk3OEQyRjZFRTE4QzExRTg5MDFEQjQzRTNCQ0E3OTZCIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+4ouqUwAAAZ9JREFUeNrs3M9KAkEcwPEd3W3tHSIPkk+0EXnoATyKiAcRERER8SE6GBU9UXQQOvgIrZXb/HImhxBtBTXY7wd+afsHpQ5fJiZVkiQeAAD/nS9flFL8JAAAmygzrsTM3sniyt92AQAg46VSKqcf3BELO7oViz285voVFgAAG2KV1xPITCaTohyvVCpT/fAuI3HZR7QIFgAgbaxO9BTG43EpiqJHOTebzS5rtdqLt/wz4fwQ0crxKwEAbInVab/fL1er1acgCM5l5Lkck3Pmmry5h2ABAI4Tq16vV9arqYcwDM/sNfJcjsm5Q0WLYAEANsaqXq/fu7FyoyXnDhUtggUASB2rY0RLydZ1s31QrRkAQHbY3YAFHaCLbbFyxXH8OhqNrlqt1rP+9s1b7iD83PF9JL/nu1UmWMpb7a/3zZtm9QUA2fGzuup0OqVms3n311i50RoMBtf6ftk9ODfB2mXn4MLc++Gt/tcrscFyl4GhXdIRLQDIDFm4+I1Go9jtdm/TxsqNVrvdvhkOh1MTnLSfQGFjJcGLbfhky/yXAAMArROZmKA15RoAAAAASUVORK5CYII=) center 0 no-repeat;height:62px;line-height:50px;padding:12px 0 0;text-align:left;font-size:18px;font-family:MicrosoftYaHei-Bold;font-weight:700;color:rgba(25,25,25,1);overflow:hidden}:host>>>.alarm-content .top-title .content{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAawAAAABCAYAAACCPZooAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA39pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2OGIyMGJhZi0xYWJiLTdmNDctOGJjZi02YzI0N2MyZTJiMmQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Qjc0M0RGQzNFNDBDMTFFODg3NDdENzI5RTMyRUQyOEEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Qjc0M0RGQzJFNDBDMTFFODg3NDdENzI5RTMyRUQyOEEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmJjMzQ3MjI2LWZmOTktYmU0Ni1iMDE2LTIxNWQ4NWQzMzk5MSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjJjMTRhMTZlLTViMjctOTE0My05Mjk2LTIxZmI5ODVkMzc5YSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pj/HqeoAAAA3SURBVHjaYvz//z8DIyMjBwMDgwAQSwD55xlGwSgYBaNgFIyCAQbAuskQSL0A4g/AuukHQIABAJc/DP8nP3qeAAAAAElFTkSuQmCC) center 0 repeat-y;width:100%;margin:0 auto;padding:0 14px}:host>>>.alarm-content .top-title .content .right-link{float:right;font-size:14px;font-weight:400;color:#191919}:host>>>.alarm-content .top-title .content .right-link a{color:#191919}:host>>>.alarm-list{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAawAAAABCAYAAACCPZooAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA39pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2OGIyMGJhZi0xYWJiLTdmNDctOGJjZi02YzI0N2MyZTJiMmQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Qjc0M0RGQzNFNDBDMTFFODg3NDdENzI5RTMyRUQyOEEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Qjc0M0RGQzJFNDBDMTFFODg3NDdENzI5RTMyRUQyOEEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmJjMzQ3MjI2LWZmOTktYmU0Ni1iMDE2LTIxNWQ4NWQzMzk5MSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjJjMTRhMTZlLTViMjctOTE0My05Mjk2LTIxZmI5ODVkMzc5YSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pj/HqeoAAAA3SURBVHjaYvz//z8DIyMjBwMDgwAQSwD55xlGwSgYBaNgFIyCAQbAuskQSL0A4g/AuukHQIABAJc/DP8nP3qeAAAAAElFTkSuQmCC) center 0 repeat-y;padding:0 4px}:host>>>.alarm-list .content{border-top:1px solid #dededf;overflow-y:auto;overflow-x:hidden;height:250px}:host>>>.alarm-list .content .no-data{height:248px;line-height:248px;text-align:center}:host>>>.alarm-list table{width:410px;margin:0 auto;font-size:12px}:host>>>.alarm-list table tr td,:host>>>.alarm-list table tr th{font-size:14px;font-weight:400;height:38px;line-height:38px;text-align:left;vertical-align:middle;color:#191919}:host>>>.alarm-list table tr td:first-child{padding-left:15px;text-align:left}:host>>>.alarm-list table tr td:last-child{padding-right:15px;text-align:right}:host>>>.alarm-list table td a{color:#1e5bd6;font-weight:700}:host>>>.alarm-list table td span.alarm-icon{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABCklEQVQ4jaXTMUoDURSF4W/CmMY9DBG7YJGApWBERBQrdyBioStwC4JYWQ6Chb2F2AQRxFIQrcRG02UFEUMMFpnBMeSNiqd5xbn3v4f33o26SWJMDWxhGTX08YI2TvBcLI4KgCqOsIvKODXTAMfYx3sRUMUFVgKN42pjDR/5pMM/NMtqD/IEc3gIxN7EEOcTvAHqMXYCzfCGKODF2IvRKok6XQKAVozZfwBqcYn5G8BUjA7qgYL5HwZ0YtyWABaNLiukm6ibJE3cmfwS69l5OcEbolnBPdLAhFOcBbwUj8WvfIWFkrhFXWMDvTx23+h7plm0kPJlWkWP79uYq4FtLGEmg7/6WuenYvEniHo1pbDXNhgAAAAASUVORK5CYII=) no-repeat!important;width:16px;height:16px;display:block}:host>>>.alarm-list table tr:hover td{background:#d2ddf2;cursor:pointer}"]
                    }] }
        ];
        /** @nocollapse */
        AlarmComponent.ctorParameters = function () { return []; };
        AlarmComponent.propDecorators = {
            alarmList: [{ type: i0.Input }],
            alarmTotal: [{ type: i0.Input }],
            alarmTitle: [{ type: i0.Input }],
            viewAll: [{ type: i0.Output }]
        };
        return AlarmComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
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
            this.navHomeUrl = new i0.EventEmitter();
            this.navUrl = new i0.EventEmitter();
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
            { type: i0.Component, args: [{
                        selector: 'ecp-drop-down-menu',
                        template: "<span class=\"change-sys\" style=\"float: right\" (mouseleave)=\"changeOpen=false\">\r\n        <div class=\"title \" [ngClass]=\"{'bg':changeOpen}\" (mouseover)=\"changeOpen=true\">{{currentSys}}</div>\r\n        <ul style=\"display: none\" [@displayState]=\"changeOpen == true? 'block' : 'none'\">\r\n          <li class=\"index\" (click)=\"navHome()\">\u7CFB\u7EDF\u4E3B\u9875</li>\r\n          <li class=\"{{menu.iconuri}}\" *ngFor=\"let menu of menusList;let i=index\"\r\n              (click)=\"navSub(menu)\">{{menu.name}}</li></ul>\r\n</span>\r\n",
                        animations: [
                            animations.trigger('displayState', [
                                animations.state('none', animations.style({
                                    display: 'none', opacity: '0',
                                })),
                                animations.state('block', animations.style({
                                    display: 'block', opacity: '1',
                                })),
                                animations.transition('none => block', animations.animate('100ms linear')),
                                animations.transition('block => none', animations.animate('80ms linear'))
                            ])
                        ],
                        styles: [".change-sys{z-index:1000;margin-right:15px;height:32px;line-height:32px;display:block;float:right;position:relative}.change-sys .title{display:inline-block;float:right;color:#fff;height:50px;line-height:50px;text-align:right;padding-left:15px;padding-right:32px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAeCAYAAADOziUSAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAAAcElEQVRIx+3SMQqAMBBE0VkRco806XIWPamdns3qWwVEUaKkUNjppnkMy0qNElOma4VJkmOOOdYOAwKwcJ0FCNXiDVgNxZQ5gvPbRTFl+lLMbAVGSZMkkzSY2frkZv2+7EA9hU7YW6Tkw3/mmGN/wzY9A2lGL1XvVQAAAABJRU5ErkJggg==) right center no-repeat;cursor:pointer}.change-sys .bg{background-color:#22272e}.change-sys ul{position:absolute;right:0;top:51px;background:#fff;width:150px;padding:0;box-shadow:0 0 6px rgba(0,0,0,.4)}.change-sys ul li{list-style:none;color:#22272e;width:150px;height:50px;line-height:50px;text-align:left;display:block;padding-left:45px;cursor:pointer}.change-sys ul li.index{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAXCAYAAAARIY8tAAABuklEQVRIibWTzUrDQBSFz8SmaqlKFdSF0K2C+Aw+gSCKG8Ft/VuJmqBUsYKNIoKg1W4L3YiCb+DajWt3IgqKotXa1th2Ji5MSiZpakL0woXMvWfON8PcEHiJtKYAAGJEttRbATTrqzxihBktwa03SVGFUCYRyiSSogrXo0whlOX07DH3XAGaDioJgTFJYAx6Sk0HlYTRDxa/uPQECOyXZUK1OKEaLBkP7JdlABCL6pVYVGEkt7+RubinyqAs2UCSFPdUFBZalM6lhwEAku2ATjuDu6V5sIbmNUhwt1R4XQzJPTM3bdYmqbejZbswAyDlwtwcs6oUPuqbuhbuM/21KbIBWrfyMQDHHs2NmP5caU+bCxwgtPk+CSADD+NrCQZgqhTvyNoA4Y2cX3MOUliPZGuAtrWXMQAnf2Buhkx8JLrOSPvq8wiAUwDiH5kbUQEwHhCYVgUwoRcHAWz6NFYAXOrfVe6RI8uPwwAufAJGczu958aC+9EIZXa5z+AAAvtnAKGak+4OP5NhjahHgOMNhp4Oo2/WYvfcreOJ6gIEj2/gRs/fwOMbuNH7miI3ereP7AD4Xe9rTN3ovwFmj7Ca6g0P4gAAAABJRU5ErkJggg==) 10px center no-repeat;border-bottom:1px solid #bacbe1}.change-sys ul li.menu-1{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAVCAYAAABc6S4mAAACrUlEQVQ4jZ2VW0hUURSGv31mchiH0YYkowtdEDMiip6C0m4vvRRG0EsXioTIqAYMUxIlEwwzMiIpKCIhgigq6i2CiB4rurxIWAmZaWhqMQ2Ts9bpwTPT8TRjUws27L3Wf9ln78Nehqnikj0d2AFsBlYAxU5lEHgJ3Aeus9+MZpMwGZOd4geOAnVA4ZSbgDHgFNBuV/uSfzXwnR+PAHeBCic1DjwCHgJ9QBKYD2wANgF+B/cEqJRD00ayGvg7EiEHuNJJ3QTqktHAh0xb93ckyoBnQMhJvQAqktFALI1xEyzRTpf44Z81wfOZhAHyzsRnItrliI8AEYd7AdiT/oJAW+yxy2y1Mz+ZqA01pkCBtlgZUMXERQO8BiqZOKoWIOrw8536U0AA/JboWs/meoDm1CLY+j2KaDvgc2E2Aj+ALY5RAbAeuAgsBtakT8WI4hmt8fpwEiC/ZWybET1rRH0ezKARrTCi/UZ0nxG9Ea8PPzaip716XgM1ovcAQidGTCaCEe02oqt+NBQ+N6LnjKgxoscAjOgdI2pPMrBEcY3PsabIMIAlusQSXeiq3bJESyzR5bGmSG+4cXi7JVru1MIAsabIV0u0163pN2q7zz9Q0DDUAYDac135UWDnt5aiRPrvUPu4q95c0DDU5/DCbkG/lRT3ugg4wp/xZfRUccKdsJKS51puy8CZwBm1yWGURmoHUr8wkdqBcqP24py4M2r67WzunogDtwEL2AoEcyH5jWiO+gSBnbmC3QavnLkFLPtXgSzxBlDwPHbF1b1dwC4P+AHwLovQXP684GuDnQv2pBaTHjsjegBYyu8HD+DKwKVFdzOpz9r/fp3H4AVwcJKmlzS7qsfbD3KNJ0Bl/+WS7P0gFXP2vv2vjvbpaunfO5o75u3uzqknf+wqy9qTfwGL01GWRme9hgAAAABJRU5ErkJggg==) 10px center no-repeat}.change-sys ul li.menu-2{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAXVBMVEUAAAAQd+gQdugKhPEXad8DkfoClfwPeeoSdOYBmP8Clf0Dk/sKhPEXad8MgO8VbeIEkfoClfwIh/QNfe0aY9wcXtgFj/kScuYVbuMXaN8ClPwHi/YLgvAQeOkBmP9ioV3GAAAAEnRSTlMAQL+AgECAz8+/v7+fn3BwMCBq18XAAAAAg0lEQVQoz4XL2w7CIBBFUVCx99Z6QxT8/890puIckklkPUAOO5if7r3pTOFI1v656VdeOfCDG75hcHzmcCfu5BhdvBBKCC8lh7NSCzHGcS9GmgizFTPCRamFlFKzEw1NBGuERfDet/jR0kQoITwUhMWKBSGEMB3ERBOhhHBVauGm/AsfPGEdMX6iTWAAAAAASUVORK5CYII=) 10px center no-repeat}.change-sys ul li.menu-3{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAhFBMVEUAAAAEkfoYZ94aYtsKg/EWbOEOfOwaY9sEkfoYZ94ClfwBl/4SdOYGjfcBl/4SdOcOfOwAmf8ClfwSdOYYZ94OfOwYZ94aY9scX9kUcOQYZ94SdOYWbOEOfOwGjfcKhPESdOYWbOEIiPQMgO8PeOoUcOQAmf8ClfwEkfoYZ94aY9scX9kbVSd6AAAAHXRSTlMA0NCQ+VgY9+rqzJCLgYB+bhAF5s7JvICATk0/Kbi7C7oAAACWSURBVCjPjdDHEsIwDATQhfSQkEIvKUDo//9/SBywnJFneKf17snCjcxgmXOHOxkP3OFB4okl5g6tA84O6BxwEXyR0RirRsBgFIOA/mdx6AVcjWInHjgJx8BkPEkyZes9wiWHhDu8iAfLhju8yWjYcod/VBVUdZrW0ORtm0MR+l3nh8pQNqRUhqwnmTJ8zxFA4UWR+OkHQz8mo91TktwAAAAASUVORK5CYII=) 10px center no-repeat}.change-sys ul li.menu-4{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAkFBMVEUAAAATcuYYad8Mfu4TceUaYtsIh/QAmP4Dk/sBlf0Nfe0bYdsClfwAmf8Blv0EkfkClfwTceQBmP4ClfwXauAYZ94ClfwNfu0SdOcHi/YKhfIXauAEkPkClfwAmf8Amf8Amf8Fj/kGjPcJhvMPeusaZNwcXtkMgO8RdegXauAUbuQEkPkClf0Lg/ETceUYZ94ptDkqAAAAInRSTlMAQIBAv0BAEL9Av7+vYGAw7+/f39/fz8/Pv7+/n49wMCAguTdrBQAAAJtJREFUKM+NydcOgkAURdEzAg4gxd4rvYzw/3/naG5CLo6J63FvmEVLmHgrpUzZVcowHuf2AyNxQjAy/TlS8v94EoxYJfkeO0szjIwAtxC4XwEZSkhvGLFSkZyrC7YqQOCKiqBl9NgLTY+EOYhuYWtdh5Q5ioagZHxRE2SM79TriaZHxdhOv3mPvkfD2E5OUDOnYeTMzCkICmYYL15aLx3SvXmGAAAAAElFTkSuQmCC) 10px center no-repeat}.change-sys ul li.menu-5{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAmVBMVEUAAAARdOcNfe0XaeADk/wClv0PeuoVbuIYad8IiPUFj/gFkPkDlPwMf+4Qd+kVbeMQeeoDk/sClv0GjvgLg/EYZ94Gj/gTceQHivUOfOsBmP4ClfwEkfoAmf8Amf8JhvIEkfoGjfcAmf8cXtgWbOENfu0LgvAJhvMbYtsZZt0HivUTceURdugGjvgPeuoBl/4Dk/sYZ94Fj/m4XanxAAAAI3RSTlMAgEC/gL+fgIC/n+/fv7+/gBDvz8/Pv5+AcGBgYFBAMCAgEFminxgAAAC8SURBVCjPdc7ZkoIwEEbhY2SUUWfU2fdFW1yCEX3/hzMdghdBvgvqp06lqmn5OHg3tGWdofKuhpOibbRXtN3u1LWwVp3hl9riG/UDPBXKoObZg973OTkAxSX8jcZVlc2/Jv5+YBUY/uvzHsf6fbmEd3aJNxfMWCfuymBGkYihxypxb4NXnBuYgXPGxBHDFH3VK0uaYSWYYq3/t5ZmSK2PyJChCM2QY/CMj3lfJM/jOG5rbBObiE1iGbHscAb8MDRwhQ/7pgAAAABJRU5ErkJggg==) 10px center no-repeat}.change-sys ul li.menu-6{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAjVBMVEUAAAAAl/4RdecBlf0Hi/YIh/QNf+4ZZd0VbeIEkfoEkfoAmf8Wa+AJhvIJhvIUcOQGjPYZZd0ClPwAmf8Fj/gClPwBlv0PeusClPwYaN8Fj/gEkfoAmf8UcOQJh/MKhPEcX9kRdugUb+MXaeAKgvEMf+4OfewaY9sPeusTcuUZZd0Ck/wFjvgIifUJh/Ouc4p8AAAAIHRSTlMA/kD1wJEJ9e/l3tjV0MC2pZyUiWBXT0xGODEjGBKAgPdbWmkAAAChSURBVCjPdclXDoMwFETRoYSe0DukQaoN+19eEAp+TiSfrxldbLrU1zQ/7fCnMLSVUeBHxZiR5HliMFZBYrnMa7FoPeZaIBnnDVYN5xlIxM1tmjwCMafdNneTCXKYRTjOezmMIpzGbxgVcFPAXQFPUpbSwYXounTU4UV0XTq4CmHfh/QoOBZgORSGTYBFIC4GoQZqengLdhzb9PBQwFlBGT5MMTUWigYuWAAAAABJRU5ErkJggg==) 10px center no-repeat}.change-sys ul li.menu-7{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAb1BMVEUAAAAAmf8YaN8dXdcGjPYMgO8HifUOfOwEkPoKhPEbYNoNfu0QeekeXNYaYtsOfOwYZ94YZ94ClPwYaN4QeOkQeeoSdOcUbuMDk/wKhPEBl/4XauAGjvgHi/YJiPQNf+4OfOwQeeodXtgZZd0bYdpuHx3eAAAAFnRSTlMAv0C/MDDvv+/vgO/vYEDPz5+AcGBAueGEAwAAAIhJREFUKM+VyUkWgyAURNGKirFN32AiCsH9rzGfAckB/APvrOphux0DLwakvFRyBWRVFGsF41hSGRNQSlEpVQwTcWWKYCC1EPUQgf9jmOdWiHZOQGv6NTnuHe3BdLfOOHc4xsODwYcngw9vBjLvZLPsas9+4ie3wME2SOQLhSUMzSfwj30e6EG+JmInSEQNhbgAAAAASUVORK5CYII=) 10px center no-repeat}.change-sys ul li.menu-10,.change-sys ul li.menu-11,.change-sys ul li.menu-8,.change-sys ul li.menu-9{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAASFBMVEUAAAAYZt4OfOwQeOkbYdobYdoOfOwYZt0QeekKhvIdXdcBl/4Hi/UTceUNfu4XaN8EkvsFj/gLgvARdugWbOIKhvIQeeoaYtv+8vvLAAAAC3RSTlMAv79AMO/v78+/39SOGsAAAABcSURBVCjPrcnJDoAgFEPRqozOE/D/fyqYwOIljRvPrr340UTwsBM4CMwEDyEED8HnEyeBlSjB9IIpIcboBsHlExeBheDhJrAR6Cr7blsnGqVTSlpBKqX9sowK3x7PcxS5bwuZ0AAAAABJRU5ErkJggg==) 10px center no-repeat}.change-sys ul li:hover{background-color:#e8eefb}"]
                    }] }
        ];
        /** @nocollapse */
        DropDownMenuComponent.ctorParameters = function () { return []; };
        DropDownMenuComponent.propDecorators = {
            menusList: [{ type: i0.Input }],
            currentSys: [{ type: i0.Input }],
            navHomeUrl: [{ type: i0.Output }],
            navUrl: [{ type: i0.Output }]
        };
        return DropDownMenuComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
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
            { type: i0.Component, args: [{
                        selector: 'ecp-user-info',
                        template: "<span class=\"user\">\r\n  <span class=\"header\"><img src=\"{{userHader}}\"/></span>\r\n  <span class=\"name\">{{userName}}</span>\r\n</span>\r\n",
                        styles: [".user{padding:0;margin-right:10px;margin-top:7px;float:right!important;color:#fff}.user .header{width:37px;height:37px;display:inline-block;float:left}.user .name{padding:0 8px;height:37px;line-height:37px;margin:0;vertical-align:middle;display:table-cell;float:left;font-size:14px;font-weight:700}"]
                    }] }
        ];
        /** @nocollapse */
        UserInfoComponent.ctorParameters = function () { return []; };
        UserInfoComponent.propDecorators = {
            userHader: [{ type: i0.Input }],
            userName: [{ type: i0.Input }]
        };
        return UserInfoComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
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
            { type: i0.Component, args: [{
                        selector: 'ecp-user-info-list',
                        template: "<span class=\"user-info-list\" style=\"float: right\" (mouseleave)=\"changeOpen=false\">\r\n  <div class=\"header\" [ngClass]=\"{'bg':changeOpen}\" (mouseover)=\"changeOpen=true\">\r\n        <img src=\"{{userHader}}\"/></div>\r\n        <ul style=\"display: none\" [@displayState]=\"changeOpen == true? 'block' : 'none'\">\r\n          <ng-content></ng-content>\r\n          <!--<li (click)=\"nav('\u59D3\u540D')\">\u674E\u5148\u751F</li>\r\n          <li (click)=\"nav('\u4FEE\u6539\u5BC6\u7801')\">\u4FEE\u6539\u5BC6\u7801</li>\r\n          <li (click)=\"nav('\u9000\u51FA')\">\u9000\u51FA</li>-->\r\n        </ul>\r\n</span>\r\n",
                        animations: [
                            animations.trigger('displayState', [
                                animations.state('none', animations.style({
                                    display: 'none', opacity: '0',
                                })),
                                animations.state('block', animations.style({
                                    display: 'block', opacity: '1',
                                })),
                                animations.transition('none => block', animations.animate('100ms linear')),
                                animations.transition('block => none', animations.animate('80ms linear'))
                            ])
                        ],
                        styles: [":host>>>.user-info-list{z-index:1000;margin-right:15px;height:32px;line-height:32px;display:block;float:right;position:relative}:host>>>.user-info-list .header{width:52px;height:50px;padding-top:7px;display:inline-block;float:left;text-align:center}:host>>>.user-info-list .header img{margin:0 auto}:host>>>.user-info-list .bg{background-color:#22272e}:host>>>.user-info-list ul{position:absolute;right:0;top:50px;background:#22272e;color:#dadada;width:125px;padding:0;box-shadow:0 0 6px rgba(0,0,0,.4)}:host>>>.user-info-list ul li{list-style:none;color:#dadada;width:125px;height:42px;line-height:42px;text-align:left;display:block;padding-left:10px;cursor:pointer;border-bottom:1px solid #303844}:host>>>.user-info-list ul li:last-child{border-bottom-width:0}:host>>>.user-info-list ul li:hover{background-color:#2768ec}"]
                    }] }
        ];
        /** @nocollapse */
        UserInfoListComponent.ctorParameters = function () { return []; };
        UserInfoListComponent.propDecorators = {
            userHader: [{ type: i0.Input }]
        };
        return UserInfoListComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var DropDownGroupMenuComponent = /** @class */ (function () {
        /*
        
            menusGroupList = [{
                'menuid': 96000000,
                'parentid': 0,
                'name': '消息中心',
                'uri': '/sign',
                'iconuri': 'message',
                'havechild': true,
                'child': null,
                'introduction': '统一管理系统发送的邮件，短信，微信等来往信息',
                'sys_type': 'tool'
            }{
                'menuid': 96000000,
                'parentid': 0,
                'name': '消息中心1',
                'uri': '/sign',
                'iconuri': 'message',
                'havechild': true,
                'child': null,
                'introduction': '统一管理系统发送的邮件，短信，微信等来往信息',
                'sys_type': 'tool'
            }{
                'menuid': 96000000,
                'parentid': 0,
                'name': '消息中心2',
                'uri': '/sign',
                'iconuri': 'message',
                'havechild': true,
                'child': null,
                'introduction': '统一管理系统发送的邮件，短信，微信等来往信息',
                'sys_type': 'tool'
            }, {
                'menuid': 97000000,
                'parentid': 0,
                'name': '公共配置',
                'uri': '/sign',
                'iconuri': 'configuration',
                'havechild': true,
                'child': null,
                'introduction': '配置邮件、短信、报表、微信等公共组件接入和模板信息',
                'sys_type': 'tool'
            }, {
                'menuid': 98000000,
                'parentid': 0,
                'name': '管漏管理',
                'uri': '/pls/management',
                'iconuri': 'pipe',
                'havechild': true,
                'child': null,
                'introduction': '主要包括管漏系统基本信息统计，管漏用户管理，管漏客户管理，流量计管理等功能',
                'sys_type': 'sys'
            }, {
                'menuid': 99000000,
                'parentid': 0,
                'name': '权限管理',
                'uri': '/sign',
                'iconuri': 'authority_management',
                'havechild': true,
                'child': null,
                'introduction': '主要包括登录帐号管理，水司管理，报表绑定，打印绑定，短信模板，公众号配置等功能',
                'sys_type': 'sys'
            }];
        */
        function DropDownGroupMenuComponent() {
            this.changeOpen = false;
            this.currentSys = '切换系统';
            this.navHomeUrl = new i0.EventEmitter();
            this.navUrl = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        DropDownGroupMenuComponent.prototype.navHome = /**
         * @return {?}
         */
            function () {
                this.navHomeUrl.emit();
            };
        /**
         * @param {?} id
         * @return {?}
         */
        DropDownGroupMenuComponent.prototype.navSub = /**
         * @param {?} id
         * @return {?}
         */
            function (id) {
                this.navUrl.emit(id);
            };
        /**
         * @return {?}
         */
        DropDownGroupMenuComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        DropDownGroupMenuComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ecp-drop-down-group-menu',
                        template: "<span class=\"change-sys\" style=\"float: right\" (mouseleave)=\"changeOpen=false\">\n        <div class=\"title \" [ngClass]=\"{'bg':changeOpen}\" (mouseover)=\"changeOpen=true\">{{currentSys}}</div>\n        <ul style=\"display: none\" [@displayState]=\"changeOpen == true? 'block' : 'none'\">\n             <li class=\"item\" (click)=\"navHome()\"><div class=\"index\"><i class=\"icon dongxiniotwater revenue_home\"></i>\u7CFB\u7EDF\u4E3B\u9875</div></li>\n             <li class=\"item\">\n                 <span class=\"item-title\">\u4EA7\u54C1</span>\n                 <ol>\n                     <ng-container *ngFor=\"let menu of menusList;let i=index\">\n                        <li (click)=\"navSub(menu)\" *ngIf=\"menu.systype=='sys'\"><i class=\"icon dongxiniotwater {{menu.iconuri}}\"></i>{{menu.name}}</li>\n                     </ng-container>\n                 </ol>\n             </li>\n              <li class=\"item\">\n                 <span class=\"item-title\">\u5DE5\u5177</span>\n                 <ol>\n                     <ng-container *ngFor=\"let menu of menusList;let i=index\">\n                        <li (click)=\"navSub(menu)\" *ngIf=\"menu.systype=='tool'\"><i class=\"icon dongxiniotwater {{menu.iconuri}}\"></i>{{menu.name}}</li>\n                     </ng-container>\n                 </ol>\n             </li>\n        </ul>\n    <!--\n              <li class=\"index\" (click)=\"navHome()\">\u7CFB\u7EDF\u4E3B\u9875</li>\n              <li class=\"{{menu.iconuri}}\" *ngFor=\"let menu of menusList;let i=index\"\n                  (click)=\"navSub(menu)\">{{menu.name}}</li>\n        -->\n</span>\n",
                        animations: [
                            animations.trigger('displayState', [
                                animations.state('none', animations.style({
                                    display: 'none', opacity: '0',
                                })),
                                animations.state('block', animations.style({
                                    display: 'block', opacity: '1',
                                })),
                                animations.transition('none => block', animations.animate('100ms linear')),
                                animations.transition('block => none', animations.animate('80ms linear'))
                            ])
                        ],
                        styles: ["li,ol,ul{padding:0;margin:0;list-style:none}.change-sys{z-index:1000;margin-right:15px;height:32px;line-height:32px;display:block;float:right;position:relative}.change-sys .title{display:inline-block;float:right;color:#fff;height:50px;line-height:50px;text-align:right;padding-left:15px;padding-right:32px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAeCAYAAADOziUSAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAAAcElEQVRIx+3SMQqAMBBE0VkRco806XIWPamdns3qWwVEUaKkUNjppnkMy0qNElOma4VJkmOOOdYOAwKwcJ0FCNXiDVgNxZQ5gvPbRTFl+lLMbAVGSZMkkzSY2frkZv2+7EA9hU7YW6Tkw3/mmGN/wzY9A2lGL1XvVQAAAABJRU5ErkJggg==) right center no-repeat;cursor:pointer}.change-sys .bg{background-color:#22272e}.change-sys ul{position:absolute;right:0;top:50px;background:#22272e;width:150px;padding:0;box-shadow:0 0 6px rgba(0,0,0,.4)}.change-sys ul>li.item{list-style:none;color:#dadada;width:150px;text-align:left;display:block;cursor:pointer;border-bottom:1px solid #303844}.change-sys ul>li.item .index{height:42px;line-height:42px;font-size:14px;padding-left:15px}.change-sys ul>li.item .item-title{height:28px;line-height:28px;font-size:12px;color:#6e6e6e;padding-left:11px}.change-sys ul>li.item ol{font-size:14px;padding-bottom:4px}.change-sys ul>li.item ol>li{padding-left:15px;height:32px;line-height:32px}.change-sys ul>li.item ol>li:hover{background:#2768ec}.change-sys ul>li.item i{margin-right:10px}"]
                    }] }
        ];
        /** @nocollapse */
        DropDownGroupMenuComponent.ctorParameters = function () { return []; };
        DropDownGroupMenuComponent.propDecorators = {
            menusList: [{ type: i0.Input }],
            currentSys: [{ type: i0.Input }],
            navHomeUrl: [{ type: i0.Output }],
            navUrl: [{ type: i0.Output }]
        };
        return DropDownGroupMenuComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var DropDownGroupMenuPlusComponent = /** @class */ (function () {
        function DropDownGroupMenuPlusComponent() {
            this.changeOpen = false;
            this.currentSys = '切换系统';
            this.navHomeUrl = new i0.EventEmitter();
            this.navUrl = new i0.EventEmitter();
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
            { type: i0.Component, args: [{
                        selector: 'ecp-drop-down-group-menu-plus',
                        template: "<span class=\"change-sys\" style=\"float: right\" (mouseleave)=\"changeOpen=false\">\n        <div class=\"title \" [ngClass]=\"{'bg':changeOpen}\" (mouseover)=\"changeOpen=true\">{{currentSys}}</div>\n        <ul style=\"display: none\" [@displayState]=\"changeOpen == true? 'block' : 'none'\">\n             <li class=\"item\" (click)=\"navHome()\"><div class=\"index\"><i class=\"icon dongxiniotwater revenue_home\"></i>\u7CFB\u7EDF\u4E3B\u9875</div></li>\n             <li class=\"item\" *ngIf=\"desk['sys']\">\n                 <span class=\"item-title\">\u4EA7\u54C1</span>\n                 <ol>\n                     <ng-container *ngFor=\"let menu of menusList;let i=index\">\n                        <li (click)=\"navSub(menu)\" *ngIf=\"menu.systype=='sys'\"><i class=\"icon dongxiniotwater {{menu.iconuri}}\"></i>{{menu.name}}</li>\n                     </ng-container>\n                 </ol>\n             </li>\n              <li class=\"item\" *ngIf=\"desk['tool']\">\n                 <span class=\"item-title\">\u5DE5\u5177</span>\n                 <ol>\n                     <ng-container *ngFor=\"let menu of menusList;let i=index\">\n                        <li (click)=\"navSub(menu)\" *ngIf=\"menu.systype=='tool'\"><i class=\"icon dongxiniotwater {{menu.iconuri}}\"></i>{{menu.name}}</li>\n                     </ng-container>\n                 </ol>\n             </li>\n        </ul>\n  <!--\n            <li class=\"index\" (click)=\"navHome()\">\u7CFB\u7EDF\u4E3B\u9875</li>\n            <li class=\"{{menu.iconuri}}\" *ngFor=\"let menu of menusList;let i=index\"\n                (click)=\"navSub(menu)\">{{menu.name}}</li>\n      -->\n</span>\n",
                        animations: [
                            animations.trigger('displayState', [
                                animations.state('none', animations.style({
                                    display: 'none', opacity: '0',
                                })),
                                animations.state('block', animations.style({
                                    display: 'block', opacity: '1',
                                })),
                                animations.transition('none => block', animations.animate('100ms linear')),
                                animations.transition('block => none', animations.animate('80ms linear'))
                            ])
                        ],
                        styles: ["li,ol,ul{padding:0;margin:0;list-style:none}.change-sys{z-index:1000;margin-right:15px;height:32px;line-height:32px;display:block;float:right;position:relative}.change-sys .title{display:inline-block;float:right;color:#fff;height:50px;line-height:50px;text-align:right;padding-left:15px;padding-right:32px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAeCAYAAADOziUSAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAAAcElEQVRIx+3SMQqAMBBE0VkRco806XIWPamdns3qWwVEUaKkUNjppnkMy0qNElOma4VJkmOOOdYOAwKwcJ0FCNXiDVgNxZQ5gvPbRTFl+lLMbAVGSZMkkzSY2frkZv2+7EA9hU7YW6Tkw3/mmGN/wzY9A2lGL1XvVQAAAABJRU5ErkJggg==) right center no-repeat;cursor:pointer}.change-sys .bg{background-color:#22272e}.change-sys ul{position:absolute;right:0;top:50px;background:#22272e;width:150px;padding:0;box-shadow:0 0 6px rgba(0,0,0,.4)}.change-sys ul>li.item{list-style:none;color:#dadada;width:150px;text-align:left;display:block;cursor:pointer;border-bottom:1px solid #303844}.change-sys ul>li.item .index{height:42px;line-height:42px;font-size:14px;padding-left:15px}.change-sys ul>li.item .item-title{height:28px;line-height:28px;font-size:12px;color:#6e6e6e;padding-left:11px}.change-sys ul>li.item ol{font-size:14px;padding-bottom:4px}.change-sys ul>li.item ol>li{padding-left:15px;height:32px;line-height:32px}.change-sys ul>li.item ol>li:hover{background:#2768ec}.change-sys ul>li.item i{margin-right:10px}"]
                    }] }
        ];
        /** @nocollapse */
        DropDownGroupMenuPlusComponent.ctorParameters = function () { return []; };
        DropDownGroupMenuPlusComponent.propDecorators = {
            menusList: [{ type: i0.Input }],
            currentSys: [{ type: i0.Input }],
            navHomeUrl: [{ type: i0.Output }],
            navUrl: [{ type: i0.Output }]
        };
        return DropDownGroupMenuPlusComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NavBarComponent = /** @class */ (function () {
        /*
      
          menus: Array<any> = [
            {
              'name': '基本组件',
              'uri': '',
              'iconuri': 'pipe_area',
              'child': [
                {
                  'name': '左边导航',
                  'uri': 'navBarPage',
                  'iconuri': '',
                  'child': null
                },
                {
                  'name': '顶部导航',
                  'uri': 'topNavPage',
                  'iconuri': '',
                  'child': null
                },
                {
                  'name': '页面左边导航',
                  'uri': 'pageLeftNavPage',
                  'iconuri': '',
                  'child': null
                },
                {
                  'name': '开关切换',
                  'uri': 'switchPage',
                  'iconuri': '',
                  'child': null
                },
                {
                  'name': '面包屑',
                  'uri': 'breadCrumbPage',
                  'iconuri': '',
                  'child': null
                },
                {
                  'name': '步骤条',
                  'uri': 'stepsInfo',
                  'iconuri': '',
                  'child': null
                },
                {
                  'name': '工具条',
                  'uri': 'toolBarPage',
                  'iconuri': '',
                  'child': null
                }
                ,
                {
                  'name': '搜索模块',
                  'uri': 'seachModulePage',
                  'iconuri': '',
                  'child': null
                }
                ,
                {
                  'name': '弹出详情',
                  'uri': 'openDetailsInfo',
                  'iconuri': '',
                  'child': null
                }
                ,
                {
                  'name': '弹出详情2',
                  'uri': 'openDetailsInfo2',
                  'iconuri': '',
                  'child': null
                },
                {
                  'name': '地图用组件',
                  'uri': 'dotRipplePage',
                  'iconuri': '',
                  'child': null
                },
                {
                  'name': '侧边栏弹出',
                  'uri': 'popupSidebarPage',
                  'iconuri': '',
                  'child': null
                },
                {
                  'name': '标签页',
                  'uri': 'tabsPage',
                  'iconuri': '',
                  'child': null
                },
                {
                  'name': '状态条',
                  'uri': 'statusBarPage',
                  'iconuri': '',
                  'child': null
                }
      
              ]
            },
            {
              'name': '布局组件',
              'uri': '',
              'iconuri': 'pipe_area',
              'child': [
                {
                  'name': '布局演示',
                  'uri': 'layoutDemoPage',
                  'iconuri': '',
                  'child': null
                },
                {
                  'name': '上中下',
                  'uri': 'flexTopCenterBottom',
                  'iconuri': '',
                  'child': null
                },
                {
                  'name': '左中右',
                  'uri': 'flexleftCenterRight',
                  'iconuri': '',
                  'child': null
                }
              ]
            },
            {
              'name': '数据展示',
              'uri': '',
              'iconuri': 'pipe_area',
              'child': [
                {
                  'name': '登录界面',
                  'uri': 'loginPage',
                  'iconuri': '',
                  'child': null
                },
                {
                  'name': '系统切换',
                  'uri': 'homePage',
                  'iconuri': '',
                  'child': null
                },
                {
                  'name': '页面演示1',
                  'uri': 'pageDemo',
                  'iconuri': '',
                  'child': null
                },
                {
                  'name': '页面演示3',
                  'uri': 'pageDemo3',
                  'iconuri': '',
                  'child': null
                },
                {
                  'name': '页面演示2',
                  'uri': 'detailsStyle1',
                  'iconuri': '',
                  'child': null
                },
                {
                  'name': '表格展示1',
                  'uri': 'dataDemoPage',
                  'iconuri': '',
                  'child': null
                },
                {
                  'name': '表格展示',
                  'uri': 'tablePage',
                  'iconuri': '',
                  'child': null
                }
                ,
                {
                  'name': '图标演示',
                  'uri': 'iconPage',
                  'iconuri': '',
                  'child': null
                },
                {
                  'name': '标签页（传递模板）',
                  'uri': 'ecpTabset',
                  'iconuri': '',
                  'child': null
                },
                {
                  'name': '404/500页面',
                  'uri': 'httpPage',
                  'iconuri': '',
                  'child': null
                }
                ,
                {
                  'name': '生成帐单',
                  'uri': 'generateBillPage',
                  'iconuri': '',
                  'child': null
                },
                {
                  'name': '弹窗演示',
                  'uri': 'waterConsumptionAnalysisPopup',
                  'iconuri': '',
                  'child': null
                }
                ,
                {
                  'name': '组件联动',
                  'uri': 'pageDemo2',
                  'iconuri': '',
                  'child': null
                },
                {
                  'name': '调度中心',
                  'uri': 'dispatchPage',
                  'iconuri': '',
                  'child': null
                }
                ,
                {
                  'name': '控制台主页',
                  'uri': 'consolePage',
                  'iconuri': '',
                  'child': null
                }
              ]
            },
            {
              'name': '关于',
              'uri': 'about',
              'iconuri': 'pipe_report',
              'child': []
            }
          ];
      
        */
        function NavBarComponent(router$$1) {
            this.router = router$$1;
            this.ecpStyle = {};
            this.menuList = [];
            this.goTo = new i0.EventEmitter();
            this.menuStatus = 'off';
            this.hoverId = 0;
            this.selectId = 0;
            this.thisMenuId = 0;
            this.hisHover = 0;
        }
        /**
         * @return {?}
         */
        NavBarComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                if (this.customScaling == null) {
                    this.customScaling = true;
                }
            };
        // 菜单选中
        /**
         * @param {?} id
         * @return {?}
         */
        NavBarComponent.prototype.hoverMenu = /**
         * @param {?} id
         * @return {?}
         */
            function (id) {
                if (this.hoverId === id) {
                    this.hoverId = null;
                }
                else {
                    this.hoverId = id;
                }
            };
        // 移上去的
        /**
         * @param {?} id
         * @return {?}
         */
        NavBarComponent.prototype.selectMenu = /**
         * @param {?} id
         * @return {?}
         */
            function (id) {
                this.selectId = id;
            };
        // 清除选中
        /**
         * @return {?}
         */
        NavBarComponent.prototype.cleanSel = /**
         * @return {?}
         */
            function () {
                this.selectId = null;
            };
        // 展开
        /**
         * @return {?}
         */
        NavBarComponent.prototype.on = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var self = this;
                if (self.menuStatus === 'off') {
                    self.hoverId = self.hisHover;
                    self.menuStatus = 'on';
                }
            };
        // 收缩
        /**
         * @return {?}
         */
        NavBarComponent.prototype.off = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var self = this;
                self.hisHover = self.hoverId;
                if (self.customScaling == true) {
                    this.menuStatus = 'off';
                }
            };
        /**
         * @param {?} i
         * @return {?}
         */
        NavBarComponent.prototype.showChildMenu = /**
         * @param {?} i
         * @return {?}
         */
            function (i) {
                if (i === this.hoverId && this.menuStatus === 'on') {
                    return 'block';
                }
                else {
                    return 'none';
                }
            };
        /**
         * @param {?} uri
         * @param {?} hoverId
         * @return {?}
         */
        NavBarComponent.prototype.selectedApp = /**
         * @param {?} uri
         * @param {?} hoverId
         * @return {?}
         */
            function (uri, hoverId) {
                /** @type {?} */
                var self = this;
                this.goTo.emit(uri);
                if (hoverId == null || hoverId == '') {
                    self.thisMenuId = 0;
                }
                self.thisMenuId = hoverId;
                // console.log('click');
                // self.router.navigate([uri]);
                return false;
            };
        NavBarComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ecp-nav-bar',
                        template: "<nav class=\"main-menu\" [ngClass]=\"{'on':!customScaling}\" [ngStyle]=\"ecpStyle\" (mouseleave)=\"off()\" (mouseover)=\"on()\">\r\n    <!--\u5DE6\u8FB9\u56FE\u6807-->\r\n    <ul class=\"menu-body\">\r\n        <ng-container *ngFor=\"let menu of menuList;let i=index;\">\r\n            <li [ngClass]=\"{'select':i==selectId,'hover':i==hoverId}\">\r\n                <div class=\"menu-title\" [ngClass]=\"{'select':i==selectId,'hover':i==hoverId}\"\r\n                     (click)=\"hoverMenu(i);selectedApp(menu.uri,i)\" (mouseover)=\"selectMenu(i)\"\r\n                     (mouseout)=\"cleanSel()\">\r\n                    <i class=\"icon dongxiniotwater {{menu.iconuri}}\"></i>{{menu.name}}\r\n                    <i class=\"right icon dongxiniotwater\"\r\n                       [ngClass]=\"{'general_fold':hoverId==i,'general_unfold':hoverId!=i||hoverId==null}\"\r\n                       *ngIf=\"menu.havechild==true\"></i>\r\n                </div>\r\n                <ul *ngIf=\"menu.havechild==true\" class=\"menu-sub\" [@displayState]=\"showChildMenu(i)\">\r\n                    <ng-container *ngFor=\"let childmenu of menu.child; let childId = index;\">\r\n                        <li class=\"hover\" (click)=\"selectedApp(childmenu.uri,childId)\"\r\n                            [ngClass]=\"{'hover':childId==thisMenuId}\" (mouseover)=\"selectMenu(i)\"\r\n                            (mouseout)=\"cleanSel()\">\r\n                            {{childmenu.name}}\r\n                        </li>\r\n                    </ng-container>\r\n                </ul>\r\n            </li>\r\n        </ng-container>\r\n    </ul>\r\n</nav>\r\n\r\n\r\n\r\n\r\n\r\n",
                        animations: [
                            animations.trigger('displayState', [
                                animations.state('none', animations.style({
                                    height: 0, display: 'none', opacity: '0',
                                })),
                                animations.state('block', animations.style({
                                    height: '*', display: 'block', opacity: '1',
                                })),
                                animations.transition('none => block', animations.animate('100ms linear')),
                                animations.transition('block => none', animations.animate('100ms linear'))
                            ])
                        ],
                        styles: [".main-menu.hover,.main-menu.on,.main-menu:hover{width:220px;overflow:hidden;opacity:1}.main-menu.off{width:60px;overflow:hidden;opacity:1}.main-menu{background:#22272e;color:#fff;position:absolute;top:0;bottom:0;left:0;width:60px;overflow:hidden;transition:width .2s linear;-webkit-transform:translateZ(0) scale(1,1);opacity:1;z-index:1000}.main-menu>ul{margin:0}.main-menu li{position:relative;display:block;width:220px}nav{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none}nav li,nav ul{outline:0;margin:0;padding:0}.main-menu .menu-body{height:100%}.main-menu .menu-body li{width:220px;min-height:42px;line-height:42px;clear:both;text-align:center}.main-menu .menu-body li .menu-title{height:42px;line-height:42px;text-align:left;cursor:pointer;color:#999;font-weight:700}.main-menu .menu-body li .menu-title i{width:60px;float:left;text-align:center;margin-right:0;font-size:18px;font-weight:400}.main-menu .menu-body li .menu-title i.right{margin-top:0;width:13px;height:13px;float:right;margin-right:15px;font-size:12px;font-weight:400}.main-menu .menu-body li .menu-title i.on{margin-top:16px;width:13px;height:13px;float:right;margin-right:15px;font-size:12px;font-weight:400}.main-menu .menu-body li .menu-title.select{background:#1979ff;color:#fff}.main-menu .menu-body li .menu-title.hover{background:#1e5bd6;color:#fff}.menu-sub{background:#181b1f}.menu-sub li{height:42px;line-height:42px;color:#999;cursor:pointer;text-align:left!important;padding-left:60px}.menu-sub li:hover{background:#111214;color:#fff}.menu-sub li.hover{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAAAdElEQVQY04XOwQnCQBQE0JetwApyE2Er2ALEJtKIkHtII3tNAWIBVhAC3raCgA14cA8qER/MZT58poG2m/cYcfRyxbnkeG/abj7ghp1PK1LAsHFUuyG8vd1yCv4IddAvl4C+Dvq2og8lxwUJEx41E1LJcXkCWCIYS4tT67sAAAAASUVORK5CYII=) 25px center no-repeat #111214;color:#fff}"]
                    }] }
        ];
        /** @nocollapse */
        NavBarComponent.ctorParameters = function () {
            return [
                { type: router.Router }
            ];
        };
        NavBarComponent.propDecorators = {
            customScaling: [{ type: i0.Input }],
            ecpStyle: [{ type: i0.Input }],
            menuList: [{ type: i0.Input }],
            goTo: [{ type: i0.Output }]
        };
        return NavBarComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var FlexTopComponent = /** @class */ (function () {
        function FlexTopComponent() {
        }
        /**
         * @return {?}
         */
        FlexTopComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        FlexTopComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ecp-flex-top',
                        template: "\n    <ng-content></ng-content>\n  "
                    }] }
        ];
        /** @nocollapse */
        FlexTopComponent.ctorParameters = function () { return []; };
        return FlexTopComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var FlexBottomComponent = /** @class */ (function () {
        function FlexBottomComponent() {
        }
        /**
         * @return {?}
         */
        FlexBottomComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        FlexBottomComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ecp-flex-bottom',
                        template: "\n    <ng-content></ng-content>\n  "
                    }] }
        ];
        /** @nocollapse */
        FlexBottomComponent.ctorParameters = function () { return []; };
        return FlexBottomComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var FlexBodyComponent = /** @class */ (function () {
        function FlexBodyComponent() {
        }
        /**
         * @return {?}
         */
        FlexBodyComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        FlexBodyComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ecp-flex-body',
                        template: "\n    <ng-content></ng-content>\n  "
                    }] }
        ];
        /** @nocollapse */
        FlexBodyComponent.ctorParameters = function () { return []; };
        return FlexBodyComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var FlexLeftComponent = /** @class */ (function () {
        function FlexLeftComponent() {
        }
        /**
         * @return {?}
         */
        FlexLeftComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        FlexLeftComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ecp-flex-left',
                        template: "\n    <ng-content></ng-content>\n  "
                    }] }
        ];
        /** @nocollapse */
        FlexLeftComponent.ctorParameters = function () { return []; };
        return FlexLeftComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var FlexRightComponent = /** @class */ (function () {
        function FlexRightComponent() {
        }
        /**
         * @return {?}
         */
        FlexRightComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        FlexRightComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ecp-flex-right',
                        template: "\n    <ng-content></ng-content>\n  "
                    }] }
        ];
        /** @nocollapse */
        FlexRightComponent.ctorParameters = function () { return []; };
        return FlexRightComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ModuleTitleComponent = /** @class */ (function () {
        function ModuleTitleComponent() {
        }
        /**
         * @return {?}
         */
        ModuleTitleComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        ModuleTitleComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ecp-module-title',
                        template: "<div class=\"module-title\">\r\n  <ng-content></ng-content>\r\n</div>\r\n",
                        styles: [".module-title{position:relative;height:60px;line-height:60px;font-size:18px;font-family:MicrosoftYaHei-Bold;font-weight:700;color:rgba(25,25,25,1);border:1px solid #dadada;padding-left:20px}:host>>>.module-title .close{position:absolute;right:20px}:host>>>.module-title .close i{font-size:14px;color:#6e6e6e}"]
                    }] }
        ];
        /** @nocollapse */
        ModuleTitleComponent.ctorParameters = function () { return []; };
        return ModuleTitleComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ModuleBottomComponent = /** @class */ (function () {
        function ModuleBottomComponent() {
        }
        /**
         * @return {?}
         */
        ModuleBottomComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        ModuleBottomComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ecp-module-bottom',
                        template: "<div class=\"module-footer\">\r\n  <ng-content></ng-content>\r\n</div>\r\n\r\n",
                        styles: [":host>>>.module-footer{background:#fff;width:100%;line-height:60px;border-top:1px solid #dadada;text-align:right}:host>>>.module-footer>button{margin-right:10px}"]
                    }] }
        ];
        /** @nocollapse */
        ModuleBottomComponent.ctorParameters = function () { return []; };
        return ModuleBottomComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var HelpInfoComponent = /** @class */ (function () {
        function HelpInfoComponent() {
            this.isShowHelpInfo = false;
            this.showList = null;
        }
        /**
         * @return {?}
         */
        HelpInfoComponent.prototype.mouseOut = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var self = this;
                self.showList = setTimeout(function () {
                    self.isShowHelpInfo = false;
                }, 200);
            };
        /**
         * @return {?}
         */
        HelpInfoComponent.prototype.cleanTime = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var self = this;
                clearTimeout(self.showList);
            };
        /**
         * @return {?}
         */
        HelpInfoComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        HelpInfoComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ecp-help-info',
                        template: "<span class=\"help-info\" (mouseover)=\"isShowHelpInfo=true\" (mouseleave)=\"mouseOut()\">\n     <div class=\"help-info-txt\" *ngIf=\"isShowHelpInfo\" (mouseover)=\"cleanTime()\" (mouseleave)=\"isShowHelpInfo=false\">\n            <ng-content></ng-content>\n     </div>\n</span>\n",
                        styles: [".help-info{cursor:pointer;position:relative;display:inline-block;height:14px;width:14px;margin-left:5px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABIUlEQVQokX3SvUpcYRDG8d+GRbBRNHoDEdRGBS/BJs2CIFgEqySdCqKFpa1WKmiz+EXQkEINCHoF3oKFiOQCNJV2KxIZmYWzh90MvJz5+D/vzOGdSr1eV7ABrKCG4Uzf4RKb+NtEqwXRDA7Rq9XG8szjO86j+qEgOktRA0v4iP70G1k7Tfa94yCOUMlLVrGDLxmH342NZIK9DuEiegrDHWMuvxLeS6Fkl2PU6dI/9WGqEHfhtcTUouNoKXlf8LfwA2slZqSqs/3Mp9nFQolqxKi3HaS/MN5GFPYnOl5gok3x83+muYqOMcpTm2I8+mSbfLDbIXzEV/wrASe5SUUL5hsempvzG7Olzvs4KMTPybSsXFgkhrCOG7zkCT9yn5oieANddjeLUeMtuwAAAABJRU5ErkJggg==) center center no-repeat}.help-info .help-info-txt{position:absolute;z-index:1000;right:0;top:25px;background:rgba(0,0,0,1);opacity:.8;width:300px;font-size:14px;line-height:26px;font-weight:400;padding:10px;color:#fff}:host>>>ol{margin:0;padding-left:20px}:host>>>ol li{padding-left:0}"]
                    }] }
        ];
        /** @nocollapse */
        HelpInfoComponent.ctorParameters = function () { return []; };
        return HelpInfoComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var FlexTopCenterBottomComponent = /** @class */ (function () {
        function FlexTopCenterBottomComponent() {
            this.topHeight = 0;
            this.bottomHeight = 0;
            this.topBg = '#ffffff';
            this.bottomBg = '#ffffff';
            this.bodyBg = '#ffffff';
        }
        /**
         * @return {?}
         */
        FlexTopCenterBottomComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        FlexTopCenterBottomComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ecp-flex-tcb',
                        template: "<div class=\"flex-tcb\">\r\n  <div class=\"flex-top\" *ngIf=\"topHeight>0\" [ngStyle]=\"{'height':topHeight+'px','background':topBg}\">\r\n    <ng-content select=\"ecp-flex-top\"></ng-content>\r\n  </div>\r\n  <div class=\"flex-body\"  [ngStyle]=\"{'background':bodyBg}\">\r\n    <ng-content select=\"ecp-flex-body\"></ng-content>\r\n  </div>\r\n  <div class=\"flex-footer\" *ngIf=\"bottomHeight>0\" [ngStyle]=\"{'height':bottomHeight+'px','background':bottomBg}\">\r\n    <ng-content select=\"ecp-flex-bottom\"></ng-content>\r\n  </div>\r\n</div>\r\n",
                        styles: [".flex-tcb{height:100%;display:flex;flex-direction:column}:host>>>.flex-tcb .flex-top{flex-grow:0;flex-shrink:0;width:100%}.flex-tcb .flex-body{overflow-y:auto;flex-grow:1;height:inherit}:host>>>.flex-tcb .flex-footer{flex-grow:0;flex-shrink:0;width:100%}"]
                    }] }
        ];
        /** @nocollapse */
        FlexTopCenterBottomComponent.ctorParameters = function () { return []; };
        FlexTopCenterBottomComponent.propDecorators = {
            topHeight: [{ type: i0.Input }],
            bottomHeight: [{ type: i0.Input }],
            topBg: [{ type: i0.Input }],
            bottomBg: [{ type: i0.Input }],
            bodyBg: [{ type: i0.Input }]
        };
        return FlexTopCenterBottomComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var FlexLeftCenterRightComponent = /** @class */ (function () {
        function FlexLeftCenterRightComponent() {
            this.leftWidth = 0;
            this.rightWidth = 0;
            this.leftBg = '#ffffff';
            this.bodyBg = '#ffffff';
            this.rightBg = '#ffffff';
        }
        /**
         * @return {?}
         */
        FlexLeftCenterRightComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        FlexLeftCenterRightComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ecp-flex-lcr',
                        template: "<div class=\"flex-lcb\">\r\n  <div class=\"flex-left\" *ngIf=\"leftWidth>0\" [ngStyle]=\"{'flex':'0 0 '+leftWidth+'px','background':leftBg}\">\r\n    <ng-content select=\"ecp-flex-left\"></ng-content>\r\n  </div>\r\n  <div class=\"flex-body\" [ngStyle]=\"{'background':bodyBg}\">\r\n    <ng-content select=\"ecp-flex-body\"></ng-content>\r\n  </div>\r\n  <div class=\"flex-right\" *ngIf=\"rightWidth>0\" [ngStyle]=\"{'flex':'0 0 '+rightWidth+'px','background':rightBg}\">\r\n    <ng-content select=\"ecp-flex-right\"></ng-content>\r\n  </div>\r\n</div>\r\n\r\n",
                        styles: [".flex-lcb{display:flex;width:100%;height:100%}.flex-left{flex:0 0 200px;height:100%;background:#fff;overflow:auto}.flex-body{flex:1;overflow:auto;background:#fff}.flex-right{flex:0 0 200px;height:100%;background:#fff;overflow:auto}"]
                    }] }
        ];
        /** @nocollapse */
        FlexLeftCenterRightComponent.ctorParameters = function () { return []; };
        FlexLeftCenterRightComponent.propDecorators = {
            leftWidth: [{ type: i0.Input }],
            rightWidth: [{ type: i0.Input }],
            leftBg: [{ type: i0.Input }],
            bodyBg: [{ type: i0.Input }],
            rightBg: [{ type: i0.Input }]
        };
        return FlexLeftCenterRightComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var LayoutVerticalCenterComponent = /** @class */ (function () {
        function LayoutVerticalCenterComponent() {
            this.ecpStyle = {};
        }
        /**
         * @return {?}
         */
        LayoutVerticalCenterComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        LayoutVerticalCenterComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ecp-layout-vertical-center',
                        template: "<div id=\"container\" [ngStyle]=\"ecpStyle\">\r\n  <div id =\"center\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>\r\n",
                        styles: ["#container{position:relative;display:block}#center{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}"]
                    }] }
        ];
        /** @nocollapse */
        LayoutVerticalCenterComponent.ctorParameters = function () { return []; };
        LayoutVerticalCenterComponent.propDecorators = {
            ecpStyle: [{ type: i0.Input }]
        };
        return LayoutVerticalCenterComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var CardInfoComponent = /** @class */ (function () {
        function CardInfoComponent() {
        }
        /**
         * @return {?}
         */
        CardInfoComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        CardInfoComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ecp-card-info',
                        template: "<div class=\"card\">\r\n  <ng-content></ng-content>\r\n</div>\r\n",
                        styles: [".card{border:1px solid #dadada;border-radius:4px;height:auto;padding:20px}:host>>>.module-item-title{clear:both;position:relative;height:20px;line-height:20px;font-size:14px;font-weight:700;padding-left:14px;width:100%;margin-bottom:10px}:host>>>.module-item-title i.left-pic{position:absolute;top:2px;left:0;width:6px;height:16px;background:rgba(30,91,214,1)}:host>>>.module-item-content{margin-bottom:20px}:host>>>.module-item-content div{line-height:32px}"]
                    }] }
        ];
        /** @nocollapse */
        CardInfoComponent.ctorParameters = function () { return []; };
        return CardInfoComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var PageLeftNavComponent = /** @class */ (function () {
        function PageLeftNavComponent() {
            this.title = '自义标题';
        }
        /**
         * @return {?}
         */
        PageLeftNavComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        PageLeftNavComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ecp-page-left-nav',
                        template: "<div class=\"nav\">\r\n  <div class=\"title\">{{title}}</div>\r\n  <div class=\"content\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>\r\n\r\n",
                        styles: [".nav{color:#191919;border-right:1px solid #dadada;height:100%;width:200px;background:#fff}:host>>>.nav .title{height:42px;line-height:42px;padding:0 20px;border-bottom:1px solid #dadada;font-size:16px;font-weight:400}:host>>>.nav .content a{display:block;width:100%;float:left;height:42px;line-height:42px;padding:0 20px;text-align:left;color:#191919;font-size:14px;font-weight:400}:host>>>.nav .content a:hover{background:#d2ddf2;color:#1e5bd6}"]
                    }] }
        ];
        /** @nocollapse */
        PageLeftNavComponent.ctorParameters = function () { return []; };
        PageLeftNavComponent.propDecorators = {
            title: [{ type: i0.Input }]
        };
        return PageLeftNavComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var SeachModuleComponent = /** @class */ (function () {
        function SeachModuleComponent() {
        }
        /**
         * @return {?}
         */
        SeachModuleComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SeachModuleComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ecp-seach-module',
                        template: "<ng-content></ng-content>\r\n<!--\r\n\r\n<form nz-form>\r\n  <div nz-row nzType=\"flex\" class=\"seach-form\">\r\n    <div nz-col nzXs=\"24\"  nzMd=\"12\" nzLg=\"6\" >\r\n      <div class=\"item\">\r\n        <div class=\"title\">\u4F20\u611F\u5668\u7F16\u53F7</div>\r\n        <div class=\"content\"><input nz-input type=\"text\"  name=\"sensorCode1\"></div>\r\n      </div>\r\n    </div>\r\n    <div nz-col nzXs=\"24\"  nzMd=\"12\" nzLg=\"6\" >\r\n      <div class=\"item\">\r\n        <div class=\"title\">\u4F20\u611F\u5668\u7C7B\u578B</div>\r\n        <div class=\"content\"><input nz-input type=\"text\"  name=\"sensorCode2\"></div>\r\n      </div>\r\n    </div>\r\n    <div nz-col nzXs=\"24\"  nzMd=\"12\" nzLg=\"6\" >\r\n      <div class=\"item\">\r\n        <div class=\"title\">\u5F00\u59CB\u65F6\u95F4</div>\r\n        <div class=\"content\"><input nz-input type=\"text\"  name=\"sensorCode3\"></div>\r\n      </div>\r\n    </div>\r\n    <div nz-col nzXs=\"24\"  nzMd=\"12\" nzLg=\"6\" >\r\n      <div class=\"item\">\r\n        <div class=\"title\">\u7ED3\u675F\u65F6\u95F4</div>\r\n        <div class=\"content\"><input nz-input type=\"text\"  name=\"sensorCode4\"></div>\r\n      </div>\r\n    </div>\r\n    <div nz-col nzXs=\"24\"  nzMd=\"12\" nzLg=\"6\" >\r\n      <div class=\"item\">\r\n        <div class=\"title\"></div>\r\n        <div class=\"content\">\r\n          <button nz-button  style=\"margin-right: 8px;\">\u91CD\u7F6E</button>\r\n          <button nz-button [nzType]=\"'primary'\" style=\"margin-right: 8px;\">\u67E5\u8BE2</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>\r\n-->\r\n",
                        styles: [":host>>>.seach-form{background:#fff;padding:16px 0 10px;border-bottom:1px solid #d4d4d4}:host>>>.seach-form .item{min-height:32px;padding:0 3%;margin-bottom:10px}:host>>>.seach-form .item>.title{width:35%;padding:5px 10px 0;text-align:right;float:left}:host>>>.seach-form .item>.content{width:55%;text-align:left;float:left}:host>>>.seach-form .item>.content button{margin-right:8px}:host>>>.ant-btn-primary{color:#fff;background-color:#1e5bd6;border-color:#1e5bd6;text-shadow:0 -1px 0 rgba(0,0,0,.12);box-shadow:0 2px 0 rgba(0,0,0,.035)}"]
                    }] }
        ];
        /** @nocollapse */
        SeachModuleComponent.ctorParameters = function () { return []; };
        return SeachModuleComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ListComponent = /** @class */ (function () {
        function ListComponent() {
        }
        /**
         * @return {?}
         */
        ListComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        ListComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ecp-data-table',
                        template: "<div class=\"list-div\">\r\n  <ng-content></ng-content>\r\n</div>\r\n",
                        styles: [":host>>>.list-div .default-margin{margin:10px 30px 0}:host>>>.align-left{text-align:left}:host>>>.align-right{text-align:right}:host>>>.align-right button{margin-left:10px}:host ::ng-deep .ant-table-body a{color:#1e5bd6}:host ::ng-deep .ant-table-body .ant-table-thead tr th{padding:11px 10px!important;border:1px solid #ccc;background:#fff;font-weight:700;color:#6e6e6e}:host ::ng-deep .ant-table-body .ant-table-thead tr:first-child th{border-top:0}:host ::ng-deep .ant-table-body .ant-table-thead tr th:first-child{border-left:0}:host ::ng-deep .ant-table-body .ant-table-thead tr th:last-child{border-right:0}:host ::ng-deep .ant-table-body{border-collapse:collapse;border:1px solid #d7d7d7;border-bottom-width:0}:host ::ng-deep .ant-table-body .ant-table-tbody tr td{padding:10px!important;color:#191919}:host ::ng-deep .ant-table-body .ant-table-tbody tr td.color-gary{color:#6e6e6e}:host ::ng-deep .ant-table-body .ant-table-tbody tr:nth-child(odd){background:#f0f0f0}:host ::ng-deep .ant-table-body .ant-table-tbody tr:nth-child(even){background:#fff}"]
                    }] }
        ];
        /** @nocollapse */
        ListComponent.ctorParameters = function () { return []; };
        return ListComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var HttpStatusPageComponent = /** @class */ (function () {
        function HttpStatusPageComponent() {
            this.code = 400;
        }
        /**
         * @return {?}
         */
        HttpStatusPageComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        HttpStatusPageComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ecp-http-status-page',
                        template: "<div class=\"http-page\">\r\n  <div class=\"img http{{code}}\"></div>\r\n  <ng-content></ng-content>\r\n</div>\r\n",
                        styles: [":host>>>.http-page{display:block;margin:0 auto;min-width:252px}:host>>>.http-page .img{width:252px;height:92px;display:block;margin-bottom:50px}:host>>>.http400{background:url(data:image/png;base64,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) no-repeat}:host>>>.http510{background:url(data:image/png;base64,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) no-repeat}:host>>>.http-page .info-txt{text-align:center;margin-bottom:2px;font-size:16px;color:#6e6e6e}:host>>>.http-page .tag-link-module{text-align:center}"]
                    }] }
        ];
        /** @nocollapse */
        HttpStatusPageComponent.ctorParameters = function () { return []; };
        HttpStatusPageComponent.propDecorators = {
            code: [{ type: i0.Input }]
        };
        return HttpStatusPageComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var EcpAntTagsComponent = /** @class */ (function () {
        function EcpAntTagsComponent() {
            this.styleType = 'style1';
            this.contentPadding = false;
            this.ecpStyle = {};
        }
        /**
         * @return {?}
         */
        EcpAntTagsComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        EcpAntTagsComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ecp-ant-tags',
                        template: "<div [ngClass]=\"{'line': styleType=='line', 'card': styleType=='card', 'card-test': styleType=='card-test','content-padding': contentPadding}\" [ngStyle]=\"ecpStyle\">\r\n    <ng-content></ng-content>\r\n</div>",
                        styles: [":host>>>.line .ant-tabs-bar{margin:0!important}:host>>>.line .ant-tabs-nav{margin-left:30px}:host>>>.card .ant-tabs-bar{margin:0}:host>>>.card .ant-tabs-card .ant-tabs-tab{margin-right:4px;font-size:14px;color:#000;background:#f0f0f0;border:1px solid #dadada}:host>>>.card .ant-tabs-card .ant-tabs-tab-active{color:#1e5bd6;background:url(data:image/png;base64,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0p8zAAA6LmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMwNjcgNzkuMTU3NzQ3LCAyMDE1LzAzLzMwLTIzOjQwOjQyICAgICAgICAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgICAgICAgICB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICAgICAgICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNSAoV2luZG93cyk8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpDcmVhdGVEYXRlPjIwMTktMDEtMTdUMTA6MDc6NTErMDg6MDA8L3htcDpDcmVhdGVEYXRlPgogICAgICAgICA8eG1wOk1ldGFkYXRhRGF0ZT4yMDE5LTAxLTE3VDEwOjA3OjUxKzA4OjAwPC94bXA6TWV0YWRhdGFEYXRlPgogICAgICAgICA8eG1wOk1vZGlmeURhdGU+MjAxOS0wMS0xN1QxMDowNzo1MSswODowMDwveG1wOk1vZGlmeURhdGU+CiAgICAgICAgIDx4bXBNTTpJbnN0YW5jZUlEPnhtcC5paWQ6MzlmYjZhOWYtOGQ0MS04ZjQyLWE2OTAtYmUxMTdmNmVjODc5PC94bXBNTTpJbnN0YW5jZUlEPgogICAgICAgICA8eG1wTU06RG9jdW1lbnRJRD5hZG9iZTpkb2NpZDpwaG90b3Nob3A6YTkzNjFlNjctMTlmYy0xMWU5LWE2MWUtYTliNGIzZjVmNGY5PC94bXBNTTpEb2N1bWVudElEPgogICAgICAgICA8eG1wTU06T3JpZ2luYWxEb2N1bWVudElEPnhtcC5kaWQ6ZTFiMTI2MWUtNzQ1YS1lMjRjLTgxMGItY2M1M2FiYjk1NDE4PC94bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+CiAgICAgICAgIDx4bXBNTTpIaXN0b3J5PgogICAgICAgICAgICA8cmRmOlNlcT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+Y3JlYXRlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOmUxYjEyNjFlLTc0NWEtZTI0Yy04MTBiLWNjNTNhYmI5NTQxODwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4+MjAxOS0wMS0xN1QxMDowNzo1MSswODowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ+QWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDozOWZiNmE5Zi04ZDQxLThmNDItYTY5MC1iZTExN2Y2ZWM4Nzk8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTktMDEtMTdUMTA6MDc6NTErMDg6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmNoYW5nZWQ+Lzwvc3RFdnQ6Y2hhbmdlZD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC94bXBNTTpIaXN0b3J5PgogICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3BuZzwvZGM6Zm9ybWF0PgogICAgICAgICA8cGhvdG9zaG9wOkNvbG9yTW9kZT4zPC9waG90b3Nob3A6Q29sb3JNb2RlPgogICAgICAgICA8cGhvdG9zaG9wOklDQ1Byb2ZpbGU+c1JHQiBJRUM2MTk2Ni0yLjE8L3Bob3Rvc2hvcDpJQ0NQcm9maWxlPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpYUmVzb2x1dGlvbj43MjAwMDAvMTAwMDA8L3RpZmY6WFJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOllSZXNvbHV0aW9uPjcyMDAwMC8xMDAwMDwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6UmVzb2x1dGlvblVuaXQ+MjwvdGlmZjpSZXNvbHV0aW9uVW5pdD4KICAgICAgICAgPGV4aWY6Q29sb3JTcGFjZT4xPC9leGlmOkNvbG9yU3BhY2U+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj4xPC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjI8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0idyI/PnFDcf0AAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAABhJREFUeNpiUCt78p+JgYGBAQAAAP//AwARUAKCp8zQHQAAAABJRU5ErkJggg==) left top repeat-x #fff}:host>>>.card .ant-tabs-card .ant-tabs-content{border:1px solid #dadada;border-top:0;background:#fff}:host>>>.card.content-padding .ant-tabs-content{padding:20px}:host>>>.card-test .ant-tabs-bar{margin:0;border-bottom:0}:host>>>.card-test .ant-tabs-nav{width:90px;height:43px}:host>>>.card-test .ant-tabs-nav .ant-tabs-tab{background:#f0f0f0;margin:0 4px 0 0!important;border:1px solid rgba(218,218,218,1);color:#000;height:42px}:host>>>.card-test .ant-tabs-nav .ant-tabs-tab-active{background:#fff;color:#1e5bd6;height:44px}:host>>>.card-test .ant-tabs-nav .ant-tabs-ink-bar{top:0;bottom:auto}:host>>>.card-test .ant-tabs-nav .ant-tabs-tab-active :after{background:#c71585;height:2px;width:100%;position:absolute;top:10px}:host>>>.card-test .ant-tabs-nav-container{font-size:14px!important}:host>>>.card-test .ant-tabs-tabpane{border:1px solid rgba(218,218,218,1);padding:20px;background:#fff}"]
                    }] }
        ];
        /** @nocollapse */
        EcpAntTagsComponent.ctorParameters = function () { return []; };
        EcpAntTagsComponent.propDecorators = {
            styleType: [{ type: i0.Input }],
            contentPadding: [{ type: i0.Input }],
            ecpStyle: [{ type: i0.Input }]
        };
        return EcpAntTagsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
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
            { type: i0.Component, args: [{
                        selector: 'ecp-map-legend',
                        template: "<!--\u53F3\u4E0B\u89D2\u56FE\u4F8B-->\r\n<div class=\"map-bottom-legend\" [@openClose]=\"mapSideState ? 'open' : 'closed'\">\r\n    <a class=\"fold-icon\" [ngClass]=\"{'unfold-icon':!legendFold}\" (click)=\"switchFold()\">\u56FE\u4F8B</a>\r\n\r\n    <div style=\"height:24px;overflow: hidden\" [@legendFold]=\"legendFold ? 'open' : 'closed'\">\r\n        <ng-content>\r\n        </ng-content>\r\n    </div>\r\n\r\n</div>",
                        animations: [
                            animations.trigger('openClose', [
                                animations.state('open', animations.style({
                                    right: '360px',
                                })),
                                animations.state('closed', animations.style({
                                    right: '0px',
                                })),
                                animations.transition('open => closed', [
                                    animations.animate('0.1s')
                                ]),
                                animations.transition('closed => open', [
                                    animations.animate('0.1s')
                                ]),
                            ]),
                            animations.trigger('legendFold', [
                                animations.state('open', animations.style({
                                    width: '*',
                                    opacity: '1',
                                })),
                                animations.state('closed', animations.style({
                                    width: '0px',
                                    opacity: '0',
                                })),
                                animations.transition('open => closed', [
                                    animations.animate('0.1s')
                                ]),
                                animations.transition('closed => open', [
                                    animations.animate('0.1s')
                                ]),
                            ]),
                        ],
                        styles: [":host>>>.map-bottom-legend{height:24px;background:rgba(255,255,255,1);position:absolute;bottom:0;right:0}:host>>>.map-bottom-legend span{font-size:12px;display:inline-block;font-weight:400;color:rgba(25,25,25,1);padding:1px 1px 1px 20px;position:relative;margin:0 9px}:host>>>.map-bottom-legend span i{position:absolute;top:2px;left:1px;width:18px;height:18px}:host>>>.map-bottom-legend a.fold-icon{content:\"\";background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASBAMAAACk4JNkAAAAIVBMVEUAAACZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmOFP9JAAAACnRSTlMAYBDvzzCfj68g+rRHXwAAAC5JREFUCNdjwApYmxgKISz2JZpWAhBmllPwQgiLbYkqQUEECyFLUAhhG8IFmAAAbmQSUW8SjUQAAAAASUVORK5CYII=) 5px center no-repeat;width:70px;height:24px;line-height:24px;text-indent:30px;float:left;border-right:1px solid #ccc;cursor:pointer;color:#6e6e6e}:host>>>.map-bottom-legend a.unfold-icon{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASBAMAAACk4JNkAAAAIVBMVEUAAACZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmOFP9JAAAACnRSTlMAYBDvzzCfj68g+rRHXwAAAC1JREFUCNdjwAUYC5haISwpS5XlEKHFQV4JECFTlWX4hRAshCxhQYRtCBdgAgBiuBJRwUIFxwAAAABJRU5ErkJggg==) 5px center no-repeat}"]
                    }] }
        ];
        /** @nocollapse */
        LegendComponent.ctorParameters = function () { return []; };
        LegendComponent.propDecorators = {
            mapSideState: [{ type: i0.Input }]
        };
        return LegendComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var RippleComponent = /** @class */ (function () {
        function RippleComponent() {
        }
        /**
         * @return {?}
         */
        RippleComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        RippleComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ecp-ripple',
                        template: "<div style=\"position: absolute; \" [style.top]=\"customY\"  [style.left]=\"customX\" >\r\n  <div class=\"example\">\r\n    <div class=\"dot-{{customColor}}\"></div>\r\n  </div>\r\n</div>\r\n",
                        styles: [".example{position:relative;width:14px;height:14px}.dot-red:before{content:' ';position:absolute;z-index:2;left:0;top:0;width:14px;height:14px;background-color:#ff4200;border-radius:50%}.dot-red:after{content:' ';position:absolute;z-index:1;width:14px;height:14px;background-color:#ff4200;border-radius:50%;box-shadow:0 0 10px rgba(0,0,0,.3) inset;-webkit-animation-name:ripple;-webkit-animation-duration:1s;-webkit-animation-timing-function:ease;-webkit-animation-delay:0s;-webkit-animation-iteration-count:infinite;-webkit-animation-direction:normal}.dot-green:before{content:' ';position:absolute;z-index:2;left:0;top:0;width:14px;height:14px;background-color:#396;border-radius:50%}.dot-green:after{content:' ';position:absolute;z-index:1;width:14px;height:14px;background-color:#396;border-radius:50%;box-shadow:0 0 10px rgba(0,0,0,.3) inset;-webkit-animation-name:ripple;-webkit-animation-duration:1s;-webkit-animation-timing-function:ease;-webkit-animation-delay:0s;-webkit-animation-iteration-count:infinite;-webkit-animation-direction:normal}@-webkit-keyframes ripple{0%{left:7px;top:7px;opcity:75;width:0;height:0}100%{left:-18px;top:-18px;opacity:0;width:50px;height:50px}}@keyframes ripple{0%{left:7px;top:7px;opcity:75;width:0;height:0}100%{left:-18px;top:-18px;opacity:0;width:50px;height:50px}}"]
                    }] }
        ];
        /** @nocollapse */
        RippleComponent.ctorParameters = function () { return []; };
        RippleComponent.propDecorators = {
            customColor: [{ type: i0.Input }],
            customX: [{ type: i0.Input }],
            customY: [{ type: i0.Input }]
        };
        return RippleComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var MapDotPopupComponent = /** @class */ (function () {
        function MapDotPopupComponent() {
            this.isCloseBtn = true;
        }
        /**
         * @return {?}
         */
        MapDotPopupComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        MapDotPopupComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ecp-map-dot-popup',
                        template: "<div class=\"ol-popup\" [ngStyle]=\"customPosition\">\r\n  <a class=\"ol-popup-closer\" *ngIf=\"isCloseBtn\"></a>\r\n  <div class=\"overlay-content\">\r\n    <!--\u7528\u6237\u5185\u5BB9-->\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>\r\n",
                        styles: [".ol-popup{position:absolute;top:10px;left:10px;background:#000c17;color:#fff;min-width:100px;opacity:.6;-webkit-filter:drop-shadow(0 1px 4px rgba(0, 0, 0, .2));filter:drop-shadow(0 1px 4px rgba(0, 0, 0, .2));padding:15px 20px}.ol-popup:after,.ol-popup:before{top:100%;border:solid transparent;content:\" \";height:0;width:0;position:absolute;pointer-events:none}.ol-popup:after{border-top-color:#000c17;border-width:10px;left:50%;margin-left:-10px}.ol-popup:before{border-top-color:#000c17;border-width:11px;left:50%;margin-left:-11px}.ol-popup-closer{text-decoration:none;position:absolute;top:2px;right:8px;color:#fff}.ol-popup-closer:after{content:\"\u2716\"}"]
                    }] }
        ];
        /** @nocollapse */
        MapDotPopupComponent.ctorParameters = function () { return []; };
        MapDotPopupComponent.propDecorators = {
            isCloseBtn: [{ type: i0.Input }],
            customPosition: [{ type: i0.Input }]
        };
        return MapDotPopupComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var SelectMapTypeComponent = /** @class */ (function () {
        function SelectMapTypeComponent() {
            this.ecpStyle = {};
            this.isShow = false;
            this.showList = null;
        }
        /**
         * @return {?}
         */
        SelectMapTypeComponent.prototype.mouseOut = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var seft = this;
                seft.showList = setTimeout(function () {
                    seft.isShow = false;
                }, 200);
            };
        /**
         * @return {?}
         */
        SelectMapTypeComponent.prototype.cleanTime = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var seft = this;
                clearTimeout(seft.showList);
            };
        /**
         * @return {?}
         */
        SelectMapTypeComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SelectMapTypeComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ecp-select-map-type',
                        template: "<div class=\"select-map\" [ngStyle]=\"ecpStyle\">\r\n  <div class=\"content\">\r\n    <span class=\"icon\" (mouseover)=\"isShow=true\" (mouseleave)=\"mouseOut()\" [ngClass]=\"{'hover':isShow}\"><i\r\n      class=\"icon dongxiniotwater general_select-map\"></i></span>\r\n    <ul class=\"list\" *ngIf=\"isShow\" (mouseover)=\"cleanTime()\" (mouseleave)=\"isShow=false\"\r\n        [@openClose]=\"isShow ? 'open' : 'closed'\">\r\n      <!--\r\n      <li>\u767E\u5EA6\u5730\u56FE</li>\r\n      <li>\u9AD8\u5FB7\u5730\u56FE</li>\r\n      <li>\u8C37\u6B4C\u5730\u56FE</li>\r\n      -->\r\n      <ng-content></ng-content>\r\n    </ul>\r\n  </div>\r\n</div>\r\n",
                        animations: [
                            animations.trigger('openClose', [
                                animations.transition(':enter', [
                                    animations.style({ opacity: 0, width: '20px', color: '#000000' }),
                                    animations.animate(40, animations.style({ opacity: 1, width: '120px', color: '#000000' }))
                                ]),
                                animations.transition(':leave', [
                                    animations.animate(40, animations.style({ opacity: 0, width: '20px', color: '#ffffff' }))
                                ]),
                            ]),
                        ],
                        styles: [".select-map{position:absolute;width:232px;height:32px}.select-map .content{position:relative}.select-map span.icon{position:absolute;right:0;top:0;width:32px;height:32px;background:rgba(0,0,0,1);opacity:.4;text-align:center;padding-top:4px;border-radius:4px;cursor:pointer}.select-map span.icon.hover,.select-map span.icon:hover{background:rgba(0,0,0,1);opacity:.6}.select-map span.icon i{width:18px;height:18px;font-size:18px;color:#fff}:host>>>.select-map ul.list{position:absolute;right:38px;top:0;width:120px;height:120px;background:rgba(255,255,255,1);box-shadow:0 3px 8px 0 rgba(0,0,0,.3);opacity:.86;padding:0}:host>>>.select-map ul.list li{height:40px;line-height:40px;text-align:left;list-style:none;padding:0 15px;color:#191919;font-size:14px;cursor:pointer;overflow:hidden}:host>>>.select-map ul.list li:hover{background:#d2ddf2}"]
                    }] }
        ];
        /** @nocollapse */
        SelectMapTypeComponent.ctorParameters = function () { return []; };
        SelectMapTypeComponent.propDecorators = {
            ecpStyle: [{ type: i0.Input }]
        };
        return SelectMapTypeComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ToolBarComponent = /** @class */ (function () {
        function ToolBarComponent() {
            this.ecpStyle = {};
            //@Input() customLocation: any={'x': '100px', 'y': '50px'};
            this.selectId = new i0.EventEmitter();
            /*
                menuJSON = [{
                  "name": "添加元素",
                  "url": "http://www.google.com",
                  "chird": [
                    {
                      "name": "坐标",
                      "url": "http://www.google.com"
                    },
                    {
                      "name": "传感器",
                      "url": "http://www.baidu.com"
                    },
                    {
                      "name": "管道",
                      "url": "http://www.SoSo.com"
                    },
                    {
                      "name": "节点",
                      "url": "http://www.SoSo.com"
                    },
                    {
                      "name": "堵头封板",
                      "url": "http://www.SoSo.com"
                    },
                    {
                      "name": "闸阀",
                      "url": "http://www.SoSo.com"
                    },
                    {
                      "name": "消防栓",
                      "url": "http://www.SoSo.com"
                    }
                  ]
                }, {
                  "name": "筛查",
                  "url": "http://www.google.com",
                  "chird": null
                }, {
                  "name": "预警",
                  "url": "http://www.google.com",
                  "chird": [
                    {
                      "name": "坐标",
                      "url": "http://www.google.com"
                    },
                    {
                      "name": "传感器",
                      "url": "http://www.baidu.com"
                    },
                    {
                      "name": "管道",
                      "url": "http://www.SoSo.com"
                    }
                  ]
                }, {
                  "name": "爆管分析",
                  "url": "http://www.google.com",
                  "chird": null
                }, {
                  "name": "阀门分析",
                  "url": "http://www.google.com",
                  "chird": null
                }];*/
            this.menuJSON = [{
                    'name': '添加元素',
                    'url': 'http://www.google.com',
                    'chird': [
                        {
                            'name': '坐标',
                            'url': 'add_point'
                        },
                        {
                            'name': '传感器',
                            'url': 'add_sensor'
                        },
                        {
                            'name': '管道',
                            'url': 'add_pipe'
                        },
                        {
                            'name': '节点',
                            'url': 'add_node'
                        },
                        {
                            'name': '堵头封板',
                            'url': 'add_plug'
                        },
                        {
                            'name': '闸阀',
                            'url': 'add_valve'
                        },
                        {
                            'name': '消防栓',
                            'url': 'add_hydrant'
                        }
                    ]
                }, {
                    'name': '筛查',
                    'url': 'screening',
                    'chird': null
                }, {
                    'name': '预警',
                    'url': 'http://www.google.com',
                    'chird': [
                        {
                            'name': '实时流量显示',
                            'url': 'http://www.google.com',
                            'isSwitch': true
                        },
                        {
                            'name': '分区用水量分析',
                            'url': 'http://www.baidu.com'
                        }
                    ]
                }, {
                    'name': '爆管分析',
                    'url': 'analysis_pipe',
                    'chird': null
                }, {
                    'name': '阀门分析',
                    'url': 'analysis_valve',
                    'chird': null
                }];
            this.hoverId = 0;
            this.thisMenuId = 0;
        }
        /**
         * @param {?} url
         * @return {?}
         */
        ToolBarComponent.prototype.click = /**
         * @param {?} url
         * @return {?}
         */
            function (url) {
                this.selectId.emit(url);
            };
        /**
         * @param {?} i
         * @return {?}
         */
        ToolBarComponent.prototype.menuSel = /**
         * @param {?} i
         * @return {?}
         */
            function (i) {
                this.hoverId = i;
                this.thisMenuId = i;
            };
        /**
         * @param {?} i
         * @return {?}
         */
        ToolBarComponent.prototype.showSubMenu = /**
         * @param {?} i
         * @return {?}
         */
            function (i) {
                this.hoverId = i;
                this.thisMenuId = i;
            };
        /**
         * @return {?}
         */
        ToolBarComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                /*   if (this.customLocation == '') {
                      this.customLocation = {'x': '0', 'y': '0'};
                    }*/
                this.menuJSON.reverse();
            };
        ToolBarComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ecp-tool-bar',
                        template: "<div class=\"map-top-toolbar\" [ngStyle]=\"ecpStyle\" >\r\n  <span *ngFor=\"let item of menuJSON;let i = index;\">\r\n  <a (click)=\"menuSel(i);click(item.url)\" (mouseover)=\"menuSel(i)\"\r\n     [ngClass]=\"{'hover':hoverId==i}\">{{item.name}} <i class=\"icon dongxiniotwater general_unfold\" *ngIf=\"item.chird!=null\"></i></a>\r\n  <ul class=\"sub-menu\" [ngClass]=\"{'show':thisMenuId==i}\" (mouseleave)=\"showSubMenu(50)\">\r\n     <ng-container *ngFor=\"let childmenu of item.chird;let childId = index; \">\r\n            <li [ngClass]=\"{'switch':childmenu.isSwitch==true}\" (click)=\"click(childmenu.url)\">{{childmenu.name}} <span *ngIf=\"childmenu.isSwitch==true\"><!--<nz-switch nzSize=\"small\"></nz-switch>--></span></li>\r\n     </ng-container>\r\n  </ul>\r\n  </span>\r\n</div>\r\n",
                        styles: [".map-top-toolbar{position:absolute;font-weight:400;color:rgba(25,25,25,1);font-size:16px;height:36px;line-height:36px;text-align:center;background:rgba(255,255,255,1);border-radius:4px;box-shadow:0 0 4px rgba(0,0,0,.3)}.map-top-toolbar span{position:relative;width:100px;float:right;text-align:center;cursor:pointer;font-size:14px;font-family:MicrosoftYaHei;font-weight:400;color:rgba(255,255,255,1)}.map-top-toolbar span a{height:36px;display:block;color:#191919;border-right:1px solid #dadada}.map-top-toolbar span a.hover,.map-top-toolbar span a:hover{background:#1e5bd6;color:#fff}.map-top-toolbar span:first-child a{border-radius:0 4px 4px 0;border-right:0 solid #dadada!important}.map-top-toolbar span:last-child a{border-radius:4px 0 0 4px}.map-top-toolbar span a i{vertical-align:middle;font-size:6px;margin-left:2px;color:#999}.map-top-toolbar .sub-menu{position:absolute;right:0;top:-1000px;min-width:100px;padding:0;background:rgba(255,255,255,1);box-shadow:0 3px 8px 0 rgba(0,0,0,.3);height:auto}.map-top-toolbar .show{top:40px}.map-top-toolbar .sub-menu li{width:100%;text-align:left;height:42px;line-height:42px;background:#fff;padding:0 0 0 15px;color:rgba(25,25,25,1);list-style:none}.map-top-toolbar .sub-menu li.switch{width:170px}.map-top-toolbar .sub-menu li.switch>span{display:inline-block;width:40px;float:right;margin-right:7px}.map-top-toolbar .sub-menu li:hover{background:#d2ddf2;color:#191919}"]
                    }] }
        ];
        /** @nocollapse */
        ToolBarComponent.ctorParameters = function () { return []; };
        ToolBarComponent.propDecorators = {
            customX: [{ type: i0.Input }],
            customY: [{ type: i0.Input }],
            ecpStyle: [{ type: i0.Input }],
            selectId: [{ type: i0.Output }]
        };
        return ToolBarComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ToolBar2Component = /** @class */ (function () {
        function ToolBar2Component() {
        }
        /**
         * @return {?}
         */
        ToolBar2Component.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        ToolBar2Component.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ecp-tool-bar2',
                        template: "<div class=\"map-top-btn-1\">\r\n  <span><i class=\"icon-coordinate\"></i>\u6DFB\u52A0\u5750\u6807</span>\r\n  <span><i class=\"icon-sensor\"></i>\u6DFB\u52A0\u4F20\u611F\u5668</span>\r\n  <span><i class=\"icon-pipe\"></i>\u6DFB\u52A0\u7BA1\u9053</span></div>\r\n<div class=\"map-top-btn map-top-btn-2\">\u7F16\u8F91\u6A21\u5F0F</div>\r\n<div class=\"map-top-btn map-top-btn-2\">\u5C55\u793A\u6A21\u5F0F</div>\r\n<div class=\"map-top-btn map-top-btn-3\">\u4FE1\u606F\u5217\u8868</div>\r\n",
                        styles: [".map-top-btn-1{position:absolute;top:20px;left:20px;width:400px;font-weight:400;color:rgba(25,25,25,1);font-size:16px;height:42px;line-height:42px;text-align:center;background:rgba(255,255,255,1);border-radius:8px;box-shadow:0 0 8px rgba(0,0,0,.3);overflow:hidden}.map-top-btn-1 span{width:33.33%;float:left;position:relative;padding-left:26px;cursor:pointer}.map-top-btn-1 span:hover{background:#1979ff;color:#fff}.map-top-btn-1 span:first-child{border-right:1px solid #dadada}.map-top-btn-1 span:last-child{border-left:1px solid #dadada}.map-top-btn-1 span i{position:absolute;left:10px;top:12px;font-size:20px}.map-top-btn{text-align:center;line-height:42px;color:#fff;font-size:16px;width:100px;height:42px;background:rgba(30,91,214,1);border-radius:8px;box-shadow:0 0 8px rgba(0,0,0,.3);cursor:pointer}.map-top-btn:hover{background:#1979ff}.map-top-btn-2{position:absolute;top:20px;left:440px}.map-top-btn-3{position:absolute;top:20px;left:550px}"]
                    }] }
        ];
        /** @nocollapse */
        ToolBar2Component.ctorParameters = function () { return []; };
        return ToolBar2Component;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ToolBar3Component = /** @class */ (function () {
        function ToolBar3Component() {
            this.hoverId = 0;
            this.thisMenuId = 0;
        }
        /**
         * @param {?} i
         * @return {?}
         */
        ToolBar3Component.prototype.menuSel = /**
         * @param {?} i
         * @return {?}
         */
            function (i) {
                this.hoverId = i;
                this.thisMenuId = i;
            };
        /**
         * @param {?} i
         * @return {?}
         */
        ToolBar3Component.prototype.showSubMenu = /**
         * @param {?} i
         * @return {?}
         */
            function (i) {
                this.hoverId = i;
                this.thisMenuId = i;
            };
        /**
         * @return {?}
         */
        ToolBar3Component.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        ToolBar3Component.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ecp-tool-bar3',
                        template: "<div class=\"map-top-toolbar\">\r\n  <span> <a (mouseover)=\"menuSel(1)\" (click)=\"menuSel(1)\" [ngClass]=\"{'hover':hoverId==1}\">\u9600\u95E8\u5206\u6790</a> </span>\r\n  <span> <a (mouseover)=\"menuSel(2)\" (click)=\"menuSel(2)\" [ngClass]=\"{'hover':hoverId==2}\">\u7206\u7BA1\u5206\u6790</a> </span>\r\n  <span> <a (mouseover)=\"menuSel(3)\" (click)=\"menuSel(3)\" [ngClass]=\"{'hover':hoverId==3}\">\u9884\u8B66<i class=\"icon-unfold\"></i></a>\r\n    <ul class=\"sub-menu\" [ngClass]=\"{'show':thisMenuId==3}\" (mouseleave)=\"showSubMenu(50)\" style=\"width: 160px;\">\r\n      <li>\u5B9E\u65F6\u6D41\u91CF\u663E\u793A<!--<nz-switch style=\"float: right; margin-right: 7px;\"></nz-switch>--></li>\r\n      <li>\u5206\u533A\u7528\u6C34\u91CF\u5206\u6790</li>\r\n    </ul>\r\n  </span>\r\n  <span>\r\n    <a (mouseover)=\"menuSel(4)\" (click)=\"menuSel(4)\" [ngClass]=\"{'hover':hoverId==4}\">\u7B5B\u67E5</a>\r\n  </span>\r\n  <span>\r\n    <a (mouseover)=\"menuSel(5)\" (click)=\"menuSel(5)\" [ngClass]=\"{'hover':hoverId==5}\">\u6DFB\u52A0\u5143\u7D20<i\r\n      class=\"icon-unfold\"></i></a>\r\n    <ul class=\"sub-menu\" [ngClass]=\"{'show':thisMenuId==5}\" (mouseleave)=\"showSubMenu(50)\">\r\n      <li>\u5750\u6807</li>\r\n      <li>\u4F20\u611F\u5668</li>\r\n      <li>\u7BA1\u9053</li>\r\n      <li>\u8282\u70B9</li>\r\n      <li>\u5835\u5934\u5C01\u677F</li>\r\n      <li>\u95F8\u9600</li>\r\n      <li>\u6D88\u9632\u6813</li>\r\n    </ul>\r\n  </span>\r\n</div>\r\n",
                        styles: [".map-top-toolbar{position:absolute;top:20px;left:20px;font-weight:400;color:rgba(25,25,25,1);font-size:16px;height:36px;line-height:36px;text-align:center;background:rgba(255,255,255,1);border-radius:8px;box-shadow:0 0 8px rgba(0,0,0,.3)}.map-top-toolbar span{position:relative;width:100px;float:right;text-align:center;cursor:pointer;font-size:14px;font-family:MicrosoftYaHei;font-weight:400;color:rgba(255,255,255,1)}.map-top-toolbar span a{height:36px;display:block;color:#191919;border-right:1px solid #dadada}.map-top-toolbar span a.hover,.map-top-toolbar span a:hover{background:#1e5bd6;color:#fff}.map-top-toolbar span:first-child a{border-radius:0 8px 8px 0;border-right:0 solid #dadada!important}.map-top-toolbar span:last-child a{border-radius:8px 0 0 8px}.map-top-toolbar span a i{vertical-align:middle;font-size:6px;margin-left:4px;color:#999}.map-top-toolbar .sub-menu{position:absolute;right:0;top:-1000px;min-width:100px;padding:0;background:rgba(255,255,255,1);box-shadow:0 3px 8px 0 rgba(0,0,0,.3);height:auto}.map-top-toolbar .show{top:40px!important}.map-top-toolbar .sub-menu li{width:100%;text-align:left;height:42px;line-height:42px;background:#fff;padding:0 0 0 15px;color:rgba(25,25,25,1);list-style:none}.map-top-toolbar .sub-menu li:hover{background:#d2ddf2;color:#191919}"]
                    }] }
        ];
        /** @nocollapse */
        ToolBar3Component.ctorParameters = function () { return []; };
        return ToolBar3Component;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var StatusBarComponent = /** @class */ (function () {
        function StatusBarComponent() {
            this.defaultColor = ['#bcbcbc', '#E81E1E', '#339966', '#edc601'];
        }
        /**
         * @return {?}
         */
        StatusBarComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var self = this;
                if (self.customColor != null) {
                    self.defaultColor = self.customColor;
                }
            };
        StatusBarComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ecp-status-bar',
                        template: "<span class=\"status\" [ngStyle]=\"{'background':defaultColor[statusNum]}\">{{txt}}</span>\r\n\r\n",
                        styles: [".status{width:45px;display:inline-block;font-size:12px;color:#fff;text-align:center;height:22px;line-height:22px;border-radius:2px;margin:0 5px}.status-gray{background:#bcbcbc}.status-red{background:#e81e1e}.status-green{background:#396}.status-yellow{background:#edc601}"]
                    }] }
        ];
        /** @nocollapse */
        StatusBarComponent.ctorParameters = function () { return []; };
        StatusBarComponent.propDecorators = {
            txt: [{ type: i0.Input }],
            statusNum: [{ type: i0.Input }],
            customColor: [{ type: i0.Input }]
        };
        return StatusBarComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var TabsComponent = /** @class */ (function () {
        function TabsComponent(el) {
            this.el = el;
        }
        /**
         * @return {?}
         */
        TabsComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var titleArry = this.el.nativeElement.querySelectorAll('.tabs .tab-title a');
                console.log(titleArry);
            };
        TabsComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ecp-tabs',
                        template: "<div class=\"tabs\">\r\n <ng-content></ng-content>\r\n</div>\r\n",
                        styles: [".tabs{width:100%}.tabs .tab-title a{display:inline-block;padding:0 20px;line-height:30px;height:30px;text-align:center}.tabs .tab-title .hover,.tabs .tab-title a:hover{background:#1e5bd6;color:#fff}.tabs .tab-content{display:block}.tabs .tab-content .item{display:block;border:1px solid #ccc;min-height:300px}"]
                    }] }
        ];
        /** @nocollapse */
        TabsComponent.ctorParameters = function () {
            return [
                { type: i0.ElementRef }
            ];
        };
        return TabsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var TabComponent = /** @class */ (function () {
        function TabComponent() {
        }
        /**
         * @return {?}
         */
        TabComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        TabComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ecp-tab',
                        template: "",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        TabComponent.ctorParameters = function () { return []; };
        TabComponent.propDecorators = {
            title: [{ type: i0.Input }]
        };
        return TabComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var UploadFileComponent = /** @class */ (function () {
        function UploadFileComponent() {
        }
        /**
         * @return {?}
         */
        UploadFileComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        UploadFileComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ecp-upload-file',
                        template: "<div class=\"upload-form\">\r\n  <div class=\"form-content\"\r\n       style=\" clear:both;text-align: center;  display:block; width: 480px; height: 36px; margin: 60px auto; \">\r\n    <div><span style=\"background: #DADADA; border:#DADADA 1px solid;  display: inline-block; width: 380px; height: 36px; line-height: 36px;border-radius:4px; color: #FFFFFF; float: left; overflow: hidden; \"><span\r\n      style=\" color: #191919; text-align: center;width:90px; float: right; height: 34px; line-height:34px;  background: #FFFFFF;\">\u9009\u62E9\u6587\u4EF6</span></span>\r\n      <span style=\"background: #1E5BD6; display: inline-block; width: 90px; height: 36px; line-height: 36px;border-radius:4px; color: #FFFFFF; float: right;  \">\u4E0A\u4F20\u6587\u4EF6</span>\r\n    </div>\r\n    <div class=\"error-info\">*\u6587\u4EF6\u683C\u5F0F\u4EC5\u9650\u4E8E.xlsx</div>\r\n  </div>\r\n  <div class=\"tips-info\">\r\n    1 \u70B9\u51FB\u94FE\u63A5\u4E0B\u8F7D\u6A21\u677F<a href=\"assets/\u5BFC\u5165\u6A21\u7248.xlsx\">\u4E0B\u8F7D\u6A21\u677F</a><br>\r\n    2 \u5BFC\u5165\u5C5E\u4E8E\u8FFD\u52A0\u5BFC\u5165\uFF0C\u5DF2\u7ECF\u5B58\u5728\u7684\u6570\u636E\u4E0D\u4FEE\u6539\u3002<br>\r\n    3 \u5BFC\u5165\u6587\u4EF6\u53EA\u5141\u8BB8\u6709\u4E00\u4E2Asheet\u9875<br>\r\n    4 \u8BBE\u5907\u7C7B\u578B: \u7BA1\u9053->pipe,\u4F20\u611F\u5668->sensor,\u9600\u95E8->valve,\u5835\u5934\u5C01\u677F->plug,\u8282\u70B9->node,\u6D88\u9632\u6813->hydrant<br>\r\n    5 \u533A\u57DF\u548C\u4EA7\u54C1\u5982\u679C\u4E0D\u5B58\u5728\uFF0C\u4E0D\u80FD\u6210\u529F\u5BFC\u5165\u3002<br>\r\n  </div>\r\n</div>\r\n",
                        styles: [".upload-form{width:700px;margin:10px auto}.upload-form .error-info{clear:both;display:block;color:#999;text-align:left;line-height:24px}.upload-form .tips-info{clear:both;border-top:1px solid #dadada;padding-top:10px;text-align:left;color:#6e6e6e;line-height:30px}"]
                    }] }
        ];
        /** @nocollapse */
        UploadFileComponent.ctorParameters = function () { return []; };
        return UploadFileComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var EcpTemplateComponent = /** @class */ (function () {
        function EcpTemplateComponent() {
        }
        /**
         * @return {?}
         */
        EcpTemplateComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        EcpTemplateComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'app-ecp-template',
                        template: "<p>\r\n  ecp-template works!\r\n</p>\r\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        EcpTemplateComponent.ctorParameters = function () { return []; };
        return EcpTemplateComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var MapSwitchComponent = /** @class */ (function () {
        function MapSwitchComponent() {
            this.selectId = 0;
        }
        /*
          switchArray = [{
            "name": "操作",
            "icon": "icon-operation"
          }, {
            "name": "展示",
            "icon": "icon-demonstration"
          }, {
            "name": "展示二",
            "icon": "icon-demonstration"
          }, {
            "name": "展示三",
            "icon": "icon-demonstration"
          }];
        */
        /**
         * @param {?} i
         * @return {?}
         */
        MapSwitchComponent.prototype.select = /**
         * @param {?} i
         * @return {?}
         */
            function (i) {
                this.selectId = i;
                //console.log("当前选中" + i + "#######" + this.switchArray[i].name);
            };
        /**
         * @return {?}
         */
        MapSwitchComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        MapSwitchComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ecp-switch',
                        template: "<div class=\"map-switch\"  [ngStyle]=\"customPosition\">\r\n  <a [ngClass]=\"{'hover':selectId==i}\" *ngFor=\"let item of switchArray; let i = index;\" (click)=\"select(i)\"><i class=\"icon dongxiniotwater {{item.icon}}\"></i>{{item.name}}</a>\r\n</div>\r\n",
                        styles: [".map-switch{position:absolute;width:auto;height:36px;line-height:36px;background:#fff;border-radius:4px;box-shadow:0 3px 8px 0 rgba(0,0,0,.3);overflow:hidden}.map-switch a{width:80px;float:left;text-align:center;color:rgba(25,25,25,1)}.map-switch a i{vertical-align:middle;margin-right:6px}.map-switch a.hover,.map-switch a:hover{background:#1e5bd6;color:#fff}"]
                    }] }
        ];
        /** @nocollapse */
        MapSwitchComponent.ctorParameters = function () { return []; };
        MapSwitchComponent.propDecorators = {
            customPosition: [{ type: i0.Input }],
            switchArray: [{ type: i0.Input }]
        };
        return MapSwitchComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var EcpAntUiModule = /** @class */ (function () {
        function EcpAntUiModule() {
        }
        EcpAntUiModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [common.CommonModule,],
                        declarations: [EcpAntUiComponent,
                            BreadCrumbComponent,
                            CopyrightComponent,
                            TopNavComponent,
                            AlarmComponent,
                            DropDownMenuComponent,
                            UserInfoComponent,
                            UserInfoListComponent,
                            DropDownGroupMenuComponent,
                            NavBarComponent,
                            FlexTopComponent,
                            FlexBottomComponent,
                            FlexBodyComponent,
                            FlexLeftComponent,
                            FlexRightComponent,
                            FlexTopCenterBottomComponent,
                            FlexLeftCenterRightComponent,
                            LayoutVerticalCenterComponent,
                            ModuleTitleComponent,
                            ModuleBottomComponent,
                            HelpInfoComponent,
                            CardInfoComponent,
                            PageLeftNavComponent,
                            SeachModuleComponent,
                            ListComponent,
                            HttpStatusPageComponent,
                            DropDownGroupMenuPlusComponent,
                            EcpAntTagsComponent,
                            LegendComponent,
                            RippleComponent,
                            MapDotPopupComponent,
                            SelectMapTypeComponent,
                            ToolBarComponent,
                            ToolBar2Component,
                            ToolBar3Component,
                            StatusBarComponent,
                            TabsComponent,
                            TabComponent,
                            UploadFileComponent,
                            EcpTemplateComponent,
                            MapSwitchComponent,
                        ],
                        exports: [
                            BreadCrumbComponent,
                            CopyrightComponent,
                            TopNavComponent,
                            AlarmComponent,
                            DropDownMenuComponent,
                            UserInfoComponent,
                            UserInfoListComponent,
                            DropDownGroupMenuComponent,
                            DropDownGroupMenuPlusComponent,
                            NavBarComponent,
                            FlexTopComponent,
                            FlexBottomComponent,
                            FlexBodyComponent,
                            FlexLeftComponent,
                            FlexRightComponent,
                            FlexTopCenterBottomComponent,
                            FlexLeftCenterRightComponent,
                            LayoutVerticalCenterComponent,
                            ModuleTitleComponent,
                            ModuleBottomComponent,
                            HelpInfoComponent,
                            PageLeftNavComponent,
                            SeachModuleComponent,
                            ListComponent,
                            HttpStatusPageComponent,
                            CardInfoComponent,
                            EcpAntTagsComponent,
                            LegendComponent,
                            RippleComponent,
                            MapDotPopupComponent,
                            SelectMapTypeComponent,
                        ],
                        schemas: [i0.CUSTOM_ELEMENTS_SCHEMA]
                    },] }
        ];
        return EcpAntUiModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.EcpAntUiService = EcpAntUiService;
    exports.EcpAntUiComponent = EcpAntUiComponent;
    exports.EcpAntUiModule = EcpAntUiModule;
    exports.ɵa = BreadCrumbComponent;
    exports.ɵu = CardInfoComponent;
    exports.ɵb = CopyrightComponent;
    exports.ɵx = ListComponent;
    exports.ɵba = EcpAntTagsComponent;
    exports.ɵbm = EcpTemplateComponent;
    exports.ɵy = HttpStatusPageComponent;
    exports.ɵp = FlexLeftCenterRightComponent;
    exports.ɵm = FlexLeftComponent;
    exports.ɵn = FlexRightComponent;
    exports.ɵl = FlexBodyComponent;
    exports.ɵk = FlexBottomComponent;
    exports.ɵo = FlexTopCenterBottomComponent;
    exports.ɵj = FlexTopComponent;
    exports.ɵt = HelpInfoComponent;
    exports.ɵs = ModuleBottomComponent;
    exports.ɵr = ModuleTitleComponent;
    exports.ɵq = LayoutVerticalCenterComponent;
    exports.ɵbn = MapSwitchComponent;
    exports.ɵbb = LegendComponent;
    exports.ɵbd = MapDotPopupComponent;
    exports.ɵbc = RippleComponent;
    exports.ɵi = NavBarComponent;
    exports.ɵd = AlarmComponent;
    exports.ɵz = DropDownGroupMenuPlusComponent;
    exports.ɵh = DropDownGroupMenuComponent;
    exports.ɵe = DropDownMenuComponent;
    exports.ɵc = TopNavComponent;
    exports.ɵg = UserInfoListComponent;
    exports.ɵf = UserInfoComponent;
    exports.ɵv = PageLeftNavComponent;
    exports.ɵw = SeachModuleComponent;
    exports.ɵbe = SelectMapTypeComponent;
    exports.ɵbi = StatusBarComponent;
    exports.ɵbk = TabComponent;
    exports.ɵbj = TabsComponent;
    exports.ɵbf = ToolBarComponent;
    exports.ɵbg = ToolBar2Component;
    exports.ɵbh = ToolBar3Component;
    exports.ɵbl = UploadFileComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ecp-ant-ui.umd.js.map