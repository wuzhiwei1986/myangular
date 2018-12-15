import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeachModulePageComponent } from './seach-module-page.component';

describe('SeachModulePageComponent', () => {
  let component: SeachModulePageComponent;
  let fixture: ComponentFixture<SeachModulePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeachModulePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeachModulePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
