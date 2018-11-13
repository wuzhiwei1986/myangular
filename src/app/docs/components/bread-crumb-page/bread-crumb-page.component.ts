import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bread-crumb-page',
  templateUrl: './bread-crumb-page.component.html',
  styleUrls: ['./bread-crumb-page.component.css']
})
export class BreadCrumbPageComponent implements OnInit {

  test(info){
    alert(info);
    console.log(info);
  }

  constructor() { }

  ngOnInit() {
  }

}
