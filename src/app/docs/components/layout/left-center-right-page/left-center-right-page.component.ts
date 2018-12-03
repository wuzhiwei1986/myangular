import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-center-right-page',
  templateUrl: './left-center-right-page.component.html',
  styleUrls: ['./left-center-right-page.component.css']
})
export class LeftCenterRightPageComponent implements OnInit {
  customLeftWidth="200px";
  customRightWidth="200px";
  constructor() { }

  ngOnInit() {
  }

}
