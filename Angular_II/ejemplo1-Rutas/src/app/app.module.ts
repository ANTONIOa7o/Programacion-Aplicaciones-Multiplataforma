import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/*
 *1º EL Routes=> Este enrutador nos va a facilitar la  implementacion de  la navegacion en nuetra
 aplicacion, podremos asignar vista, componentes especificos para cada url que deseemos.
 Asi como los permisos para enviar y recibir infommacion o parametros.
 *2º RouterModule, Cada componente pueda acceder y poseer su propia ruta
 */
import { Routes,RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { Componente1Component } from './components/componente1/componente1.component';
import { Componente2Component } from './components/componente2/componente2.component';
import { Componente3Component } from './components/componente3/componente3.component';
import { InicioComponent } from './inicio/inicio.component';


/*
Array de las rutas definidas
*/
const misRutas:Routes=[
{path:'c1', component:Componente1Component},
{path:'c2', component:Componente2Component},
{path:'c3/:codigo', component:Componente3Component},//Parametros  en Ruta*
{path:'inicio',component:InicioComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    Componente1Component,
    Componente2Component,
    Componente3Component,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(misRutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
