import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { TableService } from './table.service';

describe('TableService', () => {
  let service: TableService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(TableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  fit('should checkError throw Error when error code is not 0', () => {
    const errorResponse = {
      errorCode: "1",
      errorMessage: "Invalid input",
    };

    expect( function() {service.checkError(errorResponse)}).toThrowError("Invalid input");

  })
});
