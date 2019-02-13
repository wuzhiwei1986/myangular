/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
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
        { type: Component, args: [{
                    selector: 'ecp-top-nav',
                    template: "<div class=\"top-header\">\r\n  <ng-content></ng-content>\r\n</div>\r\n",
                    styles: [".top-header{background:#303844;height:50px;min-width:1000px;z-index:1000}:host>>>.top-header .logo{height:32px;margin-left:23px;margin-top:8px;display:inline-block;float:left;padding-right:20px;margin-right:20px;border-right:3px solid #fff;cursor:pointer}:host>>>.top-header .logo img{vertical-align:top;height:32px}:host>>>.top-header .name{display:inline-block;float:left;color:#fff;font-size:24px;margin-top:5px;cursor:pointer}:host>>>.logout{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAUCAYAAACAl21KAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAABrklEQVQ4y53UP2xNcRQH8M+7ESUGR0loIo2BrSwikSA1EPbOJaQbtg4maWJgNzMwiIGJpIlqTEgsEiYkBIlKDGeokAY1vPPqpel7LSf55f7O+f7J+Z3fvbelT2TmRjyr9GBEfO/FXad/7Ma+rv3LNRll5jqM41VEPO/R5QGM4FZE/OzUmy7CZszgBqb7dDldnJnS/DXKzPW4j9GqP+lj1MFG8aC0Sx1dwuHa38ZYH6Ox4sCh0moycwiTBcxgPCIWerkUNo6HVZrMzKEGZzCA3zgXEb+sEsU5X5oBnG5wvPDZiHi9mkmX2WvMVnqi0b7K1QbcK57Wc6TBYCVz/2H0uZ6DDb5VsnUF4jwWa82vgHc08w3eVLJ/hTm8077usdovj47mbSszr+BidbYrIr6u5UyZuQ3vsQlXG9wpbBOm/mE+U6Wx5JGZ9zJzsdbEGrqZ6OLfhVYBO/AcO2uw13B5+TEzc0t1cqG0n3AgIuZaXaS92q/99ir90P5kOpexB8ewofIvOBkRL5Y66jIbxvUS9ItHOBsRHzqF1kqszDyKUziCYSzgo/Zv92ZEPF6u+QMQUZg4AXXrgwAAAABJRU5ErkJggg==) no-repeat;width:18px;height:20px;text-indent:-999999px;display:inline-block;margin-top:16px;margin-right:30px;float:right!important}"]
                }] }
    ];
    /** @nocollapse */
    TopNavComponent.ctorParameters = function () { return []; };
    return TopNavComponent;
}());
export { TopNavComponent };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9wLW5hdi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9lY3AtYW50LXVpLyIsInNvdXJjZXMiOlsibGliL25hdi1tb2R1bGUvdG9wLW5hdi90b3AtbmF2LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBUyxNQUFNLGVBQWUsQ0FBQzs7SUFtQjlDO0tBQ0M7SUFYRCxPQUFPOzs7OztJQUNQLG9DQUFVOzs7O0lBQVYsVUFBVyxFQUFFO1FBQ1gsS0FBSyxDQUFDLG1CQUFtQixHQUFHLEVBQUUsQ0FBQyxDQUFDO0tBQ2pDOzs7OztJQUVELDhCQUFJOzs7O0lBQUosVUFBSyxHQUFHO1FBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNsQjs7OztJQU1ELGtDQUFROzs7SUFBUjtLQUNDOztnQkFyQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO29CQUN2QixtRkFBdUM7O2lCQUV4Qzs7OzswQkFORDs7U0FPYSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2VjcC10b3AtbmF2JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdG9wLW5hdi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vdG9wLW5hdi5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFRvcE5hdkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIC8vIOWkhOeQhuitpuWRilxyXG4gIGRpc3Bvc2VkSWQoaWQpIHtcclxuICAgIGFsZXJ0KCdhbGFybee7hOS7tuWbnuS8oElELS0tLS0tJyArIGlkKTtcclxuICB9XHJcblxyXG4gIHRlc3QodHh0KSB7XHJcbiAgICBjb25zb2xlLmxvZyh0eHQpO1xyXG4gIH1cclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=