import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tabalasdecadastro3PageRoutingModule } from './tabalasdecadastro3-routing.module';

import { Tabalasdecadastro3Page } from './tabalasdecadastro3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tabalasdecadastro3PageRoutingModule
  ],
  declarations: [Tabalasdecadastro3Page]
})
export class Tabalasdecadastro3PageModule {}
