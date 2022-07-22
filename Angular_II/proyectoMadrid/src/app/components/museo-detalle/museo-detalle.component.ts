import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Museo } from 'src/app/models/museo';


@Component({
  selector: 'app-museo-detalle',
  templateUrl: './museo-detalle.component.html',
  styleUrls: ['./museo-detalle.component.css']
})
export class MuseoDetalleComponent implements OnInit {

  id: number = 0;
  museo: Museo = null

  museos: Museo[] = [

    {
      id: 1, nombre: "Museo del  Prado", telefono: '913 30 28 00', direccion: 'C. de Ruiz de Alarcón, 23, 28014 Madrid', horario: '10:00-20:00', imagen: '../../../assets/images/museo-del-prado.jpg', web: 'https;//www.museodelprado.es/', coordenadas: [40.4137818, -3.6921271], precio: 18,
      abierto: true
    },
    { id: 2, nombre: "Museo de la ilusiones", telefono: '', direccion: 'calle del doctor Cortezo 8, 28012 Madrid', horario: 'lunes a jueves de 9 a 16:30 horas. Viernes de 9 a 14 horas.', imagen: '../../../assets/images/museo-de-las-ilusiones.jpeg', web: 'https://museumofillusions.es/', coordenadas: [40.4135, -3.7040], precio: 13, abierto: true },
    {
      id: 3, nombre: "Museo de bellas artes de San Fernando", telefono: '+34 91-524 08 64', direccion: 'Alcalá, 13 28014 Madrid', horario: 'l-v de 10 a 21h s-d 9:30 a 22h', imagen: '../../../assets/images/real-academia-de-bellas-artes-museo-de-bellas-artes.jpg', web: 'https://www.realacademiabellasartessanfernando.com/es/museo/', coordenadas: [40.418821330012605, -3.7007008327756434
      ], precio: 15, abierto: true
    }
  ];


  constructor(private ruta: ActivatedRoute) {
  /*   console.log(this.ruta.snapshot.params.codigo); */
    this.id = this.ruta.snapshot.params.codigo;
    this.museo = this.buscarMuseo();
  }

  buscarMuseo(): Museo {
    //Filtre el array por aquellos elementos id, que sea igual al id recibido(parametro)
    return this.museos.filter((item) => {
      return item.id == this.id
    })[0];
// Al filtrar el array nos devuelve otro array y nos  quedamos solo con el  primer elemento
  }


  ngOnInit(): void {
  }

}
