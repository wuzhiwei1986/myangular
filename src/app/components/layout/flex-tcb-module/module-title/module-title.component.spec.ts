import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleTitleComponent } from './module-title.component';

describe('ModuleTitleComponent', () => {
  let component: ModuleTitleComponent;
  let fixture: ComponentFixture<ModuleTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
