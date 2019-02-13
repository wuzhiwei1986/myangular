/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
export class TopNavComponent {
    constructor() {
    }
    /**
     * @param {?} id
     * @return {?}
     */
    disposedId(id) {
        alert('alarm组件回传ID------' + id);
    }
    /**
     * @param {?} txt
     * @return {?}
     */
    test(txt) {
        console.log(txt);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
TopNavComponent.decorators = [
    { type: Component, args: [{
                selector: 'ecp-top-nav',
                template: "<div class=\"top-header\">\r\n  <ng-content></ng-content>\r\n</div>\r\n",
                styles: [".top-header{background:#303844;height:50px;min-width:1000px;z-index:1000}:host>>>.top-header .logo{height:32px;margin-left:23px;margin-top:8px;display:inline-block;float:left;padding-right:20px;margin-right:20px;border-right:3px solid #fff;cursor:pointer}:host>>>.top-header .logo img{vertical-align:top;height:32px}:host>>>.top-header .name{display:inline-block;float:left;color:#fff;font-size:24px;margin-top:5px;cursor:pointer}:host>>>.logout{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAUCAYAAACAl21KAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAABrklEQVQ4y53UP2xNcRQH8M+7ESUGR0loIo2BrSwikSA1EPbOJaQbtg4maWJgNzMwiIGJpIlqTEgsEiYkBIlKDGeokAY1vPPqpel7LSf55f7O+f7J+Z3fvbelT2TmRjyr9GBEfO/FXad/7Ma+rv3LNRll5jqM41VEPO/R5QGM4FZE/OzUmy7CZszgBqb7dDldnJnS/DXKzPW4j9GqP+lj1MFG8aC0Sx1dwuHa38ZYH6Ox4sCh0moycwiTBcxgPCIWerkUNo6HVZrMzKEGZzCA3zgXEb+sEsU5X5oBnG5wvPDZiHi9mkmX2WvMVnqi0b7K1QbcK57Wc6TBYCVz/2H0uZ6DDb5VsnUF4jwWa82vgHc08w3eVLJ/hTm8077usdovj47mbSszr+BidbYrIr6u5UyZuQ3vsQlXG9wpbBOm/mE+U6Wx5JGZ9zJzsdbEGrqZ6OLfhVYBO/AcO2uw13B5+TEzc0t1cqG0n3AgIuZaXaS92q/99ir90P5kOpexB8ewofIvOBkRL5Y66jIbxvUS9ItHOBsRHzqF1kqszDyKUziCYSzgo/Zv92ZEPF6u+QMQUZg4AXXrgwAAAABJRU5ErkJggg==) no-repeat;width:18px;height:20px;text-indent:-999999px;display:inline-block;margin-top:16px;margin-right:30px;float:right!important}"]
            }] }
];
/** @nocollapse */
TopNavComponent.ctorParameters = () => [];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9wLW5hdi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9lY3AtYW50LXVpLyIsInNvdXJjZXMiOlsibGliL25hdi1tb2R1bGUvdG9wLW5hdi90b3AtbmF2LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBUyxNQUFNLGVBQWUsQ0FBQztBQU9oRCxNQUFNO0lBWUo7S0FDQzs7Ozs7SUFWRCxVQUFVLENBQUMsRUFBRTtRQUNYLEtBQUssQ0FBQyxtQkFBbUIsR0FBRyxFQUFFLENBQUMsQ0FBQztLQUNqQzs7Ozs7SUFFRCxJQUFJLENBQUMsR0FBRztRQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDbEI7Ozs7SUFNRCxRQUFRO0tBQ1A7OztZQXJCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLG1GQUF1Qzs7YUFFeEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZWNwLXRvcC1uYXYnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90b3AtbmF2LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi90b3AtbmF2LmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVG9wTmF2Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgLy8g5aSE55CG6K2m5ZGKXHJcbiAgZGlzcG9zZWRJZChpZCkge1xyXG4gICAgYWxlcnQoJ2FsYXJt57uE5Lu25Zue5LygSUQtLS0tLS0nICsgaWQpO1xyXG4gIH1cclxuXHJcbiAgdGVzdCh0eHQpIHtcclxuICAgIGNvbnNvbGUubG9nKHR4dCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==