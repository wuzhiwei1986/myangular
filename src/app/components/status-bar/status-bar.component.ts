import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ecp-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.css']
})
export class StatusBarComponent implements OnInit {
  @Input() txt: string;
  @Input() statusNum: number;
  @Input() customColor: Array<string>;

  defaultColor: Array<string> = ['#bcbcbc', '#E81E1E', '#339966', '#edc601'];

  constructor() {
  }

  ngOnInit() {
    let self = this;
    if (self.customColor != null) {
      self.defaultColor = self.customColor;
    }
  }

}
