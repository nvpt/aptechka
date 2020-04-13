import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpactTypesPageComponent } from './impact-types-page.component';

describe('PharmGroupsPageComponent', () => {
  let component: ImpactTypesPageComponent;
  let fixture: ComponentFixture<ImpactTypesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImpactTypesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpactTypesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
