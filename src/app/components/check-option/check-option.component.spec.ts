import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckOptionComponent } from './check-option.component';

describe('EditableOptionComponent', () => {
  let component: CheckOptionComponent;
  let fixture: ComponentFixture<CheckOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
