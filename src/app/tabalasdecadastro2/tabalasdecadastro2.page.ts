import { Component, OnInit } from '@angular/core';
import { MusicaapiService } from '../services/musicaapi.service';
import { ProfessorService } from '../services/professor.service';
import { Storage } from '@ionic/storage-angular';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tabalasdecadastro2',
  templateUrl: './tabalasdecadastro2.page.html',
  styleUrls: ['./tabalasdecadastro2.page.scss'],
})
export class Tabalasdecadastro2Page implements OnInit {

  nomeUsuario = 'Isabelli Kevia';
  fotoUsuario = '../../assets/isa.png'; // Substitua pela URL da foto do usuário
  comentarios: any[] = [];
  novoComentario: string = '';

  instrumento = ''
  data: any = {}
  dataResultados: any = []

  constructor(private musicaapiService: MusicaapiService, private professorService: ProfessorService, private storage: Storage, private alertController: AlertController) {

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

  adicionarComentario() {
    if (this.novoComentario.trim() !== '') {
      const comentario = {
        nome: this.nomeUsuario,
        foto: this.fotoUsuario,
        texto: this.novoComentario,
        horario: new Date()
      };

      this.comentarios.unshift(comentario);
      this.novoComentario = '';
    }
  }

  async confirmarExcluir(comentario: any) {
    const alert = await this.alertController.create({
      header: 'Excluir Comentário',
      message: 'Deseja realmente excluir este comentário?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Excluir',
          handler: () => {
            this.excluirComentario(comentario);
          }
        }
      ]
    });

    await alert.present();
  }

  excluirComentario(comentario: any) {
    const index = this.comentarios.indexOf(comentario);
    if (index !== -1) {
      this.comentarios.splice(index, 1);
    }
  }
}
