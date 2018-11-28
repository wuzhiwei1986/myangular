import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-center-bottom-page',
  templateUrl: './top-center-bottom-page.component.html',
  styleUrls: ['./top-center-bottom-page.component.css']
})
export class TopCenterBottomPageComponent implements OnInit {
  test(){
    alert();
  }

  constructor() { }

  ngOnInit() {
  }

}
