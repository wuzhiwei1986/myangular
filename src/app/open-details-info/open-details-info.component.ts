import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {animate, state, style, transition, trigger} from "@angular/animations";
@Component({
  selector: 'app-open-details-info',
  templateUrl: './open-details-info.component.html',
  styleUrls: ['./open-details-info.component.css'],
  animations: [
    trigger('openClose', [
      /**/
      state('open', style({
        opacity: 1,
        right: '0px',

      })),
      state('closed', style({
        opacity: 0,
        right: '-360px',

      })),
      transition('open => closed', [
        animate('0.2s')
      ]),
      transition('closed => open', [
        animate('0.2s')
      ]),
    ]),
  ]
})
export class OpenDetailsInfoComponent implements OnInit {
  isShow = true;
  validateForm: FormGroup;
  value: string[] = [];
  nodes = [{
    title: 'parent 1',
    key: '100',
    children: [{
      title: 'parent 1-0',
      key: '1001',
      children: [
        {title: 'leaf 1-0-0', key: '10010', isLeaf: true},
        {title: 'leaf 1-0-1', key: '10011', isLeaf: true}
      ]
    }, {
      title: 'parent 1-1',
      key: '1002',
      children: [
        {title: 'leaf 1-1-0', key: '10020', isLeaf: true}
      ]
    }]
  }];


  constructor(private fb: FormBuilder) {
  }


  ngOnInit() {
    let self = this;
    self.validateForm = self.fb.group({
      pointCode0: [null, [Validators.required]],

    });
  }



}
