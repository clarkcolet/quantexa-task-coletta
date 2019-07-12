import { TestBed } from '@angular/core/testing';

import { DataOperatorsService } from './data-operators.service';

describe('DataOperatorsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataOperatorsService = TestBed.get(DataOperatorsService);
    expect(service).toBeTruthy();
  });
});
