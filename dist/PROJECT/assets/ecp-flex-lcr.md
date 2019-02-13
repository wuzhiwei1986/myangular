# 组件API

左中右布局只需要配置左边和右边的宽度就可以，中间组件会自动适应，超出高度会出现垂直滚动条
* * *
## 参数说明

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| [leftWidth] | string | 自定义左边宽度  |
| [rightWidth] |string| 自定义右边宽度  |
| [leftBg] |string| 自定义左边背景颜色，默认#ffffff |
| [bodyBg] |string| 自定义中间背景颜色，默认#ffffff |
| [rightBg] |string|  自定义右边背景颜色，默认#ffffff|
 
 * * *
 
## 组件代码
```html
<ecp-flex-lcr 
[leftWidth]="customLeftWidth" 
[rightWidth]="customRightWidth" 
[leftBg]="'#3f67d7'" 
[bodyBg]="'#e69457'" 
[rightBg]="'#4c9366'">
            <ecp-flex-left>
              left1
            </ecp-flex-left>
            <ecp-flex-body>
              可以自由配置两边宽度<br/>
              左边宽<input [(ngModel)]="customLeftWidth"><br/>
              右边宽<input [(ngModel)]="customRightWidth">
            </ecp-flex-body>
            <ecp-flex-right>
              right
            </ecp-flex-right>
</ecp-flex-lcr>
```