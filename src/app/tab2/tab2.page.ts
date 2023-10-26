import { InstrumentoFiltro } from './../services/musicaapi.service';
import { Component, ViewChild } from '@angular/core';
import { MusicaapiService } from '../services/musicaapi.service';
import { ProfessorService } from '../services/professor.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  instrumentos = [];
  instrumentosResult = [...this.instrumentos]

  photoUrl: string = '../../assets/isa.png'; // Coloque o caminho da imagem padrão

  profile = {
    name: 'Isabelli',
    sobrenome: 'Kevia',
    email: 'isa@email.com',
    senha: '12345',
    instrumentos:'Violão',
    descricao:'Sou professora de Violão'
  };


  constructor(private musicaapiService: MusicaapiService, private professorService: ProfessorService) { }

  async ngOnInit() {
    this.musicaapiService.getTodosInstrumentos().subscribe((res: any) => {
      this.instrumentos = (res.content);
      this.instrumentosResult = [...this.instrumentos];
      console.log(this.instrumentos)
    })
  }

  public trocarParaTabelaCadastro(nomeinstrumento: string) {
    this.professorService.setInstrumento(nomeinstrumento);
  }

  public handleInput(event: any) {
    const query = event.target.value.toLowerCase();
    this.instrumentosResult = this.instrumentos.filter((d: any) => d.nomeinstrumento.toLowerCase().indexOf(query) > -1);
  }



}
