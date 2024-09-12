import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems = new BehaviorSubject<any[]>([]);  
  cart$ = this.cartItems.asObservable();  

  // Método para añadir productos al carrito
  addToCart(product: any) {
    const currentItems = this.cartItems.value;  // Obtiene los productos actuales
    this.cartItems.next([...currentItems, product]);  // Añade el nuevo producto
  }


  clearCart() {
    this.cartItems.next([]);  
  }
}
