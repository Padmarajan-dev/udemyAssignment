import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabindingassignmentComponent } from './databindingassignment.component';

describe('DatabindingassignmentComponent', () => {
  let component: DatabindingassignmentComponent;
  let fixture: ComponentFixture<DatabindingassignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabindingassignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabindingassignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
