import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetGroupsPageComponent } from './target-groups-page.component';

describe('TargetGroupsPageComponent', () => {
  let component: TargetGroupsPageComponent;
  let fixture: ComponentFixture<TargetGroupsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TargetGroupsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetGroupsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
