import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexTopComponent } from './flex-top.component';

describe('FlexTopComponent', () => {
  let component: FlexTopComponent;
  let fixture: ComponentFixture<FlexTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
