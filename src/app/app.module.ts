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
import { StepsInfoComponent } from './components/steps-info/steps-info.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { TopNavComponent } from './components/navMoudle/top-nav/top-nav.component';
import { MapSwitchComponent } from './components/map-switch/map-switch.component';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { ToolBar2Component } from './components/tool-bar2/tool-bar2.component';
import { ToolBar3Component } from './components/tool-bar3/tool-bar3.component';
/*数据展示*/
import { DetailsStyle1Component } from './demo/details-style1/details-style1.component';
import { SeachModuleComponent } from './components/seach-module/seach-module.component';

import { PageDemoComponent } from './demo/page-demo/page-demo.component';
import { OpenDetailsInfoComponent } from './components/open-details-info/open-details-info.component';
import { AlarmComponent } from './components/navMoudle/alarm/alarm.component';
import { DropDownMenuComponent } from './components/navMoudle/drop-down-menu/drop-down-menu.component';
import { UserInfoComponent } from './components/navMoudle/user-info/user-info.component';
import { OpenDetailsInfo2Component } from './components/open-details-info2/open-details-info2.component';
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
import { EcpLoginformComponent } from './components/ecp-login-moudle/ecp-loginform/ecp-loginform.component';
import { EcpLoginPageComponent } from './components/ecp-login-moudle/ecp-login-page/ecp-login-page.component';
import { EcpOpenTagsComponent } from './components/ecp-tags-model/ecp-open-tags/ecp-open-tags.component';
import { EcpOpenTagComponent } from './components/ecp-tags-model/ecp-open-tag/ecp-open-tag.component';
import { EcpTabsetComponent } from './ecp-tegs-test/ecp-tabset/ecp-tabset.component';
import { EcpTabComponent } from './ecp-tegs-test/ecp-tab/ecp-tab.component';
import { EcpTabContentComponent } from './ecp-tegs-test/ecp-tab-content/ecp-tab-content.component';
import { GenerateBillPageComponent } from './demo/generate-bill-page/generate-bill-page.component';
import { MapDotPopupComponent } from './components/map-dot-popup/map-dot-popup.component';
import { WaterConsumptionAnalysisPopupComponent } from './demo/water-consumption-analysis-popup/water-consumption-analysis-popup.component';
import { BreadCrumbPageComponent } from './docs/components/bread-crumb-page/bread-crumb-page.component';
import { StatusBarComponent } from './components/status-bar/status-bar.component';
import { StatusBarPageComponent } from './docs/components/status-bar-page/status-bar-page.component';
import { LegendComponent } from './components/legend/legend.component';
import { PageDemo2Component } from './demo/page-demo2/page-demo2.component';
import { DocsComponentRecommendComponent } from './components/docs-component-recommend/docs-component-recommend.component';
import { SelectMapTypeComponent } from './components/select-map-type/select-map-type.component';
import { DispatchPageComponent } from './demo/dispatch/dispatch-page/dispatch-page.component';
import { DispatchPageLeftComponent } from './demo/dispatch/dispatch-page-left/dispatch-page-left.component';
import { DispatchPageRightComponent } from './demo/dispatch/dispatch-page-right/dispatch-page-right.component';
import { DispatchPageCenterComponent } from './demo/dispatch/dispatch-page-center/dispatch-page-center.component';
import { FlexTopCenterBottomComponent } from './components/layout/flex-top-center-bottom/flex-top-center-bottom.component';
import { FlexLeftCenterRightComponent } from './components/layout/flex-left-center-right/flex-left-center-right.component';



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
    MapDotPopupComponent,
    WaterConsumptionAnalysisPopupComponent,
    BreadCrumbPageComponent,
    StatusBarComponent,
    StatusBarPageComponent,
    LegendComponent,
    PageDemo2Component,
    DocsComponentRecommendComponent,
    SelectMapTypeComponent,
    DispatchPageComponent,
    DispatchPageLeftComponent,
    DispatchPageRightComponent,
    DispatchPageCenterComponent,
    FlexTopCenterBottomComponent,
    FlexLeftCenterRightComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule, RouterModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
