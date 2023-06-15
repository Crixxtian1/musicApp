import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editarperfil',
  templateUrl: './editarperfil.page.html',
  styleUrls: ['./editarperfil.page.scss'],
})
export class EditarperfilPage  {

  photoUrl: string = 'assets/usuario.png'; // Coloque o caminho da imagem padrão

  profile = {
    name: 'Nome do Perfil',
    sobrenome: '',
    email: 'email@example.com',
    senha: ''
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

}
