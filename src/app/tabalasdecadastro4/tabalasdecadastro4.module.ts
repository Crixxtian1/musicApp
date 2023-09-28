import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tabalasdecadastro4PageRoutingModule } from './tabalasdecadastro4-routing.module';

import { Tabalasdecadastro4Page } from './tabalasdecadastro4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tabalasdecadastro4PageRoutingModule
  ],
  declarations: [Tabalasdecadastro4Page]
})
export class Tabalasdecadastro4PageModule {}
