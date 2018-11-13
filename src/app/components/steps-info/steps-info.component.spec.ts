import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsInfoComponent } from './steps-info.component';

describe('StepsInfoComponent', () => {
  let component: StepsInfoComponent;
  let fixture: ComponentFixture<StepsInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepsInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
