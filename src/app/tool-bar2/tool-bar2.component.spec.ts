import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolBar2Component } from './tool-bar2.component';

describe('ToolBar2Component', () => {
  let component: ToolBar2Component;
  let fixture: ComponentFixture<ToolBar2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolBar2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolBar2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
