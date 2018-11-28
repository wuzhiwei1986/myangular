import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcpTemplateComponent } from './ecp-template.component';

describe('EcpTemplateComponent', () => {
  let component: EcpTemplateComponent;
  let fixture: ComponentFixture<EcpTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcpTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcpTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
