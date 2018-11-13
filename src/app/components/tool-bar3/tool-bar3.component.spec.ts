import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooBar3Component } from './too-bar3.component';

describe('TooBar3Component', () => {
  let component: TooBar3Component;
  let fixture: ComponentFixture<TooBar3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TooBar3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooBar3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
