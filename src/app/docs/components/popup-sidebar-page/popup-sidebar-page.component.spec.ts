import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupSidebarPageComponent } from './popup-sidebar-page.component';

describe('PopupSidebarPageComponent', () => {
  let component: PopupSidebarPageComponent;
  let fixture: ComponentFixture<PopupSidebarPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupSidebarPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupSidebarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
