import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
/**/

import { BreadCrumbComponent} from './components/bread-crumb/bread-crumb.component';
import { StepsInfoComponent} from './components/steps-info/steps-info.component';
import { NavBarComponent} from './components/nav-bar/nav-bar.component';

import { StatusBarPageComponent } from './docs/components/status-bar-page/status-bar-page.component';
import { MapSwitchComponent} from './components/map-switch/map-switch.component';
import { OpenDetailsInfoComponent } from './components/open-details-info/open-details-info.component';
import { OpenDetailsInfo2Component } from './components/open-details-info2/open-details-info2.component';
import { EcpOpenTagsComponent } from './components/ecp-tags-model/ecp-open-tags/ecp-open-tags.component';
/*布局*/

/*数据展示*/
import { DetailsStyle1Component } from './demo/details-style1/details-style1.component';
import { SeachModuleComponent } from './components/seach-module/seach-module.component';
import { PageDemoComponent } from './demo/page-demo/page-demo.component';
import { AboutComponent } from './docs/about/about.component';
import { EcpLoginPageComponent } from './components/ecp-login-moudle/ecp-login-page/ecp-login-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { GenerateBillPageComponent } from './demo/generate-bill-page/generate-bill-page.component';
import { WaterConsumptionAnalysisPopupComponent } from './demo/water-consumption-analysis-popup/water-consumption-analysis-popup.component';
import { BreadCrumbPageComponent } from './docs/components/bread-crumb-page/bread-crumb-page.component';
import { PageDemo2Component } from './demo/page-demo2/page-demo2.component';
import { DispatchPageComponent } from './demo/dispatch/dispatch-page/dispatch-page.component';
import { ConsolePageComponent } from './demo/console-page/console-page.component';
import { DataDemoPageComponent } from './demo/data-demo-page/data-demo-page.component';
import { PageDemo3Component } from './demo/page-demo3/page-demo3.component';
/*动画*/
import { RippleComponent } from './animation/ripple/ripple.component';
/**/
/*页面介绍*/
import { ToolBarPageComponent } from './docs/components/tool-bar-page/tool-bar-page.component';
import { SwitchPageComponent } from './docs/components/switch-page/switch-page.component';
import { DotRipplePageComponent } from './docs/components/dot-ripple-page/dot-ripple-page.component';
import { NavBarPageComponent } from './docs/components/nav-bar-page/nav-bar-page.component';
import { TopNavPageComponent } from './docs/components/top-nav-page/top-nav-page.component';
import { IconPageComponent } from './docs/components/icon-page/icon-page.component';
import { TablePageComponent } from './docs/components/table-page/table-page.component';
import { EcpTabsetComponent } from './ecp-tegs-test/ecp-tabset/ecp-tabset.component';
import { TopCenterBottomPageComponent } from './docs/components/layout/top-center-bottom-page/top-center-bottom-page.component';
import { LeftCenterRightPageComponent } from './docs/components/layout/left-center-right-page/left-center-right-page.component';
import { TabsPageComponent } from './docs/components/tabs-page/tabs-page.component';
import { HttpPageComponent } from './docs/components/http-page/http-page.component';
import { PageLeftNavPageComponent } from './docs/components/page-left-nav-page/page-left-nav-page.component';
import { LayoutDemoPageComponent } from './docs/components/layout/layout-demo-page/layout-demo-page.component';
import { SeachModulePageComponent } from './docs/components/seach-module-page/seach-module-page.component';
import { PopupSidebarPageComponent } from './docs/components/popup-sidebar-page/popup-sidebar-page.component';



const routes: Routes = [
  {path: '', component: TopNavPageComponent},
  {path: 'breadCrumb', component: BreadCrumbComponent},
  {path: 'stepsInfo', component: StepsInfoComponent},
  {path: 'navBar', component: NavBarComponent},
  {path: 'topNavPage', component: TopNavPageComponent},
  {path: 'mapSwitch', component: MapSwitchComponent},
//  {path: 'toolBar', component: ToolBarComponent},
//  {path: 'toolBar2', component: ToolBar2Component},
  {path: 'seachModulePage', component: SeachModulePageComponent},
  {path: 'openDetailsInfo', component: OpenDetailsInfoComponent},
  {path: 'openDetailsInfo2', component: OpenDetailsInfo2Component},
  /*页面*/
  {path: 'detailsStyle1', component: DetailsStyle1Component},
  {path: 'pageDemo', component: PageDemoComponent},
  {path: 'pageDemo3', component: PageDemo3Component},
  {path: 'about', component: AboutComponent},
  {path: 'dataDemoPage', component: DataDemoPageComponent},

  /**/
  {path: 'seachModulePage', component: SeachModulePageComponent},
  {path: 'toolBarPage', component: ToolBarPageComponent},
  {path: 'switchPage', component: SwitchPageComponent},
  {path: 'dotRipplePage', component: DotRipplePageComponent},
  {path: 'navBarPage', component: NavBarPageComponent},
  {path: 'iconPage', component: IconPageComponent},
  {path: 'tablePage', component: TablePageComponent},
  {path: 'loginPage', component: EcpLoginPageComponent},
  {path: 'homePage', component: HomePageComponent},
  {path: 'ecpOpenTags', component: EcpOpenTagsComponent},
  {path: 'ecpTabset', component: EcpTabsetComponent},
  {path: 'generateBillPage', component: GenerateBillPageComponent},
  {path: 'waterConsumptionAnalysisPopup', component: WaterConsumptionAnalysisPopupComponent},
  {path: 'breadCrumbPage', component: BreadCrumbPageComponent},
  {path: 'statusBarPage', component: StatusBarPageComponent},
  {path: 'pageDemo2', component: PageDemo2Component},
  {path: 'dispatchPage', component: DispatchPageComponent},
  {path: 'consolePage', component: ConsolePageComponent},
  {path: 'tabsPage', component: TabsPageComponent},
  {path: 'httpPage', component: HttpPageComponent},
  {path: 'pageLeftNavPage', component: PageLeftNavPageComponent},
  {path: 'popupSidebarPage', component: PopupSidebarPageComponent},
  /*布局*/
  {path: 'layoutDemoPage', component: LayoutDemoPageComponent},
  {path: 'flexTopCenterBottom', component: TopCenterBottomPageComponent},
  {path: 'flexleftCenterRight', component: LeftCenterRightPageComponent},
/*动画*/
  {path: 'ripple', component: RippleComponent},
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule {
}
