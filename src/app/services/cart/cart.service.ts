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
    const currentItems = this.cartItems.value;
    const existingProductIndex = currentItems.findIndex(item => item.id === product.id);
    
    if (existingProductIndex > -1) {
      // Si el producto ya está en el carrito, aumentar la cantidad
      currentItems[existingProductIndex].quantity += product.quantity;
    } else {
      // Si el producto no está, añadirlo
      currentItems.push({ ...product, quantity: product.quantity || 1 });
    }
    
    this.cartItems.next(currentItems);
  }

  // Método para eliminar un producto del carrito
  removeFromCart(productoId: string) {
    const updatedItems = this.cartItems.value.filter(item => item.id !== productoId);
    this.cartItems.next(updatedItems);
  }

  // Método para actualizar la cantidad de un producto
  updateQuantity(productoId: string, quantityChange: number) {
    const currentItems = this.cartItems.value;
    const productIndex = currentItems.findIndex(item => item.id === productoId);
    
    if (productIndex > -1) {
      currentItems[productIndex].quantity += quantityChange;
      if (currentItems[productIndex].quantity <= 0) {
        // Eliminar producto si la cantidad es 0 o menor
        this.removeFromCart(productoId);
        return;
      }
      this.cartItems.next(currentItems);
    }
  }

  // Método para vaciar el carrito
  clearCart() {
    this.cartItems.next([]);
  }
}
