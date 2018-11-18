import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsComponentRecommendComponent } from './docs-component-recommend.component';

describe('DocsComponentRecommendComponent', () => {
  let component: DocsComponentRecommendComponent;
  let fixture: ComponentFixture<DocsComponentRecommendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocsComponentRecommendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsComponentRecommendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
