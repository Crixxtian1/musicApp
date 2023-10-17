import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export class InstrumentoFiltro {
nomeinstrumento: String;
}

export class InstrumentoService {
  InstrumentoUrl: String;
  }



@Injectable({
  providedIn: 'root'
})



export class MusicaapiService {
  httpHeader = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  url = "http://localhost:8080";



  constructor(private http: HttpClient,
    ) { }


   // pesquisar(filtro: InstrumentoFiltro): Promise<any> {

     // let params = newHttpParams ({
     //   fromObject : {
     //     page: filtro.pagina.toString(),
     //     size: filtro.itensPorPagina.toString()
      //  }

     // });

    //  if (filtro.nomeinstrumento) {
     //   params = params.apeend('nomeinstrumento',)
     // }

   // }


  getTodosProfessor() {
    const res = this.http.get(`${this.url}/professores/todos`, this.httpHeader)
    return res.subscribe(
      res => res,
    );
  }

  getProfessorPorId(id: number) {
    const res = this.http.get(`${this.url}/professores/${id}`, this.httpHeader)
    return res.subscribe(
      res => res,
    );
  }

  getProfessorPorInstrumento(instrumento: string) {
    const res = this.http.get(`${this.url}/professores?nomeinstrumentos=${instrumento}`, this.httpHeader)
    return res
  }

  getTodosInstrumentos() {
    const res = this.http.get(`${this.url}/instrumentos`, this.httpHeader)
    return res
  }

  getInstrumentosPorId(id: number) {
    const res = this.http.get(`${this.url}/instrumentos/${id}`, this.httpHeader)
    return res.subscribe(
      res => res,
    );
  }

  getCidadesProfessor(cidade: string) {
    const res = this.http.get(`${this.url}/professores?cidades=${cidade}`, this.httpHeader)
    return res
  }

  getTodasCidades() {
    const res = this.http.get(`${this.url}/cidades`, this.httpHeader)
    return res.subscribe(
      res => res,
    );
  }

  getCidadesPorId(id: number) {
    const res = this.http.get(`${this.url}/cidades/${id}`, this.httpHeader)
    return res.subscribe(
      res => res,
    );
  }





}
