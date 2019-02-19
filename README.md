# 关于 ecp-ant-ui

公司项目前端主要基于Angular ng-zorro框架开发 https://ng.ant.design/   
本项目的主要目的是针对公司现在项目需求，提供ng-zorro UI框架中未有提供的前端组件   
1. 组件基于现代浏览器开发，兼容IE11以上浏览器  
2. 所有组件均以"ecp-"开头  
3. 模块正常运行在Angular 7版本中
---
# 安装方法

1.在命令行中安装 npm install ecp-ant-ui --save  
2.在app.module.ts 中添加  
```diff
import { EcpAntUiModule } from 'ecp-ant-ui';
```
```bash
@NgModule({
imports: [
      EcpAntUiModule,
      ...
], 
)}
``` 
2.在项目文件angular.json 的style属性中引入样式表  
```diff
"./node_modules/ecp-ant-ui/ecp-ant-ui.less"  
```

---
# 启动项目

1. npm install 安装依赖
2. 输入命令 `ng serve` 运行项目
3. 打开浏览器查看效果 [http://localhost:4200](http://localhost:4200)  

---
# 更新日志
**"version": "0.1.7"**
1.  增加 echarts.blue.js 自定义样式

**"version": "0.1.3"**
1.  增加完善 ecp-map-legend 地图图例组件
2.  增加完善 ecp-ripple 地图组件
3.  增加完善 ecp-map-dot-popup 地图组件
4.  增加完善 ecp-select-map-type 地图组件

**"version": "0.1.1",营抄,CAS,管漏运行稳定**
1.  完善 alarm 组件
2.  完善 ecp-ant-tags 组件
3.  增加 ecp-drop-down-group-menu-plus 组件

**"version": "0.0.26"**
1. 新增card-info


**"version": "0.0.12"**
1. 新增bread-crumb
2. 新增copyright
3. 新增dataTable-module
4. 新增layout
5. 新增nav-module
6. 新增seach-module
7. 新增httpPage
