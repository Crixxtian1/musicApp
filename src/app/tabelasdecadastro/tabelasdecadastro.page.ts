import { Component, OnInit } from '@angular/core';
import { MusicaapiService } from '../services/musicaapi.service';
import { ProfessorService } from '../services/professor.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tabelasdecadastro',
  templateUrl: './tabelasdecadastro.page.html',
  styleUrls: ['./tabelasdecadastro.page.scss'],
})
export class TabelasdecadastroPage implements OnInit {

  fotoUsuario = '../../assets/isa.png'; // Substitua pela URL da foto do usuário

  instrumento = ''
  data: any = {}
  dataResultados: any = []

  constructor(private musicaapiService: MusicaapiService, private professorService: ProfessorService, private storage: Storage) {
  }

  async ngOnInit() {
    this.instrumento = this.professorService.getInstrumento()
    this.professorService.getData().subscribe((e: any) => {this.data = e; this.dataResultados = e.content});
  }


  public pesquisarCidade(event: any) {
    const query = event.target.value.toLowerCase();
    this.dataResultados = this.data.content.filter((d: any) => d.cidade.toLowerCase().indexOf(query) > -1);
  }

}


