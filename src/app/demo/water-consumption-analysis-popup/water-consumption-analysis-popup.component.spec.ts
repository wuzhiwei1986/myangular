import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterConsumptionAnalysisPopupComponent } from './water-consumption-analysis-popup.component';

describe('WaterConsumptionAnalysisPopupComponent', () => {
  let component: WaterConsumptionAnalysisPopupComponent;
  let fixture: ComponentFixture<WaterConsumptionAnalysisPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaterConsumptionAnalysisPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterConsumptionAnalysisPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
