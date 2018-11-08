import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcpLoginformComponent } from './ecp-loginform.component';

describe('EcpLoginformComponent', () => {
  let component: EcpLoginformComponent;
  let fixture: ComponentFixture<EcpLoginformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcpLoginformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcpLoginformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
