/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
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
        this.viewAll = new EventEmitter();
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
        { type: Component, args: [{
                    selector: 'ecp-alarm',
                    template: "<span class=\"alarm\" (mouseover)=\"isShow=true\" (mouseleave)=\"isShow=false\"> <span\r\n  class=\"alarm-num\"><span>{{alarmTotal}}</span></span> <span class=\"txt\">\u8B66\u62A5</span> <span class=\"icon\"><i\r\n  class=\"icon dongxiniotwater general_alarm\"></i></span>\r\n<div class=\"alarm-content\" [@displayState]=\"isShow == true? 'block' : 'none'\">\r\n  <div class=\"top-title\">\r\n    <div class=\"content\"> <span>{{alarmTitle}}</span>\r\n      <nav class=\"right-link\"><a (click)=\"viewMore()\">\u67E5\u770B\u5168\u90E8</a></nav>\r\n    </div>\r\n  </div>\r\n  <div class=\"alarm-list\">\r\n    <div class=\"content\">\r\n      <div class=\"no-data\" *ngIf=\"alarmList.length==0\">\u6682\u65E0\u8B66\u544A\u4FE1\u606F</div>\r\n      <table *ngIf=\"alarmList.length>0\">\r\n        <ng-content></ng-content>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n</span>\r\n",
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
                    styles: [":host>>>.alarm{position:relative;display:inline-block;float:right;font-family:MicrosoftYaHei;height:50px;width:90px;line-height:50px;text-align:right;padding-left:15px;padding-right:32px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAeCAYAAADOziUSAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAAAcElEQVRIx+3SMQqAMBBE0VkRco806XIWPamdns3qWwVEUaKkUNjppnkMy0qNElOma4VJkmOOOdYOAwKwcJ0FCNXiDVgNxZQ5gvPbRTFl+lLMbAVGSZMkkzSY2frkZv2+7EA9hU7YW6Tkw3/mmGN/wzY9A2lGL1XvVQAAAABJRU5ErkJggg==) right center no-repeat}:host>>>.alarm .icon{position:absolute;right:35px;top:0;cursor:pointer}:host>>>.alarm .icon i{font-size:18px;color:#fff!important}:host>>>.alarm .alarm-num{position:absolute;right:60px;top:3px;z-index:10;border-radius:10px;height:20px;line-height:20px;min-width:20px;display:inline-block;background:rgba(232,30,30,1)}:host>>>.alarm .alarm-num span{display:block;color:#fff;height:20px;text-align:center;font-size:12px;padding:0 5px}:host>>>.alarm .txt{position:absolute;right:35px;color:#fff}:host>>>.alarm-content{position:absolute;right:32px;top:50px;width:428px;padding-bottom:4px;z-index:100000;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAawAAAAECAYAAADS8AubAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA39pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2OGIyMGJhZi0xYWJiLTdmNDctOGJjZi02YzI0N2MyZTJiMmQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Qjc0M0RGQzdFNDBDMTFFODg3NDdENzI5RTMyRUQyOEEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Qjc0M0RGQzZFNDBDMTFFODg3NDdENzI5RTMyRUQyOEEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmJjMzQ3MjI2LWZmOTktYmU0Ni1iMDE2LTIxNWQ4NWQzMzk5MSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjJjMTRhMTZlLTViMjctOTE0My05Mjk2LTIxZmI5ODVkMzc5YSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrzxMr0AAAB0SURBVHja7NVJCoAwEETRdBxA8P4nFYQ4tN1SXkFd/AdFEpduvrl7MbOulDLGptisM9/5HQCAtxyxFltji84WrTpMwaqKU69QDXob/w4A8CJXtDaFa893tOp8gmWKU65qxAoA8FW0Ti3vnu5gAQDwd5cAAwCFGij5wONw1AAAAABJRU5ErkJggg==) center bottom no-repeat}:host>>>.alarm-content .top-title{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAawAAAAMCAYAAAA+o4n2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5NzhEMkY2RkUxOEMxMUU4OTAxREI0M0UzQkNBNzk2QiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5NzhEMkY3MEUxOEMxMUU4OTAxREI0M0UzQkNBNzk2QiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjk3OEQyRjZERTE4QzExRTg5MDFEQjQzRTNCQ0E3OTZCIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjk3OEQyRjZFRTE4QzExRTg5MDFEQjQzRTNCQ0E3OTZCIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+4ouqUwAAAZ9JREFUeNrs3M9KAkEcwPEd3W3tHSIPkk+0EXnoATyKiAcRERER8SE6GBU9UXQQOvgIrZXb/HImhxBtBTXY7wd+afsHpQ5fJiZVkiQeAAD/nS9flFL8JAAAmygzrsTM3sniyt92AQAg46VSKqcf3BELO7oViz285voVFgAAG2KV1xPITCaTohyvVCpT/fAuI3HZR7QIFgAgbaxO9BTG43EpiqJHOTebzS5rtdqLt/wz4fwQ0crxKwEAbInVab/fL1er1acgCM5l5Lkck3Pmmry5h2ABAI4Tq16vV9arqYcwDM/sNfJcjsm5Q0WLYAEANsaqXq/fu7FyoyXnDhUtggUASB2rY0RLydZ1s31QrRkAQHbY3YAFHaCLbbFyxXH8OhqNrlqt1rP+9s1b7iD83PF9JL/nu1UmWMpb7a/3zZtm9QUA2fGzuup0OqVms3n311i50RoMBtf6ftk9ODfB2mXn4MLc++Gt/tcrscFyl4GhXdIRLQDIDFm4+I1Go9jtdm/TxsqNVrvdvhkOh1MTnLSfQGFjJcGLbfhky/yXAAMArROZmKA15RoAAAAASUVORK5CYII=) center 0 no-repeat;height:62px;line-height:50px;padding:12px 0 0;text-align:left;font-size:18px;font-family:MicrosoftYaHei-Bold;font-weight:700;color:rgba(25,25,25,1);overflow:hidden}:host>>>.alarm-content .top-title .content{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAawAAAABCAYAAACCPZooAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA39pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2OGIyMGJhZi0xYWJiLTdmNDctOGJjZi02YzI0N2MyZTJiMmQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Qjc0M0RGQzNFNDBDMTFFODg3NDdENzI5RTMyRUQyOEEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Qjc0M0RGQzJFNDBDMTFFODg3NDdENzI5RTMyRUQyOEEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmJjMzQ3MjI2LWZmOTktYmU0Ni1iMDE2LTIxNWQ4NWQzMzk5MSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjJjMTRhMTZlLTViMjctOTE0My05Mjk2LTIxZmI5ODVkMzc5YSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pj/HqeoAAAA3SURBVHjaYvz//z8DIyMjBwMDgwAQSwD55xlGwSgYBaNgFIyCAQbAuskQSL0A4g/AuukHQIABAJc/DP8nP3qeAAAAAElFTkSuQmCC) center 0 repeat-y;width:100%;margin:0 auto;padding:0 14px}:host>>>.alarm-content .top-title .content .right-link{float:right;font-size:14px;font-weight:400;color:#191919}:host>>>.alarm-content .top-title .content .right-link a{color:#191919}:host>>>.alarm-list{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAawAAAABCAYAAACCPZooAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA39pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2OGIyMGJhZi0xYWJiLTdmNDctOGJjZi02YzI0N2MyZTJiMmQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Qjc0M0RGQzNFNDBDMTFFODg3NDdENzI5RTMyRUQyOEEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Qjc0M0RGQzJFNDBDMTFFODg3NDdENzI5RTMyRUQyOEEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmJjMzQ3MjI2LWZmOTktYmU0Ni1iMDE2LTIxNWQ4NWQzMzk5MSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjJjMTRhMTZlLTViMjctOTE0My05Mjk2LTIxZmI5ODVkMzc5YSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pj/HqeoAAAA3SURBVHjaYvz//z8DIyMjBwMDgwAQSwD55xlGwSgYBaNgFIyCAQbAuskQSL0A4g/AuukHQIABAJc/DP8nP3qeAAAAAElFTkSuQmCC) center 0 repeat-y;padding:0 4px}:host>>>.alarm-list .content{border-top:1px solid #dededf;overflow-y:auto;overflow-x:hidden;height:250px}:host>>>.alarm-list .content .no-data{height:248px;line-height:248px;text-align:center}:host>>>.alarm-list table{width:410px;margin:0 auto;font-size:12px}:host>>>.alarm-list table tr td,:host>>>.alarm-list table tr th{font-size:14px;font-weight:400;height:38px;line-height:38px;text-align:left;vertical-align:middle;color:#191919}:host>>>.alarm-list table tr td:first-child{padding-left:15px;text-align:left}:host>>>.alarm-list table tr td:last-child{padding-right:15px;text-align:right}:host>>>.alarm-list table td a{color:#1e5bd6;font-weight:700}:host>>>.alarm-list table td span.alarm-icon{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABCklEQVQ4jaXTMUoDURSF4W/CmMY9DBG7YJGApWBERBQrdyBioStwC4JYWQ6Chb2F2AQRxFIQrcRG02UFEUMMFpnBMeSNiqd5xbn3v4f33o26SWJMDWxhGTX08YI2TvBcLI4KgCqOsIvKODXTAMfYx3sRUMUFVgKN42pjDR/5pMM/NMtqD/IEc3gIxN7EEOcTvAHqMXYCzfCGKODF2IvRKok6XQKAVozZfwBqcYn5G8BUjA7qgYL5HwZ0YtyWABaNLiukm6ibJE3cmfwS69l5OcEbolnBPdLAhFOcBbwUj8WvfIWFkrhFXWMDvTx23+h7plm0kPJlWkWP79uYq4FtLGEmg7/6WuenYvEniHo1pbDXNhgAAAAASUVORK5CYII=) no-repeat!important;width:16px;height:16px;display:block}:host>>>.alarm-list table tr:hover td{background:#d2ddf2;cursor:pointer}"]
                }] }
    ];
    /** @nocollapse */
    AlarmComponent.ctorParameters = function () { return []; };
    AlarmComponent.propDecorators = {
        alarmList: [{ type: Input }],
        alarmTotal: [{ type: Input }],
        alarmTitle: [{ type: Input }],
        viewAll: [{ type: Output }]
    };
    return AlarmComponent;
}());
export { AlarmComponent };
if (false) {
    /** @type {?} */
    AlarmComponent.prototype.isShow;
    /** @type {?} */
    AlarmComponent.prototype.alarmList;
    /** @type {?} */
    AlarmComponent.prototype.alarmTotal;
    /** @type {?} */
    AlarmComponent.prototype.alarmTitle;
    /** @type {?} */
    AlarmComponent.prototype.viewAll;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxhcm0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZWNwLWFudC11aS8iLCJzb3VyY2VzIjpbImxpYi9uYXYtbW9kdWxlL2FsYXJtL2FsYXJtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBQyxNQUFNLHFCQUFxQixDQUFDOztJQTRDM0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BcURFO0lBR0Y7c0JBaEZrQixLQUFLOzt5QkFFYSxFQUFFOzswQkFFUixDQUFDOzs7O3VCQU1YLElBQUksWUFBWSxFQUFFO0tBdUVyQztJQXJFRDs7Ozs7O01BTUU7Ozs7SUFFRixpQ0FBUTs7O0lBQVI7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0tBQ3ZCOzs7O0lBNkRELGlDQUFROzs7SUFBUjtRQUNJLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLEVBQUU7WUFDdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztTQUMzQzs7S0FFSjs7Z0JBMUdKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsV0FBVztvQkFDckIsczRCQUFxQztvQkFFckMsVUFBVSxFQUFFO3dCQUNSLE9BQU8sQ0FBQyxjQUFjLEVBQUU7NEJBQ3BCLEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDO2dDQUNoQixPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHOzZCQUNoQyxDQUFDLENBQUM7NEJBQ0gsS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUM7Z0NBQ2pCLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEdBQUc7NkJBQ2pDLENBQUMsQ0FBQzs0QkFDSCxVQUFVLENBQUMsZUFBZSxFQUFFLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQzs0QkFDcEQsVUFBVSxDQUFDLGVBQWUsRUFBRSxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7eUJBQ3RELENBQUM7cUJBQ0w7O2lCQUNKOzs7Ozs0QkFJSSxLQUFLOzZCQUVMLEtBQUs7NkJBRUwsS0FBSzswQkFJTCxNQUFNOzt5QkEvQlg7O1NBb0JhLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge2FuaW1hdGUsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlcn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZWNwLWFsYXJtJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9hbGFybS5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9hbGFybS5jb21wb25lbnQuY3NzJ10sXHJcbiAgICBhbmltYXRpb25zOiBbXHJcbiAgICAgICAgdHJpZ2dlcignZGlzcGxheVN0YXRlJywgW1xyXG4gICAgICAgICAgICBzdGF0ZSgnbm9uZScsIHN0eWxlKHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdub25lJywgb3BhY2l0eTogJzAnLFxyXG4gICAgICAgICAgICB9KSksXHJcbiAgICAgICAgICAgIHN0YXRlKCdibG9jaycsIHN0eWxlKHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsIG9wYWNpdHk6ICcxJyxcclxuICAgICAgICAgICAgfSkpLFxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCdub25lID0+IGJsb2NrJywgYW5pbWF0ZSgnMTAwbXMgbGluZWFyJykpLFxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCdibG9jayA9PiBub25lJywgYW5pbWF0ZSgnODBtcyBsaW5lYXInKSlcclxuICAgICAgICBdKVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWxhcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgaXNTaG93OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAvLyDkvKDlhaXliJfooahcclxuICAgIEBJbnB1dCgpIGFsYXJtTGlzdDogQXJyYXk8c3RyaW5nPiA9IFtdO1xyXG4gICAgLy8g5Lyg5YWl5YiX6KGo5oC76ZW/5bqmXHJcbiAgICBASW5wdXQoKSBhbGFybVRvdGFsOiBudW1iZXIgPSAwO1xyXG4gICAgLy8g5Lyg5YWl5qCH6aKYXHJcbiAgICBASW5wdXQoKSBhbGFybVRpdGxlOiBzdHJpbmc7XHJcbiAgICAvLyDlm57kvKBJRFxyXG4gICAgLy8gQE91dHB1dCgpIGRpc3Bvc2VkID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcbiAgICAvLyDngrnlh7vigJjmn6XnnIvlhajpg6jigJnlm57kvKBcclxuICAgIEBPdXRwdXQoKSB2aWV3QWxsID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIC8qXHJcblxyXG4gICAgICBkaXNwb3NlKGlkKSB7XHJcbiAgICAgICAgdGhpcy5kaXNwb3NlZC5lbWl0KGlkKTtcclxuICAgICAgICAvLyBhbGVydChpZCk7XHJcbiAgICAgIH1cclxuICAgICovXHJcblxyXG4gICAgdmlld01vcmUoKSB7XHJcbiAgICAgICAgdGhpcy52aWV3QWxsLmVtaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiDmtYvor5VcclxuICAgICAgYWxhcm1MaXN0ID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiAnMScsXHJcbiAgICAgICAgICB0aXRsZTogJ+a1gemHj+iuoeOAkDAwNDU1N+OAkTIwMOa1gemAn+i2hei/hzEwbcKzJ1xyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiAnMicsXHJcbiAgICAgICAgICB0aXRsZTogJ+OAkDAwRFgzNDU1N+OAkTIwMOa1gemAn+i2hei/hzEwbcKzJ1xyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiAnMycsXHJcbiAgICAgICAgICB0aXRsZTogJ+a1gemHj+iuoeOAkDAwRFgzNDU1N+OAkTIwMOa1gei2hei/hzEwbcKzJ1xyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiAnNCcsXHJcbiAgICAgICAgICB0aXRsZTogJ+a1gemHj+iuoeOAkDAwRFg0NTU344CR5rWB6YCf6LaF6L+HMTBtwrMnXHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6ICc1JyxcclxuICAgICAgICAgIHRpdGxlOiAn5rWB6YePMjAw5rWB6YCf6K6h44CQMjDmtYHpgJ/jgJEyMDDmtYHpgJ/otoXov4cxMG3CsydcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogJzYnLFxyXG4gICAgICAgICAgdGl0bGU6ICcyMDDmtYHpgJ/mtYHph4/orqHjgJAwMEQ1NTfjgJEyMDDmtYHpgJ/otoXov4cxMG3CsydcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogJzcnLFxyXG4gICAgICAgICAgdGl0bGU6ICfmtYHph4/orqEyMDDmtYHpgJ/jgJAwMEQ1N+OAkTIwMOa1gemAn+i2hei/hzEwbcKzJ1xyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiAnOCcsXHJcbiAgICAgICAgICB0aXRsZTogJ+a1gemHj+iuoeOAkDAwRFgzNDU1N+OAkTIwMOa1gemAn+i2hei/hzEwbcKzJ1xyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiAnOScsXHJcbiAgICAgICAgICB0aXRsZTogJzIwMOa1gemHj+iuoeOAkDAwRFgzNDU1N+OAkTIwMOa1gei/hzEwbcKzJ1xyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiAnMTAnLFxyXG4gICAgICAgICAgdGl0bGU6ICfmtYHph4/orqHjgJAwMERYMzQ1NTfjgJEyMDDmtYHpgJ/otoXov4cxMG3CsydcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICBdO1xyXG4gICAgKi9cclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYWxhcm1Ub3RhbCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWxhcm1Ub3RhbCA9IHRoaXMuYWxhcm1MaXN0Lmxlbmd0aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2FsYXJtTGlzdCcsIHRoaXMuYWxhcm1MaXN0KTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19