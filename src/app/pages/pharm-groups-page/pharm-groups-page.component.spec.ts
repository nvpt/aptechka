import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmGroupsPageComponent } from './pharm-groups-page.component';

describe('PharmGroupsPageComponent', () => {
  let component: PharmGroupsPageComponent;
  let fixture: ComponentFixture<PharmGroupsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmGroupsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmGroupsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
