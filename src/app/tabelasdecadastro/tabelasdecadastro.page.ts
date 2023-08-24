import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabelasdecadastro',
  templateUrl: './tabelasdecadastro.page.html',
  styleUrls: ['./tabelasdecadastro.page.scss'],
})
export class TabelasdecadastroPage implements OnInit {

  user = {
    name: 'Arianny',
    city: 'Lençois',
    bio: 'Biografia do Usuário',
    address: 'joquim gomes machado, 555',
    imageUrl: '../../assets/usuario.png',
  };

  constructor() { }

  ngOnInit() {
  }

}
