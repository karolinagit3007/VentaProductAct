import { Component } from '@angular/core';
import { Products } from '../../utils/products';
import * as productData from '../../../../public/json/productData.json';
import { CommonModule } from '@angular/common';
import { RouterLink} from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  products: Products[]= (productData as any).default;

  
  constructor(){}

  ngOnInit():void{
    console.log(productData);
  }

  imagenes: string []=[
    'imagenes/imgEmpresarial.jpg',
    'imagenes/ofertaUno.jpg',
    'imagenes/ofertaDos.jpg',
    'imagenes/ofertaTres.jpg',
    'imagenes/ejecutivaUno.jpg',
    'imagenes/ejecutivoDos.avif',
    'imagenes/ejecutivaTres.jpg',
    'imagenes/panicError404.gif',
  ];

}
