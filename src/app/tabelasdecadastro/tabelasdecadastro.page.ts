import { Component, OnInit } from '@angular/core';
import { MusicaapiService } from '../services/musicaapi.service';

@Component({
  selector: 'app-tabelasdecadastro',
  templateUrl: './tabelasdecadastro.page.html',
  styleUrls: ['./tabelasdecadastro.page.scss'],
})
export class TabelasdecadastroPage implements OnInit {



  professores = [];
  cidades = [];

  constructor(private musicaapiService: MusicaapiService) { }

  async ngOnInit() {

    this.musicaapiService.getProfessorPorInstrumento('canto').subscribe((res: any) => {this.professores = (res.content); console.log(this.professores)}),

    this.musicaapiService.getTodosInstrumentos().subscribe((res: any) => {this.cidades = (res.content); console.log(this.cidades)})
  }






}
