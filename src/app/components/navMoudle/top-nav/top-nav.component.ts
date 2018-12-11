import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ecp-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  // 处理警告
  disposedId(id) {
    alert('alarm组件回传ID------' + id);
  }

  test(txt) {
    console.log(txt);
  }


  constructor() {
  }

  ngOnInit() {
  }

}
