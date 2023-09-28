import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabalasdecadastro2',
  templateUrl: './tabalasdecadastro2.page.html',
  styleUrls: ['./tabalasdecadastro2.page.scss'],
})
export class Tabalasdecadastro2Page implements OnInit {

  user = {
    name: 'Isabelli Kevia',
    city: 'Bauru',
    bio: '    :)',
    address: 'joquim gomes machado, 555',
    imageUrl: '../../assets/usuario.png',
    func: 'Violão',
    cont: '989813546'
  };

  user2 = {
    name: 'Arianny Flavio',
    city: 'Lençois Paulsita',
    bio: '    :)',
    address: 'joquim gomes machado, 555',
    imageUrl: '../../assets/usuario.png',
    func: 'Violão',
    cont: '989813546'
  };

  user3 = {
    name: 'Isadora Machado',
    city: 'Lençois Paulsita',
    bio: '    :)',
    address: 'joquim gomes machado, 555',
    imageUrl: '../../assets/usuario.png',
    func: 'Violão',
    cont: '989813546'
  };

  constructor() { }

  ngOnInit() {
  }

}
