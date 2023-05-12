import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdicionarcontaPage } from './adicionarconta.page';

const routes: Routes = [
  {
    path: '',
    component: AdicionarcontaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdicionarcontaPageRoutingModule {}
