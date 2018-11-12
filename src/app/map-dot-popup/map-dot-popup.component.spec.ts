import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapDotPopupComponent } from './map-dot-popup.component';

describe('MapDotPopupComponent', () => {
  let component: MapDotPopupComponent;
  let fixture: ComponentFixture<MapDotPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapDotPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapDotPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
