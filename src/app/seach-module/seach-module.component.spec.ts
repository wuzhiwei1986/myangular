import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeachModuleComponent } from './seach-module.component';

describe('SeachModuleComponent', () => {
  let component: SeachModuleComponent;
  let fixture: ComponentFixture<SeachModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeachModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeachModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
