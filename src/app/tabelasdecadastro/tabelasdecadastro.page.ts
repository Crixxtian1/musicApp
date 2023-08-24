import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabelasdecadastro',
  templateUrl: './tabelasdecadastro.page.html',
  styleUrls: ['./tabelasdecadastro.page.scss'],
})
export class TabelasdecadastroPage implements OnInit {

  user = {
    name: 'Joaquim Machado',
    city: 'Lençois Paulsita',
    bio: '    :)',
    address: 'joquim gomes machado, 555',
    imageUrl: '../../assets/usuario.png',
    func: 'Canto',
    cont: '989813546'
  };

  constructor() { }

  ngOnInit() {
  }

}
