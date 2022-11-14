import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetEstudiantesService {

  constructor(private client: HttpClient) { }

  list(): Observable<IDataEstudiantesList> {
    return this.client.get<IDataEstudiantesList>(
      'http://localhost:3001/api/v1/getPersonas'
    );
  };
}

export interface IDataEstudiantesList {
  data: any
}