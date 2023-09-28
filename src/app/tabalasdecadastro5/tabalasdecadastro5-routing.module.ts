import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tabalasdecadastro5Page } from './tabalasdecadastro5.page';

const routes: Routes = [
  {
    path: '',
    component: Tabalasdecadastro5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tabalasdecadastro5PageRoutingModule {}
