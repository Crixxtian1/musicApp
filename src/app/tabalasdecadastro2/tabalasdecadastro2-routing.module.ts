import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tabalasdecadastro2Page } from './tabalasdecadastro2.page';

const routes: Routes = [
  {
    path: '',
    component: Tabalasdecadastro2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tabalasdecadastro2PageRoutingModule {}
