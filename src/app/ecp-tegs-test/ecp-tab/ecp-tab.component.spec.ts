import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcpTabComponent } from './ecp-tab.component';

describe('EcpTabComponent', () => {
  let component: EcpTabComponent;
  let fixture: ComponentFixture<EcpTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcpTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcpTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
