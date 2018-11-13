import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenDetailsInfo2Component } from './open-details-info2.component';

describe('OpenDetailsInfo2Component', () => {
  let component: OpenDetailsInfo2Component;
  let fixture: ComponentFixture<OpenDetailsInfo2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenDetailsInfo2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenDetailsInfo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
