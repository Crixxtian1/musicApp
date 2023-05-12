import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdicionarcontaPageRoutingModule } from './adicionarconta-routing.module';

import { AdicionarcontaPage } from './adicionarconta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdicionarcontaPageRoutingModule
  ],
  declarations: [AdicionarcontaPage]
})
export class AdicionarcontaPageModule {}
