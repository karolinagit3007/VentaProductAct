import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Products } from '../utils/products';
import * as productData from '../../../public/json/productData.json';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products = [
    { id: 1, name: 'Blusas- camisas', description: 'Material: 100% algodón. Fit: Regular. Colores: Varios. Tallas: S-XL.', price: 100, image: 'imagenes/productoUno.png' },
    { id: 2, name: 'Pantalones', description: 'Material: 98% algodón, 2% elastano. Fit: Ajustado. Colores: Negro, Azul, Gris. Tallas: 30-38.', price: 150, image: 'imagenes/productoDos.jpg' },
    { id: 3, name: 'Vestidos', description: 'Material: 80% poliéster, 20% elastano. Fit: Entallado. Colores: Rojo, Azul marino, Verde esmeralda. Tallas: XS-XL.', price: 200, image: 'imagenes/productoTres.png'}
  ];


  constructor() { }

  getProducts(): Observable<any>{
    return of(this.products);
  }

  
  getProductById(id: number):Observable<any>{
    const product=this.products.find(p => p.id == id);
    return of(product);
  }
}
