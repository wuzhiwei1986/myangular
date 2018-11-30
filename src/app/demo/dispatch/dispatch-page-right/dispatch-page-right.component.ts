import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup ,Validators} from "@angular/forms";
@Component({
  selector: 'ecp-dispatch-page-right',
  templateUrl: './dispatch-page-right.component.html',
  styleUrls: ['./dispatch-page-right.component.css']
})
export class DispatchPageRightComponent implements OnInit {

  constructor(public fb: FormBuilder ) { }

  ngOnInit() {
    var self = this;

/*    self.validateForm = self.fb.group({
      noticetype: [''],
      isphoto: [null, [Validators.required]],
      resulttype: [null, [Validators.required]],
      isopinion: [null, [Validators.required]],
      auditorid: [null, [Validators.required]],
      forwardid:[],
      fstatus:[null, [Validators.required]]
    });*/
  }

}
