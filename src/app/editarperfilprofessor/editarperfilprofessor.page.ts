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

  photoUrl: string = '../../assets/cris.png'; // Coloque o caminho da imagem padrão

  profile = {
    name: 'Cristian',
    sobrenome: 'Machado',
    email: 'cris@email.com',
    senha: '12345',
    instrumentos:'Piano',
    descricao:'Sou um pianista talentoso e versátil, particularmente muito bonito e inteligente. Compartilho meu conhecimento com entusiasmo.'
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
