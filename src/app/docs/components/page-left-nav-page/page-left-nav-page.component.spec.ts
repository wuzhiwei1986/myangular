import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLeftNavPageComponent } from './page-left-nav-page.component';

describe('PageLeftNavPageComponent', () => {
  let component: PageLeftNavPageComponent;
  let fixture: ComponentFixture<PageLeftNavPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageLeftNavPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLeftNavPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
