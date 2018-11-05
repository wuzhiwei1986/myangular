import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  inputX: string = "200px";
  inputY: string = "200px";

  constructor() {
  }

  ngOnInit() {
  }

  test(msg) {
    console.log(msg);
  }
}
