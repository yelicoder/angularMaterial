import { TestBed } from '@angular/core/testing';

import { Table5ServiceService } from './table5-service.service';

describe('Table5ServiceService', () => {
  let service: Table5ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Table5ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
