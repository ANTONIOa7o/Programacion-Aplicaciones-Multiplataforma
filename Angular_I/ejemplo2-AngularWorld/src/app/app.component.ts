
/*
*===================================
COMPONENTES DE ANGULAR
===================================

I.  Un modulo en un app, tiene una entidad propia y puede estar compuesto por mas de un componente.
II. Cada vista debe ser un componente, y este puede o no formar parte de  otros componentes,  dependiendo
de su commplejidad,, profundidad  y/o reutilizacion de codigo
*/
/* 
--------------------/app.component.ts/--------------------
El componente principal de la aplicación, donse se va a  definir la clase del componente(AppComponent)
Este componente consta de _  

a) @component -> Será palabra reservada para declarar un componente
que a su  vez contiene varios elementos:
selector: Lugar de residencia, donde apunta, alli donde se muestra,  target html;
templateUrl: Archivos html que va a  usar el componente;
styleurls: Archivos css, que usará el template(componente.html)
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/*
export class AppComponent
*/
export class AppComponent {
  title = 'ejemplo2-AngularWorld';
  nombre: string='A7o';

}
