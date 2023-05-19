import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})



export class ChatPage {

  contact: any;
  messages: any[] = [
    { text: 'Olá!', time: '09:00', sender: 'me' },
    { text: 'Olá! Como posso ajudar?', time: '09:01', sender: 'other' },
    // Adicione mais mensagens aqui...
  ];

  newMessage: string = '';
  avatar: string;

  constructor(private navCtrl: NavController, private route: ActivatedRoute) {
    this.contact = this.route.snapshot.paramMap.get('contact');
    this.avatar = this.contact.avatar;
  }

  sendMessage() {
    if (this.newMessage.trim() !== '') {
      const message = {
        text: this.newMessage,
        time: this.getCurrentTime(),
        sender: 'me'
      };
      this.messages.push(message);
      this.newMessage = '';
    }
  }

  getCurrentTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    return `${hours}:${minutes < 10 ? '0' + minutes : minutes}`;
  }
}
