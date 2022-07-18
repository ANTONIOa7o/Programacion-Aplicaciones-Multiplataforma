import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejemplo4-Pipes';

texto:string="!Bienvenido la configuracion de Angular";
numero:number=7788.564654;
porcentaje:number=0.5488;
fecha: Date=new Date();
jsonObjeto ={nombre:'Juan',edad:36, telefonos:{tel1:916567568,tel2:916557878}};

}
