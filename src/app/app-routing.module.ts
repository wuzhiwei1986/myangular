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
/*数据展示*/
import { DetailsStyle1Component } from './details-style1/details-style1.component';
import { SeachModuleComponent } from './seach-module/seach-module.component';
import { PageDemoComponent } from './page-demo/page-demo.component';



const routes: Routes = [
  {path: 'breadCrumb', component: BreadCrumbComponent},
  {path: 'stepsInfo', component: StepsInfoComponent},
  {path: 'navBar', component: NavBarComponent},
  {path: 'topNav', component: TopNavComponent},
  {path: 'mapSwitch', component: MapSwitchComponent},
  {path: 'toolBar', component: ToolBarComponent},
  {path: 'toolBar2', component: ToolBar2Component},
  {path: 'seachModule', component: SeachModuleComponent},
  /**/
  {path: 'detailsStyle1', component: DetailsStyle1Component},
  {path: 'pageDemo', component: PageDemoComponent},
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
