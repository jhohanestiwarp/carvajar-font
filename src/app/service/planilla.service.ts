import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { evidencia } from '../models/evidencia';
@Injectable({
  providedIn: 'root'
})
export class evidenciaService {
  if(id: string | null) {
    throw new Error('Method not implemented.');
  }
  Api: string = 'http://localhost:8090/api/evidencia';


  constructor(private clienteHttp: HttpClient) { }

  Addevidencia(datoevidencia: evidencia): Observable<any> {
    return this.clienteHttp.post(this.Api, datoevidencia);
  }

  Listevidencia() {
    return this.clienteHttp.get(this.Api);
  }

  Deleteevidencia(id: string): Observable<any> {
    return this.clienteHttp.delete(this.Api + "/" + id);
  }

  Obtenerevidencia(id: string): Observable<any> {
    return this.clienteHttp.get(this.Api + "/" + id);
  }

  Updateevidencia(datosevidencia: evidencia): Observable<any> {
    return this.clienteHttp.put(this.Api, datosevidencia);
  }


  Listcontratos() {
    return this.clienteHttp.get(this.Api);
  }



}
