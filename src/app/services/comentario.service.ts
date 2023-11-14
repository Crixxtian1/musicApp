import { Injectable } from '@angular/core';
import { MusicaapiService } from './musicaapi.service';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  public idprofessor: number = 2

  constructor(private musicaapiService: MusicaapiService) { }

  public setIdProfessor(id: number) {
    this.idprofessor = id;
  }

  public getIdProfessor() {
    return this.idprofessor;
  }

  public getData() {
    console.log(this.idprofessor, 'iddddddddddd')
    return this.musicaapiService.getComentarioPorId(this.idprofessor);
  }
}
