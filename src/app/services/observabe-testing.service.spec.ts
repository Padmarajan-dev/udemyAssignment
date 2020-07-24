import { TestBed } from '@angular/core/testing';

import { ObservabeTestingService } from './observabe-testing.service';

describe('ObservabeTestingService', () => {
  let service: ObservabeTestingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObservabeTestingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
