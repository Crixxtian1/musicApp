import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabelasdecadastroPage } from './tabelasdecadastro.page';

const routes: Routes = [
  {
    path: '',
    component: TabelasdecadastroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabelasdecadastroPageRoutingModule {}
