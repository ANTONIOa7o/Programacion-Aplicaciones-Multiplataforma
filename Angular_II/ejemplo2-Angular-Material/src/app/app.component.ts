import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
    nombres = [
      {nombre:'Juan',color:'yellow'},
      {nombre:'Maria',color:'orange'},
      {nombre:'Pablo',color:'green'},
      {nombre:'Antonio',color:'red'},
      {nombre:'Lucia',color:'blue'},
      {nombre:'Beatriz',color:'pink'}
    ];
}
