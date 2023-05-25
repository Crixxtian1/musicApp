import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editarperfil',
  templateUrl: './editarperfil.page.html',
  styleUrls: ['./editarperfil.page.scss'],
})
export class EditarperfilPage  {

  photoUrl: string = 'assets/default-profile-picture.jpg'; // Coloque o caminho da imagem padrão

  constructor() { }


  editarPerfil() {
    // Lógica para alterar a foto de perfil
  }

}
