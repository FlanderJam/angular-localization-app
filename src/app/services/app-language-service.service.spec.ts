import { TestBed } from '@angular/core/testing';

import { AppLanguageServiceService } from './app-language-service.service';

describe('AppLanguageServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppLanguageServiceService = TestBed.get(AppLanguageServiceService);
    expect(service).toBeTruthy();
  });
});
