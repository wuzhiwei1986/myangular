import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleBottomComponent } from './module-bottom.component';

describe('ModuleBottomComponent', () => {
  let component: ModuleBottomComponent;
  let fixture: ComponentFixture<ModuleBottomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleBottomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
