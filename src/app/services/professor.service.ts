import { Injectable } from '@angular/core';
import { MusicaapiService } from './musicaapi.service';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  private instrumento: string = 'Violão';

  constructor(private musicaapiService: MusicaapiService) { }

  public setInstrumento(instrumento: string) {
    this.instrumento = instrumento;
    console.log(this.instrumento)
  }

  public getInstrumento() {
    return this.instrumento;
  }

  public getData() {
    return this.musicaapiService.getProfessorPorInstrumento(this.instrumento);
  }
}
