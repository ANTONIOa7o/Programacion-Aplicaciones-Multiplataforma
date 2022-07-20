import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';//IMPORTAMOS EL MODULO

@Injectable({
  providedIn: 'root'
})

//------------------- DECLARAMOS EL SERVICIO-------------

export class PokemonService {

  // Declaramos las variables a utilizar
  url = "https://pokeapi.co/api/v2/pokemon";
  cabeceras = new HttpHeaders({ "Content-type": "application/json" });

  // Establecemos las peticiones get y post
  constructor(private http: HttpClient) { }

  public getAll() {
    return this.http.get(this.url, { headers: this.cabeceras });
  }

  public buscar(nombre: string) {
    let otraUrl = this.url + "/" + nombre;
    return this.http.get(otraUrl, { headers: this.cabeceras });
  }
}
