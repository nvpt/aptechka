import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBoxPageComponent } from './edit-box-page.component';

describe('NewBoxComponent', () => {
  let component: EditBoxPageComponent;
  let fixture: ComponentFixture<EditBoxPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBoxPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBoxPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
