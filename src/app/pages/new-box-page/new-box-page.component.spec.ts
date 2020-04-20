import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBoxPageComponent } from './new-box-page.component';

describe('NewBoxComponent', () => {
  let component: NewBoxPageComponent;
  let fixture: ComponentFixture<NewBoxPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBoxPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBoxPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
