import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
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
import { BreadCrumbComponent } from './components/bread-crumb/bread-crumb.component';
import { StepsInfoComponent } from './steps-info/steps-info.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TopNavComponent } from './navMoudle/top-nav/top-nav.component';
import { MapSwitchComponent } from './map-switch/map-switch.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { ToolBar2Component } from './tool-bar2/tool-bar2.component';
import { ToolBar3Component } from './tool-bar3/tool-bar3.component';
/*数据展示*/
import { DetailsStyle1Component } from './details-style1/details-style1.component';
import { SeachModuleComponent } from './seach-module/seach-module.component';

import { PageDemoComponent } from './page-demo/page-demo.component';
import { OpenDetailsInfoComponent } from './open-details-info/open-details-info.component';
import { AlarmComponent } from './navMoudle/alarm/alarm.component';
import { DropDownMenuComponent } from './navMoudle/drop-down-menu/drop-down-menu.component';
import { UserInfoComponent } from './navMoudle/user-info/user-info.component';
import { OpenDetailsInfo2Component } from './open-details-info2/open-details-info2.component';
import { RippleComponent } from './animation/ripple/ripple.component';
import { AboutComponent} from './docs/about/about.component';

/*指令*/
import { TestDirective } from './directive/test.directive';
/*页面介绍*/
import { ToolBarPageComponent } from './docs/components/tool-bar-page/tool-bar-page.component';
import { SwitchPageComponent } from './docs/components/switch-page/switch-page.component';
import { DotRipplePageComponent } from './docs/components/dot-ripple-page/dot-ripple-page.component';
import { NavBarPageComponent } from './docs/components/nav-bar-page/nav-bar-page.component';
import { TopNavPageComponent } from './docs/components/top-nav-page/top-nav-page.component';
import { TestComponent } from './test/test.component';
import { TestTableComponent } from './test-table/test-table.component';
import { IconPageComponent } from './docs/components/icon-page/icon-page.component';
import { TablePageComponent } from './docs/components/table-page/table-page.component';
/*登录*/
import { EcpLoginformComponent } from './ecp-login-moudle/ecp-loginform/ecp-loginform.component';
import { EcpLoginPageComponent } from './ecp-login-moudle/ecp-login-page/ecp-login-page.component';
import { EcpOpenTagsComponent } from './ecp-tags-model/ecp-open-tags/ecp-open-tags.component';
import { EcpOpenTagComponent } from './ecp-tags-model/ecp-open-tag/ecp-open-tag.component';
import { EcpTabsetComponent } from './ecp-tegs-test/ecp-tabset/ecp-tabset.component';
import { EcpTabComponent } from './ecp-tegs-test/ecp-tab/ecp-tab.component';
import { EcpTabContentComponent } from './ecp-tegs-test/ecp-tab-content/ecp-tab-content.component';
import { GenerateBillPageComponent } from './demo/generate-bill-page/generate-bill-page.component';



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
    PageDemoComponent,
    OpenDetailsInfoComponent,
    AlarmComponent,
    DropDownMenuComponent,
    UserInfoComponent,
    OpenDetailsInfo2Component,
    RippleComponent,
    AboutComponent,
    TestDirective,
    ToolBarPageComponent,
    SwitchPageComponent,
    DotRipplePageComponent,
    NavBarPageComponent,
    TopNavPageComponent,
    TestComponent,
    TestTableComponent,
    IconPageComponent,
    TablePageComponent,
    EcpLoginformComponent,
    EcpLoginPageComponent,
    EcpOpenTagsComponent,
    EcpOpenTagComponent,
    EcpTabsetComponent,
    EcpTabComponent,
    EcpTabContentComponent,
    ToolBar3Component,
    GenerateBillPageComponent,

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
