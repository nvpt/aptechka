import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioOptionComponent } from './radio-option.component';

describe('EditableOptionComponent', () => {
  let component: RadioOptionComponent;
  let fixture: ComponentFixture<RadioOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
