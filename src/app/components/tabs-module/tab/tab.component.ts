import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ecp-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  @Input() title: string;

  constructor() {
  }

  ngOnInit() {
  }

}
