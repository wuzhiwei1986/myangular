import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ecp-open-tags',
  templateUrl: './ecp-open-tags.component.html',
  styleUrls: ['./ecp-open-tags.component.css']
})
export class EcpOpenTagsComponent implements OnInit {
  isOpen = true;
  selectId = 1;

  show(id) {
    this.selectId = id;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
