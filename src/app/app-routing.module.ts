import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
/**/

import {BreadCrumbComponent} from './bread-crumb/bread-crumb.component';
import {StepsInfoComponent} from './steps-info/steps-info.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {TopNavComponent} from './top-nav/top-nav.component';

import {MapSwitchComponent} from './map-switch/map-switch.component';
import {ToolBarComponent} from './tool-bar/tool-bar.component';
import { ToolBar2Component } from './tool-bar2/tool-bar2.component';
import { OpenDetailsInfoComponent } from './open-details-info/open-details-info.component';
import { OpenDetailsInfo2Component } from './open-details-info2/open-details-info2.component';
/*数据展示*/
import { DetailsStyle1Component } from './details-style1/details-style1.component';
import { SeachModuleComponent } from './seach-module/seach-module.component';
import { PageDemoComponent } from './page-demo/page-demo.component';
import { AboutComponent } from './about/about.component';
/*动画*/
import { RippleComponent } from './animation/ripple/ripple.component';
/**/
/*页面介绍*/
import { ToolBarPageComponent } from './docs/components/tool-bar-page/tool-bar-page.component';
import { SwitchPageComponent } from './docs/components/switch-page/switch-page.component';
import { DotRipplePageComponent } from './docs/components/dot-ripple-page/dot-ripple-page.component';
import { NavBarPageComponent } from './docs/components/nav-bar-page/nav-bar-page.component';


const routes: Routes = [
  {path: 'breadCrumb', component: BreadCrumbComponent},
  {path: 'stepsInfo', component: StepsInfoComponent},
  {path: 'navBar', component: NavBarComponent},
  {path: 'topNav', component: TopNavComponent},
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
