import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  tittle='';


  alumnos:any=[
{valoraciones:'alta',repetidor:false, nombre:'Juan', apellidos:'Lopez',nota:5.5},
{valoraciones:'media',repetidor:false, nombre:'Elena', apellidos:'Sanchez',nota:6.5},
{valoraciones:'baja',repetidor:true, nombre:'Maria', apellidos:'Arias',nota:7.5},
{valoraciones:'media',repetidor:true, nombre:'Roberto', apellidos:'Rodrigez',nota:4.5},
{valoraciones:'baja',repetidor:false, nombre:'Javier', apellidos:'Martin',nota:3.5},
{valoraciones:'alta',repetidor:false, nombre:'Marta', apellidos:'Gonzalez',nota:9.5}
  ];

  /*
  dos definidas de los array:
  a) let lista:number[]=[1,2,3];
  b)  let lista: Array<number>=[1,2,3];
  */
 














}