import { Component } from '@angular/core';
import { MusicaapiService } from '../services/musicaapi.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  showButton = true;
  showList = false;

  showOptions() {
    this.showButton = true;
    this.showList = !this.showList;
  }

  instrumentos = [];

  constructor(private musicaapiService: MusicaapiService) { }

  async ngOnInit() {
    this.musicaapiService.getTodosInstrumentos().subscribe((res: any) => {this.instrumentos = (res.content); console.log(this.instrumentos)})
  }

}
