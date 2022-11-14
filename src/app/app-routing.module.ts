import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { EstudiantesPage } from './page/estudiantes/estudiantes.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./page/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'cursos',
    loadChildren: () => import('./page/cursos/cursos.module').then( m => m.CursosPageModule)
  },
  {
    path: 'estudiantes',
    loadChildren: () => import('./page/estudiantes/estudiantes.module').then( m => m.EstudiantesPageModule)
  },
  {
    path: 'estudiantes/:nombre',
    loadChildren: () => import('./page/estudiantes/estudiantes.module').then( m => m.EstudiantesPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
