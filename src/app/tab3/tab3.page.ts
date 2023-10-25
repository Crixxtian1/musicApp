import { Component   } from '@angular/core';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})


export class Tab3Page {
  mostrarComentarios = false;
  novoComentario: string = '';
  nomeUsuario = 'Nome do Usuário';
  fotoUsuario = 'URL_DA_FOTO_DO_USUARIO'; // Substitua pela URL da foto do usuário
  comentarios: { nome: string, foto: string, texto: string, horario: Date }[] = [];

  constructor(private storage: Storage) {

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
