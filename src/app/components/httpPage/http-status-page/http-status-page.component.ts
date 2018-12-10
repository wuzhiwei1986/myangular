import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ecp-http-status-page',
  templateUrl: './http-status-page.component.html',
  styleUrls: ['./http-status-page.component.css']
})
export class HttpStatusPageComponent implements OnInit {
  @Input() code: number = 400;

  constructor() {
  }

  ngOnInit() {
  }

}
