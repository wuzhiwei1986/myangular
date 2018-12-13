import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLeftNavComponent } from './page-left-nav.component';

describe('PageLeftNavComponent', () => {
  let component: PageLeftNavComponent;
  let fixture: ComponentFixture<PageLeftNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageLeftNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLeftNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
