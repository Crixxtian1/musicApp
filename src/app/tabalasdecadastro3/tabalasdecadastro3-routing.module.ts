import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tabalasdecadastro3Page } from './tabalasdecadastro3.page';

const routes: Routes = [
  {
    path: '',
    component: Tabalasdecadastro3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tabalasdecadastro3PageRoutingModule {}
