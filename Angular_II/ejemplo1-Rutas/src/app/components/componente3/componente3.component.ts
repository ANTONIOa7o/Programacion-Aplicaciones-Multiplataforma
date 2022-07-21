import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-componente3',
  templateUrl: './componente3.component.html',
  styleUrls: ['./componente3.component.css']
})
export class Componente3Component implements OnInit {

  constructor(private ruta:ActivatedRoute) {
//Recuperar el  paramentro:  [codigo] app.module.ts
console.log('Hotel: ' +this.ruta.snapshot.params['codigo']);

//Recuperar los query params: [queryParam] app.component.html
console.log("Fecha: " +this.ruta.snapshot.queryParams.entrada);
console.log("Fecha: " +this.ruta.snapshot.queryParams.salida);
console.log("Personas a alojarse: " +this.ruta.snapshot.queryParams.personas);

   }

  ngOnInit(): void {
  }

}
