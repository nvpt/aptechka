import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxesPageComponent } from './boxes-page.component';

describe('DashboardPageComponent', () => {
  let component: BoxesPageComponent;
  let fixture: ComponentFixture<BoxesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
