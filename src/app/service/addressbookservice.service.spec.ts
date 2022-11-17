import { TestBed } from '@angular/core/testing';

import { AddressbookserviceService } from './addressbookservice.service';

describe('AddressbookserviceService', () => {
  let service: AddressbookserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddressbookserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
