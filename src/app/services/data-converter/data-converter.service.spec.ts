import { TestBed } from '@angular/core/testing';

import { DataConverterService } from './data-converter.service';

describe('DataConverterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataConverterService = TestBed.get(DataConverterService);
    expect(service).toBeTruthy();
  });
});
