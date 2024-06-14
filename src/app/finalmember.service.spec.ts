import { TestBed } from '@angular/core/testing';

import { FinalmemberService } from './finalmember.service';

describe('FinalmemberService', () => {
  let service: FinalmemberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinalmemberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
