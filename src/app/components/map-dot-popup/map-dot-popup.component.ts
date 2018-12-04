import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ecp-map-dot-popup',
  templateUrl: './map-dot-popup.component.html',
  styleUrls: ['./map-dot-popup.component.css']
})
export class MapDotPopupComponent implements OnInit {
  @Input() isCloseBtn: boolean = true;
  @Input() customPosition:object;

  constructor() {
  }

  ngOnInit() {
  }

}
