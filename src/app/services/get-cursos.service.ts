import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetCursosService {

  constructor(private client: HttpClient) { }

  list(): Observable<IDataCursosList> {
    return this.client.get<IDataCursosList>(
      'http://localhost:3001/api/v1/getCursos'
    );
  };
}

export interface IDataCursosList {
  data: any
}