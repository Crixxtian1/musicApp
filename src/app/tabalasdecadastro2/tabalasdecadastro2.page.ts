import { Component, OnInit } from '@angular/core';
import { MusicaapiService } from '../services/musicaapi.service';
import { ProfessorService } from '../services/professor.service';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-tabalasdecadastro2',
  templateUrl: './tabalasdecadastro2.page.html',
  styleUrls: ['./tabalasdecadastro2.page.scss'],
})
export class Tabalasdecadastro2Page implements OnInit {

  mostrarComentarios = false;
  novoComentario: string = '';
  nomeUsuario = 'Isabelli Kevia da Silva';
  fotoUsuario = '../../assets/isa.png'; // Substitua pela URL da foto do usuário
  comentarios: { nome: string, foto: string, texto: string, horario: Date }[] = [];


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

  toggleComentarios() {
    this.mostrarComentarios = !this.mostrarComentarios;
    this.carregarComentarios();
  }

  adicionarComentario() {
    if (this.novoComentario.trim() !== '') {
      this.comentarios.unshift({
        nome: this.nomeUsuario,
        foto: this.fotoUsuario,
        texto: this.novoComentario,
        horario: new Date()
      });
      this.novoComentario = '';
      this.salvarComentarios();
    }
  }

  async carregarComentarios() {
    const comentarios = await this.storage.get('comentarios');
    if (comentarios) {
      this.comentarios = comentarios;
    }
  }

  salvarComentarios() {
    this.storage.set('comentarios', this.comentarios);
  }

}
