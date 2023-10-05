import { Component, OnInit } from '@angular/core';
import { MusicaapiService } from '../services/musicaapi.service';

@Component({
  selector: 'app-tabalasdecadastro2',
  templateUrl: './tabalasdecadastro2.page.html',
  styleUrls: ['./tabalasdecadastro2.page.scss'],
})
export class Tabalasdecadastro2Page implements OnInit {

  professores = [];

  constructor(private musicaapiService: MusicaapiService) { }

  async ngOnInit() {
    this.musicaapiService.getProfessorPorInstrumento('violão').subscribe((res: any) => {this.professores = (res.content); console.log(this.professores)})
  }

}
