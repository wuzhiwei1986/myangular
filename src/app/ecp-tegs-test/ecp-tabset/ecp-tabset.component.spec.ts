import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcpTabsetComponent } from './ecp-tabset.component';

describe('EcpTabsetComponent', () => {
  let component: EcpTabsetComponent;
  let fixture: ComponentFixture<EcpTabsetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcpTabsetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcpTabsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
