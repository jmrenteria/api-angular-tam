import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioPage } from './inicio.page';
import { EstudiantesPage } from '../estudiantes/estudiantes.page';
import { CursosPage } from '../cursos/cursos.page';

const routes: Routes = [
  {
    path: '',
    component: InicioPage
  },
  {
    path: 'cursos',
    component: CursosPage
  },
  {
    path: 'estudiantes',
    component: EstudiantesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioPageRoutingModule {}
