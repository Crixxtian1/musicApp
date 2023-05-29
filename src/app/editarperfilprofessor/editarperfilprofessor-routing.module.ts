import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarperfilprofessorPage } from './editarperfilprofessor.page';

const routes: Routes = [
  {
    path: '',
    component: EditarperfilprofessorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarperfilprofessorPageRoutingModule {}
