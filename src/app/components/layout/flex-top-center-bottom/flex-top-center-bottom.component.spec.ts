import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexTopCenterBottomComponent } from './flex-top-center-bottom.component';

describe('FlexTopCenterBottomComponent', () => {
  let component: FlexTopCenterBottomComponent;
  let fixture: ComponentFixture<FlexTopCenterBottomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexTopCenterBottomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexTopCenterBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
