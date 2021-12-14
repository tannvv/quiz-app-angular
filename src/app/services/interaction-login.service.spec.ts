import { TestBed } from '@angular/core/testing';

import { InteractionLoginService } from './interaction-login.service';

describe('InteractionLoginService', () => {
  let service: InteractionLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InteractionLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
