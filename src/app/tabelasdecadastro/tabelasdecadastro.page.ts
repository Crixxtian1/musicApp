import { Component, OnInit } from '@angular/core';
import { MusicaapiService } from '../services/musicaapi.service';
import { ProfessorService } from '../services/professor.service';

@Component({
  selector: 'app-tabelasdecadastro',
  templateUrl: './tabelasdecadastro.page.html',
  styleUrls: ['./tabelasdecadastro.page.scss'],
})
export class TabelasdecadastroPage implements OnInit {

  instrumento = ''
  data: any = {}

  constructor(private musicaapiService: MusicaapiService, private professorService: ProfessorService) { }

  async ngOnInit() {
    this.instrumento = this.professorService.getInstrumento()
    this.professorService.getData().subscribe(e => this.data = e);
  }






}
