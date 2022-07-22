import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-museos',
  templateUrl: './museos.component.html',
  styleUrls: ['./museos.component.css']
})
export class MuseosComponent implements OnInit {

  museos: any = [
    {id:1,nombre:"Museo del  Prado"},
    {id:2, nombre:"Museo de la ilusiones"},
    {id:3, nombre:"Museo de bellas artes"}
  ]



  constructor() { }

  ngOnInit(): void {
  }

}
