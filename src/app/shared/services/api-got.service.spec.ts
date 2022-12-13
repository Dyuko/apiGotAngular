import { TestBed } from '@angular/core/testing';

import { ApiGotService } from './api-got.service';

describe('ApiGotService', () => {
  let service: ApiGotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiGotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
