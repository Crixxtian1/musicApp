import { TestBed } from '@angular/core/testing';

import { MusicaapiService } from './musicaapi.service';

describe('MusicaapiService', () => {
  let service: MusicaapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MusicaapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
