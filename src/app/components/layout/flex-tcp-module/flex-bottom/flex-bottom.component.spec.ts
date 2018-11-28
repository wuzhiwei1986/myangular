import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexBottomComponent } from './flex-bottom.component';

describe('FlexBottomComponent', () => {
  let component: FlexBottomComponent;
  let fixture: ComponentFixture<FlexBottomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexBottomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
