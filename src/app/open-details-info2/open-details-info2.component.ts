import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-open-details-info2',
  templateUrl: './open-details-info2.component.html',
  styleUrls: ['./open-details-info2.component.css']
})
export class OpenDetailsInfo2Component implements OnInit {
  validateForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    let self=this;
    self.validateForm = self.fb.group({
      pointCode0: [null, [Validators.required]],

    });
  }

}
