import {Component, OnInit, ViewChild} from '@angular/core';
import {OpenDetailsInfo2Component} from "../../components/open-details-info2/open-details-info2.component";

@Component({
  selector: 'app-page-demo2',
  templateUrl: './page-demo2.component.html',
  styleUrls: ['./page-demo2.component.css']
})
export class PageDemo2Component implements OnInit {


  @ViewChild('openComponents')
  private openComponents:OpenDetailsInfo2Component;
  test() {
    console.log("组件联动");
    this.openComponents.open();
  }

  constructor() {
  }

  ngOnInit() {
  }

}
