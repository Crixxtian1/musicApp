import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarperfilprofessorPageRoutingModule } from './editarperfilprofessor-routing.module';

import { EditarperfilprofessorPage } from './editarperfilprofessor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarperfilprofessorPageRoutingModule
  ],
  declarations: [EditarperfilprofessorPage]
})
export class EditarperfilprofessorPageModule {}
