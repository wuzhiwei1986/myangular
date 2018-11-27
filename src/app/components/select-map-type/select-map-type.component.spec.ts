import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectMapTypeComponent } from './select-map-type.component';

describe('SelectMapTypeComponent', () => {
  let component: SelectMapTypeComponent;
  let fixture: ComponentFixture<SelectMapTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectMapTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectMapTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
