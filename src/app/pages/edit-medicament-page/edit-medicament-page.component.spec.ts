import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMedicamentPageComponent } from './edit-medicament-page.component';

describe('MedicamentEditPageComponent', () => {
  let component: EditMedicamentPageComponent;
  let fixture: ComponentFixture<EditMedicamentPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMedicamentPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMedicamentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
