import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateBillPageComponent } from './generate-bill-page.component';

describe('GenerateBillPageComponent', () => {
  let component: GenerateBillPageComponent;
  let fixture: ComponentFixture<GenerateBillPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateBillPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateBillPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
