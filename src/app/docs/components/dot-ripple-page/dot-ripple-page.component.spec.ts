import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DotRipplePageComponent } from './dot-ripple-page.component';

describe('DotRipplePageComponent', () => {
  let component: DotRipplePageComponent;
  let fixture: ComponentFixture<DotRipplePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DotRipplePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DotRipplePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
