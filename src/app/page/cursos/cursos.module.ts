import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CursosPageRoutingModule } from './cursos-routing.module';

import { CursosPage } from './cursos.page';

import { TableComponent } from 'src/app/components/table/table.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CursosPageRoutingModule
  ],
  declarations: [CursosPage, TableComponent]
})
export class CursosPageModule {}
