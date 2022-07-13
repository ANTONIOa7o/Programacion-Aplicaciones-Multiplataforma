/*
                          ====================
                                 MODULE
                          ====================

i)Caracteristicas:
    a.Los  modulos son piezas necesarias pero no suficientes, para la  ejecucion, y que ademas
    son la pieza mas grande en la que se puede dividir una aplicacion de estas caracteristicas
    b. Son piezas que se pueden reutilizar dentro de nuestro proyecto pero tambien podrán usarse en
    otros  proyectos
    c.Angular ademos ofrece modulos nativos como HTTP,  Browser, Forms,  Reactive Form
    
ii)Categorias de los modulos: 
  a. Nativos: Modulos de recursos provistos por Angular 
  b.Terceros: Realizados por otras personas, podemos usar,serán libres o de pago
  c.Propios; Desarrollo individual, 
    */
   import { NgModule } from '@angular/core';

/*
NgModules ⇓
    Será el configurador de la inyeccion, asi como el compilador, ayuda a agrupar
    estructuras
    NgModule es una clase marcada por el decorador @ngModule
i)Caracteristicas:
    1.Describe como compilar el template de un commponente
    2. Creador de las indexaciones en tiempo de ejecucion.
    3.Indentifica componentes del propio modulo, directivas,pipes...puede reconocer
    o invocar alguno de ellos de manera publica(a tráves de la propiedad export) para  que 
    los componentes externos puedan ser utilizados
*/
import { BrowserModule } from '@angular/platform-browser';
/*
**BrowserModule, 
  1.Exportador de la infraestructura requerida para todas las aplicacciones angular
  2.Incluido por defecto en  todas las aplicaciones angular(arquitectura de Angular)
  Angular cli, new, model, service
*/

import { AppComponent } from './app.component';
import { TextoComponent } from './texto/texto.component';
import { LogoComponent } from './logo/logo.component';
/*
@NgModule, este decorador contiene 4 arrays:

1. declarations: LISTA  DE LOS  COMPONENTES
2. importaciones: lista de modulos (Form reactive)
3. providers: Lista de servicios
4. bootstrap: Componente de inicio 
*/
@NgModule({
  declarations: [
    AppComponent,
    TextoComponent,
    LogoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
/*
 package.json ⇓ 
 Es el archivo de configuracion de un proyecto filtrado por node.js.
 Aqui se encuentran las dependencias/LIBRERIAS/paquetes de Angular, que
 vayamos a utilizar en nuestra SPA, y que Angular cli, via NPM, que se ha   
 encargado de instalarlas por nosotros en la carpeta node_module.
 Estas son las  librerias, immprescindibles para nuestro proyecto y podremos
 añadir nuevas librerias para cubrir necesidades de recursos  o funcionalidades,
 asi como requisitos que necesito nuetro proyecto

*/
