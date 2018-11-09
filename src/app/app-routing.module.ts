import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
/**/

import { BreadCrumbComponent} from './components/bread-crumb/bread-crumb.component';
import { StepsInfoComponent} from './steps-info/steps-info.component';
import { NavBarComponent} from './nav-bar/nav-bar.component';

import { MapSwitchComponent} from './map-switch/map-switch.component';
import { OpenDetailsInfoComponent } from './open-details-info/open-details-info.component';
import { OpenDetailsInfo2Component } from './open-details-info2/open-details-info2.component';
import { EcpOpenTagsComponent } from './ecp-tags-model/ecp-open-tags/ecp-open-tags.component';
/*数据展示*/
import { DetailsStyle1Component } from './details-style1/details-style1.component';
import { SeachModuleComponent } from './seach-module/seach-module.component';
import { PageDemoComponent } from './page-demo/page-demo.component';
import { AboutComponent } from './docs/about/about.component';
import { EcpLoginPageComponent } from './ecp-login-moudle/ecp-login-page/ecp-login-page.component';
import { GenerateBillPageComponent } from './demo/generate-bill-page/generate-bill-page.component';

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
const routes: Routes = [
  {path: 'breadCrumb', component: BreadCrumbComponent},
  {path: 'stepsInfo', component: StepsInfoComponent},
  {path: 'navBar', component: NavBarComponent},
  {path: 'topNavPage', component: TopNavPageComponent},
  {path: 'mapSwitch', component: MapSwitchComponent},
//  {path: 'toolBar', component: ToolBarComponent},
//  {path: 'toolBar2', component: ToolBar2Component},
  {path: 'seachModule', component: SeachModuleComponent},
  {path: 'openDetailsInfo', component: OpenDetailsInfoComponent},
  {path: 'openDetailsInfo2', component: OpenDetailsInfo2Component},
  /*页面*/
  {path: 'detailsStyle1', component: DetailsStyle1Component},
  {path: 'pageDemo', component: PageDemoComponent},
  {path: 'about', component: AboutComponent},
  /**/
  {path: 'toolBarPage', component: ToolBarPageComponent},
  {path: 'switchPage', component: SwitchPageComponent},
  {path: 'dotRipplePage', component: DotRipplePageComponent},
  {path: 'navBarPage', component: NavBarPageComponent},
  {path: 'iconPage', component: IconPageComponent},
  {path: 'tablePage', component: TablePageComponent},
  {path: 'loginPage', component: EcpLoginPageComponent},
  {path: 'ecpOpenTags', component: EcpOpenTagsComponent},
  {path: 'ecpTabset', component: EcpTabsetComponent},
  {path: 'generateBillPage', component: GenerateBillPageComponent},
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
