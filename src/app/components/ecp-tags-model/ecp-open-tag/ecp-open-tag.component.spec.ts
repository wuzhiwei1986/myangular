import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcpOpenTagComponent } from './ecp-open-tag.component';

describe('EcpOpenTagComponent', () => {
  let component: EcpOpenTagComponent;
  let fixture: ComponentFixture<EcpOpenTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcpOpenTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcpOpenTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
