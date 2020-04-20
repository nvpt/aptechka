import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMedicamentPageComponent } from './new-medicament-page.component';

describe('NewMedicamentComponent', () => {
  let component: NewMedicamentPageComponent;
  let fixture: ComponentFixture<NewMedicamentPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMedicamentPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMedicamentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
