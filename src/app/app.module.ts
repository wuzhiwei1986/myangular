import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { AppRoutingModule } from './app-routing.module';
/**/
/*基础组件*/
import { BreadCrumbComponent } from './bread-crumb/bread-crumb.component';
import { StepsInfoComponent } from './steps-info/steps-info.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { MapSwitchComponent } from './map-switch/map-switch.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
/*数据展示*/
import { DetailsStyle1Component } from './details-style1/details-style1.component';
import { SeachModuleComponent } from './seach-module/seach-module.component';
import { ToolBar2Component } from './tool-bar2/tool-bar2.component';
import { PageDemoComponent } from './page-demo/page-demo.component';



registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    BreadCrumbComponent,
    StepsInfoComponent,
    NavBarComponent,
    TopNavComponent,
    MapSwitchComponent,
    ToolBarComponent,
    DetailsStyle1Component,
    SeachModuleComponent,
    ToolBar2Component,
    PageDemoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,RouterModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
