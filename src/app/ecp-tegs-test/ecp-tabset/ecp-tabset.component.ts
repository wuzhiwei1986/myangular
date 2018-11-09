import {Component, ContentChild, OnInit} from '@angular/core';
import {EcpTabComponent} from "../ecp-tab/ecp-tab.component";
import {EcpTabContentComponent} from "../ecp-tab-content/ecp-tab-content.component";

@Component({
  selector: 'app-ecp-tabset',
  templateUrl: './ecp-tabset.component.html',
  styleUrls: ['./ecp-tabset.component.css']
})
export class EcpTabsetComponent implements OnInit {

  @ContentChild(EcpTabComponent) itemLabel;
  @ContentChild(EcpTabContentComponent) itemLabel3;



  isOpen = true;
  selectId = 1;

  show(id) {
    this.selectId = id;

  }

  constructor() {
  }

  ngOnInit() {
 }

}
