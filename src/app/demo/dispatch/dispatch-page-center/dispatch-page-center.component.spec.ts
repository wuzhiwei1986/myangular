import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispatchPageCenterComponent } from './dispatch-page-center.component';

describe('DispatchPageCenterComponent', () => {
  let component: DispatchPageCenterComponent;
  let fixture: ComponentFixture<DispatchPageCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispatchPageCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispatchPageCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
