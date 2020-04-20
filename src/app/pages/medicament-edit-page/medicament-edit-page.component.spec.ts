import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicamentEditPageComponent } from './medicament-edit-page.component';

describe('MedicamentEditPageComponent', () => {
  let component: MedicamentEditPageComponent;
  let fixture: ComponentFixture<MedicamentEditPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicamentEditPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicamentEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
