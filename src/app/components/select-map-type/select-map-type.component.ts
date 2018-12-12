import {Component, Input, OnInit} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'ecp-select-map-type',
  templateUrl: './select-map-type.component.html',
  styleUrls: ['./select-map-type.component.css'],
  animations: [
    trigger('openClose', [
      transition(':enter', [
        style({opacity: 0, width: '20px', color: '#000000'}),
        animate(40, style({opacity: 1, width: '120px', color: '#000000'}))
      ]),
      transition(':leave', [
        animate(40, style({opacity: 0, width: '20px', color: '#ffffff'}))
      ]),

    ]),
  ]
})
export class SelectMapTypeComponent implements OnInit {
  @Input() customPosition:object;
  isShow = false;
  showList = null;

  mouseOut() {
    let seft = this;
    seft.showList = setTimeout(function () {
      seft.isShow = false;
    }, 200);
  }

  cleanTime() {
    let seft = this;
    clearTimeout(seft.showList);
  }

  constructor() {
  }

  ngOnInit() {
  }

}
