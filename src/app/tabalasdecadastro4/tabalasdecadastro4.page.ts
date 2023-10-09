import { Component, OnInit } from '@angular/core';
import { MusicaapiService } from '../services/musicaapi.service';

@Component({
  selector: 'app-tabalasdecadastro4',
  templateUrl: './tabalasdecadastro4.page.html',
  styleUrls: ['./tabalasdecadastro4.page.scss'],
})
export class Tabalasdecadastro4Page implements OnInit {

  professores = [];

  constructor(private musicaapiService: MusicaapiService) { }

  async ngOnInit() {
    this.musicaapiService.getProfessorPorInstrumento('piano').subscribe((res: any) => {this.professores = (res.content); console.log(this.professores)})
  }


}
