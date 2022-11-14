import { TestBed } from '@angular/core/testing';

import { GetCursosService } from './get-cursos.service';

describe('GetCursosService', () => {
  let service: GetCursosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetCursosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
