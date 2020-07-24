import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestwithparmsComponent } from './testwithparms.component';

describe('TestwithparmsComponent', () => {
  let component: TestwithparmsComponent;
  let fixture: ComponentFixture<TestwithparmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestwithparmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestwithparmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
