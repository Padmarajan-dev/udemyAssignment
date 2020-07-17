import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveassignmentComponent } from './directiveassignment.component';

describe('DirectiveassignmentComponent', () => {
  let component: DirectiveassignmentComponent;
  let fixture: ComponentFixture<DirectiveassignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveassignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveassignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
