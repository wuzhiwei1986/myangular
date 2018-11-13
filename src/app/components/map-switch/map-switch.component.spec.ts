import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapSwitchComponent } from './map-switch.component';

describe('MapSwitchComponent', () => {
  let component: MapSwitchComponent;
  let fixture: ComponentFixture<MapSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
