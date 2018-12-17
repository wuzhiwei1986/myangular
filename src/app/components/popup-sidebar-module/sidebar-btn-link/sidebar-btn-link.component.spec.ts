import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarBtnLinkComponent } from './sidebar-btn-link.component';

describe('SidebarBtnLinkComponent', () => {
  let component: SidebarBtnLinkComponent;
  let fixture: ComponentFixture<SidebarBtnLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarBtnLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarBtnLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
