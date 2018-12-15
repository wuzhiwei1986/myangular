import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutDemoPageComponent } from './layout-demo-page.component';

describe('LayoutDemoPageComponent', () => {
  let component: LayoutDemoPageComponent;
  let fixture: ComponentFixture<LayoutDemoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutDemoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutDemoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
