import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispatchPageRightComponent } from './dispatch-page-right.component';

describe('DispatchPageRightComponent', () => {
  let component: DispatchPageRightComponent;
  let fixture: ComponentFixture<DispatchPageRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispatchPageRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispatchPageRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
