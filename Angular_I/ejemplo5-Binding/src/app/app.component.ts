import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejemplo5-Binding';

  nombre: string = 'Escribe aqui:';
  apellidos: string = 'Cuadrado';
  habilitado: boolean = true;
  estilo = 'rojo'

  //Constructor aquel que va a  realizar la  llamada para crear objetos
  constructor() {
      setTimeout(()=>{
        this.habilitado =false;},5000);//[] va dirigido al modelo y no a la estructura

  }
  saludar():void{
    alert('Hola---! Bienvendios')// () va dirigido a la estructura y no al modelo

  }


}
