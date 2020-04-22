import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineSesrchComponent } from './inline-sesrch.component';

describe('InlineSesrchComponent', () => {
  let component: InlineSesrchComponent;
  let fixture: ComponentFixture<InlineSesrchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InlineSesrchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineSesrchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
