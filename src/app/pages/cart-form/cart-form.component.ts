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

  // Método para calcular el precio total del carrito
  calculateTotalPrice(): void {
    this.totalPrice = this.cartItems.reduce((total, item) => total + item.price, 0);
  }

  // Método para vaciar el carrito (opcional)
  clearCart(): void {
    this.cartService.clearCart();
  }
}
