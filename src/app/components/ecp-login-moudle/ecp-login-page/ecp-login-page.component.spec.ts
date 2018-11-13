import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcpLoginPageComponent } from './ecp-login-page.component';

describe('EcpLoginPageComponent', () => {
  let component: EcpLoginPageComponent;
  let fixture: ComponentFixture<EcpLoginPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcpLoginPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcpLoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
