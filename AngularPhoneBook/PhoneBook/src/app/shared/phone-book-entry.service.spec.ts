import { TestBed } from '@angular/core/testing';

import { PhoneBookEntryService } from './phone-book-entry.service';

describe('PhoneBookEntryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhoneBookEntryService = TestBed.get(PhoneBookEntryService);
    expect(service).toBeTruthy();
  });
});
