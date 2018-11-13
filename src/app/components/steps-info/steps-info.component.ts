import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
@Component({
  selector: 'ecp-steps-info',
  templateUrl: './steps-info.component.html',
  styleUrls: ['./steps-info.component.css']
})
export class StepsInfoComponent implements OnInit {
  validateForm: FormGroup;
  public current = 0; //步骤条用变量

  next() {
    const self = this;
    if (self.current >= 2) {
      self.current = 0;
    } else {
      self.current += 1;
    }
  }
  constructor(private fb: FormBuilder) { }


  ngOnInit() {

    const self = this;

    self.validateForm = self.fb.group({
      code1: [null, [Validators.required, Validators.maxLength(20), Validators.pattern(/^[a-zA-Z0-9]*$/)]],
      code2: [null, [Validators.required, Validators.maxLength(20), Validators.pattern(/^[a-zA-Z0-9]*$/)]],
      code3: [null, [Validators.required, Validators.maxLength(20), Validators.pattern(/^[a-zA-Z0-9]*$/)]],
      code4: [null, [Validators.required, Validators.maxLength(20), Validators.pattern(/^[a-zA-Z0-9]*$/)]],
      code5: [null, [Validators.required, Validators.maxLength(20), Validators.pattern(/^[a-zA-Z0-9]*$/)]]

    });



  }

}
