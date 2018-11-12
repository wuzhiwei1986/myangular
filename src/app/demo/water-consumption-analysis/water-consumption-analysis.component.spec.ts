import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterConsumptionAnalysisComponent } from './water-consumption-analysis.component';

describe('WaterConsumptionAnalysisComponent', () => {
  let component: WaterConsumptionAnalysisComponent;
  let fixture: ComponentFixture<WaterConsumptionAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaterConsumptionAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterConsumptionAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
