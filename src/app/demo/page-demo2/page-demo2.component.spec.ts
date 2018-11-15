import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDemo2Component } from './page-demo2.component';

describe('PageDemo2Component', () => {
  let component: PageDemo2Component;
  let fixture: ComponentFixture<PageDemo2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageDemo2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDemo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
