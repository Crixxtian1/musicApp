import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabalasdecadastro4',
  templateUrl: './tabalasdecadastro4.page.html',
  styleUrls: ['./tabalasdecadastro4.page.scss'],
})
export class Tabalasdecadastro4Page implements OnInit {

  user = {
    name: 'Joaquim Machado',
    city: 'Lençois Paulsita',
    bio: '    :)',
    address: 'joquim gomes machado, 555',
    imageUrl: '../../assets/usuario.png',
    func: 'Piano',
    cont: '989813546'
  };

  user2 = {
    name: 'Arianny Flavio',
    city: 'Lençois Paulsita',
    bio: '    :)',
    address: 'joquim gomes machado, 555',
    imageUrl: '../../assets/usuario.png',
    func: 'Piano',
    cont: '989813546'
  };

  user3 = {
    name: 'Isadora Machado',
    city: 'Lençois Paulsita',
    bio: '    :)',
    address: 'joquim gomes machado, 555',
    imageUrl: '../../assets/usuario.png',
    func: 'Piano',
    cont: '989813546'
  };

  constructor() { }

  ngOnInit() {
  }

}
