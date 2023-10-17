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

  // totalInstrumentos = 0;
 //filtro = new InstrumentoFiltro();
  instrumentos = [];


  constructor(private musicaapiService: MusicaapiService, private professorService: ProfessorService) { }

  async ngOnInit() {
    this.musicaapiService.getTodosInstrumentos().subscribe((res: any) => {
      this.instrumentos = (res.content);
      console.log(this.instrumentos)
    })

   // this.pesquisar();
  }

//  pesquisar() {

    //this.filtro.pagina = pagina;

   //this.musicaapiService.getTodosInstrumentos().subscribe((res: any) => {this.instrumentos = (res.content); console.log(this.instrumentos)})

//  }

  public trocarParaTabelaCadastro(nomeinstrumento: string) {
    this.professorService.setInstrumento(nomeinstrumento);
  }

}
