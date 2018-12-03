import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftCenterRightPageComponent } from './left-center-right-page.component';

describe('LeftCenterRightPageComponent', () => {
  let component: LeftCenterRightPageComponent;
  let fixture: ComponentFixture<LeftCenterRightPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftCenterRightPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftCenterRightPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
