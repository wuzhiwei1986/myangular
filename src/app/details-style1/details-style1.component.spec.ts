import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsStyle1Component } from './details-style1.component';

describe('DetailsStyle1Component', () => {
  let component: DetailsStyle1Component;
  let fixture: ComponentFixture<DetailsStyle1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsStyle1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsStyle1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
