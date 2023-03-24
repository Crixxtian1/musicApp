import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadatroprofPageRoutingModule } from './cadatroprof-routing.module';

import { CadatroprofPage } from './cadatroprof.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadatroprofPageRoutingModule
  ],
  declarations: [CadatroprofPage]
})
export class CadatroprofPageModule {}
