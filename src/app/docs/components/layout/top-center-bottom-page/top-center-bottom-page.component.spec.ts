import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopCenterBottomPageComponent } from './top-center-bottom-page.component';

describe('TopCenterBottomPageComponent', () => {
  let component: TopCenterBottomPageComponent;
  let fixture: ComponentFixture<TopCenterBottomPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopCenterBottomPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopCenterBottomPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
