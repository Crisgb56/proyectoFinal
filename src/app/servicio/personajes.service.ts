import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  constructor(private httpClient:HttpClient) { }
  listarPersonajes():Observable<any> {
    return this.httpClient.get("https://rickandmortyapi.com/api/character");
  }
}
