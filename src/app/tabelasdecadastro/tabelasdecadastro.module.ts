import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabelasdecadastroPageRoutingModule } from './tabelasdecadastro-routing.module';

import { TabelasdecadastroPage } from './tabelasdecadastro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabelasdecadastroPageRoutingModule
  ],
  declarations: [TabelasdecadastroPage]
})
export class TabelasdecadastroPageModule {}
