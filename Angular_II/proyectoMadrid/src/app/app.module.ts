import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { MuseosComponent } from './components/museos/museos.component';
import { MuseoDetalleComponent } from './components/museo-detalle/museo-detalle.component';
import { UbicacionMuseoComponent } from './components/ubicacion-museo/ubicacion-museo.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { AgmCoreModule } from '@agm/core';


const misRutas: Routes = [

{path:'home',component:HomeComponent},
{path:'museos',component:MuseosComponent},
{path:'museo_detalle/:codigo',component:MuseoDetalleComponent},
{path:'ubicacion_museo',component:UbicacionMuseoComponent},
{path:'',redirectTo:'home', pathMatch:'full'},//Redireccion elegida de pagina principal, solicitando la redirecTo y pathMatch
{path:'',component:ErrorComponent}//path del  error siemmpre al final
]




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    MuseosComponent,
    MuseoDetalleComponent,
    UbicacionMuseoComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(misRutas),
    AgmCoreModule.forRoot({
      apiKey:''
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
