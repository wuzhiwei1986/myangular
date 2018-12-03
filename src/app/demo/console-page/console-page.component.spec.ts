import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsolePageComponent } from './console-page.component';

describe('ConsolePageComponent', () => {
  let component: ConsolePageComponent;
  let fixture: ComponentFixture<ConsolePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsolePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsolePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
