import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarTipInfoComponent } from './sidebar-tip-info.component';

describe('SidebarTipInfoComponent', () => {
  let component: SidebarTipInfoComponent;
  let fixture: ComponentFixture<SidebarTipInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarTipInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarTipInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
