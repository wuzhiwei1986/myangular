import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDemo3Component } from './page-demo3.component';

describe('PageDemo3Component', () => {
  let component: PageDemo3Component;
  let fixture: ComponentFixture<PageDemo3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageDemo3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDemo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
