import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuacontaPageRoutingModule } from './suaconta-routing.module';

import { SuacontaPage } from './suaconta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuacontaPageRoutingModule
  ],
  declarations: [SuacontaPage]
})
export class SuacontaPageModule {}
