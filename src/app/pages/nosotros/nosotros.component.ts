import { Component } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
})
export class NosotrosComponent {

  imagenes: string []=[
    'imagenes/imgEmpresarial.jpg',
    'imagenes/ofertaUno.jpg',
    'imagenes/ofertaDos.jpg',
    'imagenes/ofertaTres.jpg',
    'imagenes/ejecutivaUno.jpg',
    'imagenes/ejecutivoDos.avif',
    'imagenes/ejecutivaTres.jpg',
  ];

}
