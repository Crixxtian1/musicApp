import { Component, OnInit } from '@angular/core';
import { MusicaapiService } from '../services/musicaapi.service';

@Component({
  selector: 'app-tabalasdecadastro3',
  templateUrl: './tabalasdecadastro3.page.html',
  styleUrls: ['./tabalasdecadastro3.page.scss'],
})


export class Tabalasdecadastro3Page implements OnInit {

  professores = [];

  constructor(private musicaapiService: MusicaapiService) { }

  async ngOnInit() {
    this.musicaapiService.getProfessorPorInstrumento('teclado').subscribe((res: any) => {this.professores = (res.content); console.log(this.professores)})
  }


}
