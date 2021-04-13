import { TestBed } from '@angular/core/testing';

import { LoginErrorServiceService } from './login-error-service.service';

describe('LoginErrorServiceService', () => {
  let service: LoginErrorServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginErrorServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
