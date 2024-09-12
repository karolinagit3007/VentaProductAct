import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-cart-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-form.component.html',
  styleUrls: ['./cart-form.component.css']
})
export class CartFormComponent implements OnInit {
  cartItems: any[] = [];
  totalPrice: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    // Obtener los elementos del carrito al inicializar el componente
    this.cartService.cart$.subscribe(items => {
      this.cartItems = items;
      this.calculateTotalPrice();
    });
  }

  calculateTotalPrice(): void {
    this.totalPrice = this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  increaseQuantity(productoId: string): void {
    this.cartService.updateQuantity(productoId, 1);
  }

  decreaseQuantity(productoId: string): void {
    this.cartService.updateQuantity(productoId, -1);
  }

  removeFromCarrito(productoId: string): void {
    this.cartService.removeFromCart(productoId);
  }

  clearCart(): void {
    this.cartService.clearCart();
  }
}
