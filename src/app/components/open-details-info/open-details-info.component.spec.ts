import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenDetailsInfoComponent } from './open-details-info.component';

describe('OpenDetailsInfoComponent', () => {
  let component: OpenDetailsInfoComponent;
  let fixture: ComponentFixture<OpenDetailsInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenDetailsInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenDetailsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
