import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpStatusPageComponent } from './http-status-page.component';

describe('HttpStatusPageComponent', () => {
  let component: HttpStatusPageComponent;
  let fixture: ComponentFixture<HttpStatusPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpStatusPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpStatusPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
