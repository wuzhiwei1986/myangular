import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispatchPageLeftComponent } from './dispatch-page-left.component';

describe('DispatchPageLeftComponent', () => {
  let component: DispatchPageLeftComponent;
  let fixture: ComponentFixture<DispatchPageLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispatchPageLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispatchPageLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
