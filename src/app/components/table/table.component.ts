import { Component, OnInit } from '@angular/core';
import { GetCursosService, IDataCursosList} from 'src/app/services/get-cursos.service';
import { GetEstudiantesService, IDataEstudiantesList } from 'src/app/services/get-estudiantes.service';
import { Router } from '@angular/router';

interface IColumnType {
  nombre: string;
  edad?: number;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  listEstudiantes: {
    nombre: string,
    edad: number
  }[] = [];
  listCursos: string[] = [];
  countOld: number = 0;
  countYng: number = 0;
  column: string = "Placeholder";
  table: IColumnType[] = [];

  countAge() {
    for (let item of this.table) {
      if (item.edad > 17) {
        this.countOld++;
      } else {
        this.countYng++;
      }
    }
  }

  validateType() {
    for (let item of this.table) {
      if (item.edad) {
        this.column = "Edad";
      } else {
        this.column = "Estudiantes";
      }
    }
  }

  loadData() {
    this.servicesHttpEst.list().subscribe(
      response => {
        console.log(response.data);
      },
      error => {
        console.log(error);
      }
    )
  }

  getCursos() {
    this.servicesHttpCur.list().subscribe(
      response => {
        for (let i = 0; i < response.data.length; i++) {
          this.listCursos.push(response.data[i].nombre)
        }
        for (const curso of this.listCursos) {
          this.table.push({
            nombre: curso
          })
        }
        this.validateType()
      },
      error => {
        console.log(error);
      }
    )
  }

  getEstudiantes() {
    this.servicesHttpEst.list().subscribe(
      response => {
        for (let i = 0; i < response.data.length; i++) {
          this.listEstudiantes.push({
            nombre: response.data[i].nombre,
            edad: response.data[i].edad
          })
        }
        for (const estudiante of this.listEstudiantes) {
          this.table.push({
            nombre: estudiante.nombre,
            edad: estudiante.edad
          })
        }
        this.validateType();
        this.countAge();
      },
      error => {
        console.log(error);
      }
    )
  }

  constructor(private servicesHttpCur: GetCursosService, private servicesHttpEst: GetEstudiantesService, private router: Router) { }

  ngOnInit() {
    if (this.router.url === "/cursos") {
      this.getCursos();
    }

    if (this.router.url === "/estudiantes") {
      this.getEstudiantes();
    }
  }
}
