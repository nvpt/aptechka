import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicamentsPageComponent } from './medicaments-page.component';

describe('MedicamentsPageComponent', () => {
  let component: MedicamentsPageComponent;
  let fixture: ComponentFixture<MedicamentsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicamentsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicamentsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
