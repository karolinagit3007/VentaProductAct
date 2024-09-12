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
    { id: 3, name: 'Vestidos', description: 'Material: 80% poliéster, 20% elastano. Fit: Entallado. Colores: Rojo, Azul marino, Verde esmeralda. Tallas: XS-XL.', price: 200, image: 'imagenes/productoTres.png' },
    { id: 4, name: 'Chaquetas de cuero', description: 'Material: 100% cuero auténtico. Fit: Slim. Colores: Negro, Marrón. Tallas: M-XXL.', price: 350, image: 'imagenes/productoCuatro.jpg' },
    { id: 5, name: 'Faldas plisadas', description: 'Material: 65% algodón, 35% poliéster. Colores: Gris, Negro, Beige. Tallas: S-L.', price: 120, image: 'imagenes/productoCinco.jpg' },
    { id: 6, name: 'Zapatos deportivos', description: 'Material: Exterior de malla transpirable. Suela: Caucho antideslizante. Colores: Blanco, Negro, Azul. Tallas: 38-44.', price: 180, image: 'imagenes/productoSeis.webp' },
    { id: 7, name: 'Sombreros de verano', description: 'Material: 100% algodón. Fit: Ajustable. Colores: Blanco, Beige, Marrón claro.', price: 50, image: 'imagenes/productoSiete.jpg' },
    { id: 8, name: 'Bufandas de lana', description: 'Material: 100% lana merino. Colores: Rojo, Verde oscuro, Gris. Dimensiones: 180x30 cm.', price: 90, image: 'imagenes/productoOcho.avif' },
    { id: 9, name: 'Gafas de sol', description: 'Material: Montura de metal. Lentes: Protección UV400. Colores: Negro, Dorado, Plateado.', price: 80, image: 'imagenes/productoNueve.webp' },
    { id: 10, name: 'Relojes de pulsera', description: 'Material: Correa de cuero. Caja: Acero inoxidable. Colores: Negro, Marrón. Diámetro: 42 mm.', price: 300, image: 'imagenes/productoDiez.jpg' }
  ];

  constructor() { }

  getProducts(): Observable<any> {
    return of(this.products);
  }

  getProductById(id: number): Observable<any> {
    const product = this.products.find(p => p.id === id);
    return of(product);
  }
}
