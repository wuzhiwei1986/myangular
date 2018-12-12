import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dispatch-page',
  templateUrl: './dispatch-page.component.html',
  styleUrls: ['./dispatch-page.component.css']
})
export class DispatchPageComponent implements OnInit {

  public test(str) {
    console.log(str);
  }

  constructor() {
  }

  ngOnInit() {
  }

}
