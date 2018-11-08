import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcpOpenTagsComponent } from './ecp-open-tags.component';

describe('EcpOpenTagsComponent', () => {
  let component: EcpOpenTagsComponent;
  let fixture: ComponentFixture<EcpOpenTagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcpOpenTagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcpOpenTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
