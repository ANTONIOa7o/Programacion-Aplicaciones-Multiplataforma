import { HttpClientModule } from '@angular/common/http';//OJO!!IMPORTAR
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PokemonService } from './services/pokemon.service';//DECLARAMOS EN TS

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],                            //AQUI 
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
