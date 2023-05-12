import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuacontaPage } from './suaconta.page';

const routes: Routes = [
  {
    path: '',
    component: SuacontaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuacontaPageRoutingModule {}
