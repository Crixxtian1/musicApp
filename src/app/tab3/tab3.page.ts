import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';

interface Contact {
  name: string;
  avatar: string;
  status: string;
}


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})


export class Tab3Page {
  contacts: Contact[] = [
    { name: 'John Doe', avatar: 'path/to/avatar1.png', status: 'Online' },
    { name: 'Jane Smith', avatar: 'path/to/avatar2.png', status: 'Offline' },
    // Adicione mais contatos aqui...
  ];

  constructor(private navCtrl: NavController, private router: Router) {}

  openChat(contact: Contact) {
    // Navegue para a página de chat passando o objeto de contato
    const navigationExtras: NavigationExtras = {
      state: {
        contact: contact
      }
    };
    this.router.navigate(['/chat', { contact: contact }]);
  }
}
