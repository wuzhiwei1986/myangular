import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ecp-page-left-nav',
  templateUrl: './page-left-nav.component.html',
  styleUrls: ['./page-left-nav.component.css']
})
export class PageLeftNavComponent implements OnInit {
  @Input() title: string = '自义标题';
  constructor() { }

  ngOnInit() {
  }

}
