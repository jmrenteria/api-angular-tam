import { TestBed } from '@angular/core/testing';

import { GetEstudiantesService } from './get-estudiantes.service';

describe('GetEstudiantesService', () => {
  let service: GetEstudiantesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetEstudiantesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
