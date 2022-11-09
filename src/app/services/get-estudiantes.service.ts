import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetEstudiantesService {

  
  constructor(private client: HttpClient) { }

  list(): Observable<IDataResponseList> {
    return this.client.get<IDataResponseList>(
      'http://localhost:3001/api/v1/getEstudiantes'
    );
  };
}

interface IDataResponseList {
  data: any;
}
