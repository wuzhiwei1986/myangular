import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {TabComponent} from '../tab/tab.component';

@Component({
  selector: 'ecp-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {


  constructor(private el: ElementRef) {

  }

  ngOnInit() {
    let titleArry = this.el.nativeElement.querySelectorAll('.tabs .tab-title a');
    console.log(titleArry);

  }

}
