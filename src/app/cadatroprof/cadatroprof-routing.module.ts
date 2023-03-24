import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadatroprofPage } from './cadatroprof.page';

const routes: Routes = [
  {
    path: '',
    component: CadatroprofPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadatroprofPageRoutingModule {}
