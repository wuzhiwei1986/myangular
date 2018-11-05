import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dot-ripple-page',
  templateUrl: './dot-ripple-page.component.html',
  styleUrls: ['./dot-ripple-page.component.css']
})
export class DotRipplePageComponent implements OnInit {
  color: string = "green";

  inputX: string = "200px";
  inputY: string = "200px";

  constructor() {
  }

  ngOnInit() {
  }

}
