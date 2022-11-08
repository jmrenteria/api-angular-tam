import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstudiantesPageRoutingModule } from './estudiantes-routing.module';

import { EstudiantesPage } from './estudiantes.page';
import { TableComponent } from 'src/app/components/table/table.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstudiantesPageRoutingModule
  ],
  declarations: [EstudiantesPage, TableComponent]
})
export class EstudiantesPageModule {}
