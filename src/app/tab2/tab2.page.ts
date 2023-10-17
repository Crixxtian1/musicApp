import { Component, ViewChild } from '@angular/core';
import { MusicaapiService, InstrumentoFiltro } from '../services/musicaapi.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  totalInstrumentos = 0;
  filtro = new InstrumentoFiltro();
  instrumentos = [];


  constructor(private musicaapiService: MusicaapiService) { }

  async ngOnInit() {
   // this.musicaapiService.getTodosInstrumentos().subscribe((res: any) => {this.instrumentos = (res.content); console.log(this.instrumentos)})

    this.pesquisar();
  }

  pesquisar() {

    //this.filtro.pagina = pagina;

    this.musicaapiService.getTodosInstrumentos().subscribe((res: any) => {this.instrumentos = (res.content); console.log(this.instrumentos)})

  }

}
