# 组件API

随便自定义内容，自定义内容样式要写在父组件，<br/>
        参数定义顶部topHeight和底部bottomHeight的高度，<br/>
        ecp-flex-body会自动适应，超出高度会出现滚动条
* * *
## 参数说明

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| [topHeight] | boolean | 头部宽度  |
| [bottomHeight] |string| 底部宽度  |
| [topBg] |string| 头部背景颜色 |
| [bodyBg] |string| 中间背景颜色 |
| [bottomBg] |string|  底部背景颜色|
 
 * * *
 

## 上中下组合 组件代码
```html
<ecp-flex-tcb [topHeight]="60" [bottomHeight]="60">
    <ecp-flex-top>
        <ecp-module-title>
            筛查<a class="close"><i class="icon dongxiniotwater general_close"></i></a>
        </ecp-module-title>
    </ecp-flex-top>
    <ecp-flex-body>
        <div style="background: tan;padding: 20px;">自由配置 ecp-flex-body<br/>
            随便自定义内容，自定义内容样式要写在父组件，<br/>
            参数定义顶部topHeight和底部bottomHeight的高度，<br/>ecp-flex-body会自动适应，超出高度会出现滚动条
        </div>
        <div style="height: 1500px;background:darkseagreen;padding: 10px;"></div>
    </ecp-flex-body>
    <ecp-flex-bottom>
        <ecp-module-bottom>
            <div class="module-footer">
                <button nz-button nzType="default">重置</button>
                <button nz-button nzType="primary">筛查</button>
            </div>
        </ecp-module-bottom>
    </ecp-flex-bottom>
</ecp-flex-tcb>
```

## 单中间 组件代码
```html
<ecp-flex-tcb>
                        <ecp-flex-top>
                            <div class="module-title">标题<a class="close"><i class="icon-close"></i> </a></div>
                        </ecp-flex-top>
                        <ecp-flex-body>
                            <div style="height:11000px;background: darkseagreen;padding: 20px;">
                                不传参数，ecp-flex-top和ecp-flex-bottom都不会显示，ecp-flex-body自动适应
                            </div>
                        </ecp-flex-body>
                        <ecp-flex-bottom>
                            <div class="module-footer">
                                <button nz-button nzType="default">重置</button>
                                <button nz-button nzType="primary">筛查</button>
                            </div>
                        </ecp-flex-bottom>
</ecp-flex-tcb>
```