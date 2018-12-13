import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataDemoPageComponent } from './data-demo-page.component';

describe('DataDemoPageComponent', () => {
  let component: DataDemoPageComponent;
  let fixture: ComponentFixture<DataDemoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataDemoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataDemoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
