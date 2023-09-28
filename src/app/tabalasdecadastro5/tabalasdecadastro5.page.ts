import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabalasdecadastro5',
  templateUrl: './tabalasdecadastro5.page.html',
  styleUrls: ['./tabalasdecadastro5.page.scss'],
})
export class Tabalasdecadastro5Page implements OnInit {

  user = {
    name: 'Joaquim Machado',
    city: 'Lençois Paulsita',
    bio: '    :)',
    address: 'joquim gomes machado, 555',
    imageUrl: '../../assets/usuario.png',
    func: 'Guitarra',
    cont: '989813546'
  };

  constructor() { }

  ngOnInit() {
  }

}
