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
import { TopNavComponent } from './components/nav-module/top-nav/top-nav.component';
import { MapSwitchComponent } from './components/map-switch/map-switch.component';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { ToolBar2Component } from './components/tool-bar2/tool-bar2.component';
import { ToolBar3Component } from './components/tool-bar3/tool-bar3.component';
import { PageLeftNavComponent } from './components/page-left-nav/page-left-nav.component';

/*数据展示*/
import { DetailsStyle1Component } from './demo/details-style1/details-style1.component';
import { SeachModuleComponent } from './components/seach-module/seach-module.component';

import { PageDemoComponent } from './demo/page-demo/page-demo.component';
import { PageDemo3Component } from './demo/page-demo3/page-demo3.component';

import { OpenDetailsInfoComponent } from './components/open-details-info/open-details-info.component';
import { AlarmComponent } from './components/nav-module/alarm/alarm.component';
import { DropDownMenuComponent } from './components/nav-module/drop-down-menu/drop-down-menu.component';
import { UserInfoComponent } from './components/nav-module/user-info/user-info.component';
import { OpenDetailsInfo2Component } from './components/open-details-info2/open-details-info2.component';
import { RippleComponent } from './animation/ripple/ripple.component';


/*指令*/
import { TestDirective } from './directive/test.directive';
/*页面介绍*/
import { AboutComponent} from './docs/about/about.component';
import { ToolBarPageComponent } from './docs/components/tool-bar-page/tool-bar-page.component';
import { SwitchPageComponent } from './docs/components/switch-page/switch-page.component';
import { DotRipplePageComponent } from './docs/components/dot-ripple-page/dot-ripple-page.component';
import { NavBarPageComponent } from './docs/components/nav-bar-page/nav-bar-page.component';
import { TopNavPageComponent } from './docs/components/top-nav-page/top-nav-page.component';
import { TestTableComponent } from './test-table/test-table.component';
import { IconPageComponent } from './docs/components/icon-page/icon-page.component';
import { TablePageComponent } from './docs/components/table-page/table-page.component';
import { PageLeftNavPageComponent } from './docs/components/page-left-nav-page/page-left-nav-page.component';
import { SeachModulePageComponent } from './docs/components/seach-module-page/seach-module-page.component';
import { PopupSidebarPageComponent } from './docs/components/popup-sidebar-page/popup-sidebar-page.component';
import { BreadCrumbPageComponent } from './docs/components/bread-crumb-page/bread-crumb-page.component';
import { StatusBarPageComponent } from './docs/components/status-bar-page/status-bar-page.component';
import { TopCenterBottomPageComponent } from './docs/components/layout/top-center-bottom-page/top-center-bottom-page.component';
import { LeftCenterRightPageComponent } from './docs/components/layout/left-center-right-page/left-center-right-page.component';
import { TabsPageComponent } from './docs/components/tabs-page/tabs-page.component';
import { HttpPageComponent } from './docs/components/http-page/http-page.component';
import { LayoutDemoPageComponent } from './docs/components/layout/layout-demo-page/layout-demo-page.component';

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

import { StatusBarComponent } from './components/status-bar/status-bar.component';

import { LegendComponent } from './components/legend/legend.component';
import { PageDemo2Component } from './demo/page-demo2/page-demo2.component';
import { DocsComponentRecommendComponent } from './components/docs-component-recommend/docs-component-recommend.component';
import { SelectMapTypeComponent } from './components/select-map-type/select-map-type.component';
import { DispatchPageComponent } from './demo/dispatch/dispatch-page/dispatch-page.component';
import { DispatchPageLeftComponent } from './demo/dispatch/dispatch-page-left/dispatch-page-left.component';
import { DispatchPageRightComponent } from './demo/dispatch/dispatch-page-right/dispatch-page-right.component';
import { DispatchPageCenterComponent } from './demo/dispatch/dispatch-page-center/dispatch-page-center.component';
import { FlexTopCenterBottomComponent } from './components/layout/flex-tcb-module/flex-top-center-bottom/flex-top-center-bottom.component';
import { FlexLeftCenterRightComponent } from './components/layout/flex-lcr-module/flex-left-center-right/flex-left-center-right.component';

import { EcpTemplateComponent } from './components/ecp-template/ecp-template.component';
import { FlexTopComponent } from './components/layout/flex-tcb-module/flex-top/flex-top.component';
import { FlexBottomComponent } from './components/layout/flex-tcb-module/flex-bottom/flex-bottom.component';
import { FlexBodyComponent } from './components/layout/flex-tcb-module/flex-body/flex-body.component';
import { FlexLeftComponent } from './components/layout/flex-lcr-module/flex-left/flex-left.component';
import { FlexRightComponent } from './components/layout/flex-lcr-module/flex-right/flex-right.component';
import { ConsolePageComponent } from './demo/console-page/console-page.component';
import {CountUpModule} from 'countup.js-angular2';

import { TabsComponent } from './components/tabs-module/tabs/tabs.component';

import { TabComponent } from './components/tabs-module/tab/tab.component';
import { HomePageComponent } from './components/home-page/home-page.component';

import { HttpStatusPageComponent } from './components/httpPage/http-status-page/http-status-page.component';
import { ListComponent } from './components/dataTable-module/list/list.component';
import { DataDemoPageComponent } from './demo/data-demo-page/data-demo-page.component';
import { ModuleTitleComponent } from './components/layout/flex-tcb-module/module-title/module-title.component';
import { ModuleBottomComponent } from './components/layout/flex-tcb-module/module-bottom/module-bottom.component';
import { UploadFileComponent } from './components/upload-file/upload-file.component';


import { LayoutVerticalCenterComponent } from './components/layout/layout-vertical-center/layout-vertical-center.component';
import { SidebarTipInfoComponent } from './components/popup-sidebar-module/sidebar-tip-info/sidebar-tip-info.component';
import { SidebarBtnLinkComponent } from './components/popup-sidebar-module/sidebar-btn-link/sidebar-btn-link.component';
import { CollapseListComponent } from './components/popup-sidebar-module/collapse-list/collapse-list.component';
import { UserInfoListComponent } from './components/nav-module/user-info-list/user-info-list.component';
import { CopyrightComponent } from './components/copyright/copyright.component';
import { CardInfoComponent } from './components/card-info/card-info.component';



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
    TopCenterBottomPageComponent,
    EcpTemplateComponent,
    FlexTopComponent,
    FlexBottomComponent,
    FlexBodyComponent,
    FlexLeftComponent,
    FlexRightComponent,
    ConsolePageComponent,
    LeftCenterRightPageComponent,
    TabsComponent,
    TabsPageComponent,
    TabComponent,
    HomePageComponent,
    HttpPageComponent,
    HttpStatusPageComponent,
    ListComponent,
    DataDemoPageComponent,
    ModuleTitleComponent,
    ModuleBottomComponent,
    PageLeftNavComponent,
    PageLeftNavPageComponent,
    PageDemo3Component,
    UploadFileComponent,
    LayoutDemoPageComponent,
    LayoutVerticalCenterComponent,
    SeachModulePageComponent,
    PopupSidebarPageComponent,
    SidebarTipInfoComponent,
    SidebarBtnLinkComponent,
    CollapseListComponent,
    UserInfoListComponent,
    CopyrightComponent,
    CardInfoComponent,



  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule, RouterModule,CountUpModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
