import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDemoComponent } from './page-demo.component';

describe('PageDemoComponent', () => {
  let component: PageDemoComponent;
  let fixture: ComponentFixture<PageDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
