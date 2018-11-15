import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'ecp-ripple',
  templateUrl: './ripple.component.html',
  styleUrls: ['./ripple.component.css']
})
export class RippleComponent implements OnInit {
  @Input() customColor;
  @Input() customX;
  @Input() customY;

  constructor() { }

  ngOnInit() {
  }

}
