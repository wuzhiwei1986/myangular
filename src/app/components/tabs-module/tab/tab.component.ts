import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'ecp-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  @Input() title: string;

  @Output() protected title: EventEmitter<string> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {

  }

}
