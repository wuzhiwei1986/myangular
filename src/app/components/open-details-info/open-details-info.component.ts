import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'ecp-open-details-info',
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
      state('block', style({
        opacity: 1,

      })),
      state('none', style({
        opacity: 0,

      })),
      transition('open => closed', [
        animate('0.2s')
      ]),
      transition('closed => open', [
        animate('0.2s')
      ]),
      transition('none => block', [
        animate('0.2s')
      ]),
      transition('block => none', [
        animate('0.2s')
      ]),
    ])
  ]
})
export class OpenDetailsInfoComponent implements OnInit {
  isShow = true;
  isDefault = true;
  typeRadioValue = 'A';
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

  change() {
    const self = this;
    if (self.typeRadioValue == 'A') {
      self.isDefault = true;
    } else {
      self.isDefault = false;
    }
  }

  constructor(private fb: FormBuilder) {
  }


  ngOnInit() {
    const self = this;
    self.validateForm = self.fb.group({
      pointCode0: [null, [Validators.required]],
      pointCode1: [null, [Validators.required]],
    });
  }


}
