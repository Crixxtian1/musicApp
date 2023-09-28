import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tabalasdecadastro2PageRoutingModule } from './tabalasdecadastro2-routing.module';

import { Tabalasdecadastro2Page } from './tabalasdecadastro2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tabalasdecadastro2PageRoutingModule
  ],
  declarations: [Tabalasdecadastro2Page]
})
export class Tabalasdecadastro2PageModule {}
