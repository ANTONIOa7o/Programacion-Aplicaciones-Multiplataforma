import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lat: number = 40.43507936606178; 
  lng: number = -3.65198180207574;
  zoom:number = 17;
}
