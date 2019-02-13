## 关于 ecp-ant-ui

公司项目前端主要基于Angular ng-zorro框架开发 https://ng.ant.design/   
本项目的主要目的是针对公司现在项目需求，提供ng-zorro UI框架中未有提供的前端组件   
1. 组件基于现代浏览器开发，兼容IE11以上浏览器  
2. 所有组件均以"ecp-"开头  
3. 模块正常运行在Angular 7版本中


## 安装方法

1.在命令行中安装 npm install ecp-ant-ui --save  
2.在app.module.ts 中添加  
> import { EcpAntUiModule } from 'ecp-ant-ui';
```
@NgModule({
imports: [
      EcpAntUiModule,
      ...
], 
)}
``` 
2.在项目文件angular.json 的style属性中引入样式表  
> "./node_modules/ecp-ant-ui/ecp-ant-ui.less"  



## 启动项目
1. npm install 安装依赖
2. 输入命令 `ng serve` 运行项目
3. 打开浏览器查看效果 [http://localhost:4200](http://localhost:4200)

