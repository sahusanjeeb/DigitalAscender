import { TestBed } from '@angular/core/testing';

import { Request.InterceptorService } from './request.interceptor.service';

describe('Request.InterceptorService', () => {
  let service: Request.InterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Request.InterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
