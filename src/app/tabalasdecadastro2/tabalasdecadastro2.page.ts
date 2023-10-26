import { Component, OnInit } from '@angular/core';
import { MusicaapiService } from '../services/musicaapi.service';
import { ProfessorService } from '../services/professor.service';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-tabalasdecadastro2',
  templateUrl: './tabalasdecadastro2.page.html',
  styleUrls: ['./tabalasdecadastro2.page.scss'],
})
export class Tabalasdecadastro2Page implements OnInit {

  comentarios: { nome: string, foto: string, texto: string, horario: Date, editando: boolean }[] = [];
  novoComentario: string = '';
  nomeUsuario = 'Isabelli Kevia';
  fotoUsuario = '../../assets/isa.png';

  instrumento = ''
  data: any = {}
  dataResultados: any = []

  constructor(private musicaapiService: MusicaapiService, private professorService: ProfessorService, private storage: Storage) {
    this.carregarComentarios();
 // Carregue os comentários anteriores do armazenamento ou de um serviço
  }

  async ngOnInit() {
    this.instrumento = this.professorService.getInstrumento()
    this.professorService.getData().subscribe((e: any) => {this.data = e; this.dataResultados = e.content});
  }


  public pesquisarCidade(event: any) {
    const query = event.target.value.toLowerCase();
    this.dataResultados = this.data.content.filter((d: any) => d.cidade.toLowerCase().indexOf(query) > -1);
  }

  editarComentario(comentario: any) {
    comentario.editando = true;
  }

  salvarComentario(comentario: any) {
    comentario.editando = false;
    this.salvarComentarios();
  }

  adicionarComentario() {
    if (this.novoComentario.trim() !== '') {
      this.comentarios.unshift({
        nome: this.nomeUsuario,
        foto: this.fotoUsuario,
        texto: this.novoComentario,
        horario: new Date(),
        editando: false
      });
      this.novoComentario = '';
      this.salvarComentarios();
    }
  }

  excluirComentario(comentario: any) {
    const index = this.comentarios.indexOf(comentario);
    if (index > -1) {
      this.comentarios.splice(index, 1);
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
