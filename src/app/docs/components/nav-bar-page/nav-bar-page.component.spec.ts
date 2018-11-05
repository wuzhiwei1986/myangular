import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarPageComponent } from './nav-bar-page.component';

describe('NavBarPageComponent', () => {
  let component: NavBarPageComponent;
  let fixture: ComponentFixture<NavBarPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
