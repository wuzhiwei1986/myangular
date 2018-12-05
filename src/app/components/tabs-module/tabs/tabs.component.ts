import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'ecp-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  constructor(private elementRef: ElementRef) {

  }

  ngOnInit() {
  }

}
