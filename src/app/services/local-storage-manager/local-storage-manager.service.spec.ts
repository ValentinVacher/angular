import { TestBed } from '@angular/core/testing';

import { LocalStorageManagerService } from './local-storage-manager.service';

describe('LocaleStorageManagerService', () => {
  let service: LocalStorageManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorageManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
