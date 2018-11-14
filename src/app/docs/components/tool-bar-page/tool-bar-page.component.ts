import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tool-bar-page',
  templateUrl: './tool-bar-page.component.html',
  styleUrls: ['./tool-bar-page.component.css']
})
export class ToolBarPageComponent implements OnInit {


  test(msg){
    console.log(msg);
  }

  constructor() { }

  ngOnInit() {
  }

}
