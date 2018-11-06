import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNavPageComponent } from './top-nav-page.component';

describe('TopNavPageComponent', () => {
  let component: TopNavPageComponent;
  let fixture: ComponentFixture<TopNavPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopNavPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopNavPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
