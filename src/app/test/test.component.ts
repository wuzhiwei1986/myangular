import {Component, OnInit} from '@angular/core';

import {simAnim} from '../animation/animations.component';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  animations: [simAnim],
})
export class TestComponent implements OnInit {
  isShow = true;

  constructor() {
  }

  ngOnInit() {
  }

}



