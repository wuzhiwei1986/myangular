import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-center-right-page',
  templateUrl: './left-center-right-page.component.html',
  styleUrls: ['./left-center-right-page.component.css']
})
export class LeftCenterRightPageComponent implements OnInit {
  customLeftWidth:number=200;
  customRightWidth:number=200;


  constructor() { }

  ngOnInit() {
  }

}
