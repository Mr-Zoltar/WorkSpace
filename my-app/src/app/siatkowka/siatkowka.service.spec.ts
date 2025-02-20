import { TestBed } from '@angular/core/testing';

import { SiatkowkaService } from './siatkowka.service';

describe('SiatkowkaService', () => {
  let service: SiatkowkaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SiatkowkaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
