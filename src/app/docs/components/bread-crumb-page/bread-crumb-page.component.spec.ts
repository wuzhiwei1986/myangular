import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadCrumbPageComponent } from './bread-crumb-page.component';

describe('BreadCrumbPageComponent', () => {
  let component: BreadCrumbPageComponent;
  let fixture: ComponentFixture<BreadCrumbPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadCrumbPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadCrumbPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
