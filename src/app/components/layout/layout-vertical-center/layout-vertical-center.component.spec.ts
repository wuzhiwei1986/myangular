import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutVerticalCenterComponent } from './layout-vertical-center.component';

describe('LayoutVerticalCenterComponent', () => {
  let component: LayoutVerticalCenterComponent;
  let fixture: ComponentFixture<LayoutVerticalCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutVerticalCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutVerticalCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
