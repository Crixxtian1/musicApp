import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editarperfilprofessor',
  templateUrl: './editarperfilprofessor.page.html',
  styleUrls: ['./editarperfilprofessor.page.scss'],
})
export class EditarperfilprofessorPage  {

  photoUrl: string = 'assets/default-profile-picture.jpg'; // Coloque o caminho da imagem padrão

  profile = {
    name: 'Nome do Perfil',
    sobrenome: '',
    email: 'email@example.com',
    senha: '',
    instrumentos:''
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
