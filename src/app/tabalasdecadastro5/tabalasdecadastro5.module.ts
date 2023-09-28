import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tabalasdecadastro5PageRoutingModule } from './tabalasdecadastro5-routing.module';

import { Tabalasdecadastro5Page } from './tabalasdecadastro5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tabalasdecadastro5PageRoutingModule
  ],
  declarations: [Tabalasdecadastro5Page]
})
export class Tabalasdecadastro5PageModule {}
