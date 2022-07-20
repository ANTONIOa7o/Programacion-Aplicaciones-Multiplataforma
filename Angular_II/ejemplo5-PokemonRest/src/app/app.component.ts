import { Component } from '@angular/core';
import { PokemonService } from './services/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/* --------------- INYECTAMOS EL SERVICIO-----------------*/


export class AppComponent {

  pokemons: any = [];
  nombre: string = "";
  pokemon: any = null;

  constructor(private pokemonService: PokemonService) {
    this.pokemonService.getAll().subscribe((datos: any) => {
      this.pokemon = datos.result
    }

    )};
  
  buscar() {
    this.pokemonService.buscar(this.nombre).subscribe((item) => {
      this.pokemon = item;
      return null;

    }

    )};
}
 

