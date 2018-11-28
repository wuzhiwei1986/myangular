import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexBodyComponent } from './flex-body.component';

describe('FlexBodyComponent', () => {
  let component: FlexBodyComponent;
  let fixture: ComponentFixture<FlexBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
