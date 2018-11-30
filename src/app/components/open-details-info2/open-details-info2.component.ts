import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'ecp-open-details-info2',
  templateUrl: './open-details-info2.component.html',
  styleUrls: ['./open-details-info2.component.css'],
  animations: [
    trigger('openClose', [
      transition(':enter', [
        style({ opacity: 0,left:'-100px' }),
        animate('300ms', style({ opacity: 1 ,left:'30px'})),
      ]),
      transition(':leave', [
        animate('300ms', style({ opacity: 0 ,left:'-100px'}))
      ])
    ]),
  ],
})
export class OpenDetailsInfo2Component implements OnInit {
  validateForm: FormGroup;
  isOpen = false;
  constructor(private fb: FormBuilder) {
  }




  ngOnInit() {
    let self = this;
    self.validateForm = self.fb.group({
      pointCode0: [null, [Validators.required]],

    });
  }

  open() {
    this.isOpen=true;
  }
  close() {
    this.isOpen=false;
  }

}
