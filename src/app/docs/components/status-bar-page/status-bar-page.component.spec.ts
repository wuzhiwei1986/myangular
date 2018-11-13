import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusBarPageComponent } from './status-bar-page.component';

describe('StatusBarPageComponent', () => {
  let component: StatusBarPageComponent;
  let fixture: ComponentFixture<StatusBarPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusBarPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusBarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
