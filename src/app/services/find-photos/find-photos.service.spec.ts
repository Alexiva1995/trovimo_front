import { TestBed } from '@angular/core/testing';

import { FindPhotosService } from './find-photos.service';

describe('FindPhotosService', () => {
  let service: FindPhotosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindPhotosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
