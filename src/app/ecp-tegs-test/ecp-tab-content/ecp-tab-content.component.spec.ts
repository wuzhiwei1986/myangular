import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcpTabContentComponent } from './ecp-tab-content.component';

describe('EcpTabContentComponent', () => {
  let component: EcpTabContentComponent;
  let fixture: ComponentFixture<EcpTabContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcpTabContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcpTabContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
