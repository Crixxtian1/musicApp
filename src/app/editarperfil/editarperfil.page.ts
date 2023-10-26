import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-editarperfil',
  templateUrl: './editarperfil.page.html',
  styleUrls: ['./editarperfil.page.scss'],
})
export class EditarperfilPage  {



  photoUrl: string = '../../assets/isa.png'; // Coloque o caminho da imagem padrão

  profile = {
    name: 'Isabelli',
    sobrenome: 'Kevia',
    email: 'isa@email.com',
    senha: '12345'
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
  constructor(public alertController: AlertController) {}

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
