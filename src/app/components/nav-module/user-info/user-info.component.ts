import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ecp-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  @Input() userHader: string = 'assets/base/user_default.png';
  @Input() userName = 'username';

  constructor() {
  }

  ngOnInit() {
  }

}
