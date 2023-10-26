import { Component, OnInit } from '@angular/core';
import { MusicaapiService } from '../services/musicaapi.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-editarperfilprofessor',
  templateUrl: './editarperfilprofessor.page.html',
  styleUrls: ['./editarperfilprofessor.page.scss'],
})
export class EditarperfilprofessorPage  {

  professores = []

  photoUrl: string = '../../assets/isa.png'; // Coloque o caminho da imagem padrão

  profile = {
    name: 'Isabelli',
    sobrenome: 'Kevia',
    email: 'isa@email.com',
    senha: '12345',
    instrumentos:'Violão',
    descricao:'Sou professora de Violãoaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
  };

  editingEnabled = false;


  enableEditing() {
    this.editingEnabled = true;
  }

  saveProfile() {
    // Aqui você pode adicionar o código para salvar as alterações do perfil
    // por exemplo, fazer uma chamada a uma API ou atualizar um banco de dados local
    console.log('Perfil salvo:', this.profile);
    this.editingEnabled = false;
  }


  editarPerfil() {
    // Lógica para alterar a foto de perfil
  }

  constructor(public alertController: AlertController, private musicaapiService: MusicaapiService ) { }

  async ngOnInit() {
    this.musicaapiService.getProfessor().subscribe((res: any) =>
     {this.professores = res;
      console.log(this.professores)})
  }



  mudarFotoPerfil() {
    this.presentAlert();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Mudar foto de perfil',
      subHeader: 'Escolha uma opção',
      message: 'Você deseja tirar uma nova foto ou selecionar uma da galeria?',
      buttons: ['Cancelar', 'Tirar Foto', 'Selecionar da Galeria'],
    });

    await alert.present();
  }





}
