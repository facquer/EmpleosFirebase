import { TestBed } from '@angular/core/testing';

import { EmpleosService } from './empleos.service';

describe('EmpleosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmpleosService = TestBed.get(EmpleosService);
    expect(service).toBeTruthy();
  });
});
