import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexLeftCenterRightComponent } from './flex-left-center-right.component';

describe('FlexLeftCenterRightComponent', () => {
  let component: FlexLeftCenterRightComponent;
  let fixture: ComponentFixture<FlexLeftCenterRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexLeftCenterRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexLeftCenterRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
