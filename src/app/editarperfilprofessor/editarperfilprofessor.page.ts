import { Component, OnInit } from '@angular/core';
import { MusicaapiService } from '../services/musicaapi.service';

@Component({
  selector: 'app-editarperfilprofessor',
  templateUrl: './editarperfilprofessor.page.html',
  styleUrls: ['./editarperfilprofessor.page.scss'],
})
export class EditarperfilprofessorPage  {

  professores = []

  photoUrl: string = '../../assets/usuario.png'; // Coloque o caminho da imagem padrão

  profile = {
    name: '',
    sobrenome: '',
    email: '',
    senha: '',
    instrumentos:'',
    descricao:''
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

  constructor(private musicaapiService: MusicaapiService) { }

  async ngOnInit() {
    this.musicaapiService.getProfessor().subscribe((res: any) =>
     {this.professores = res;
      console.log(this.professores)})
  }








}
