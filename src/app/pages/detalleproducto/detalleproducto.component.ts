import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart/cart.service';
import { Location } from '@angular/common'; // Importa Location

@Component({
  selector: 'app-detalleproducto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalleproducto.component.html',
  styleUrls: ['./detalleproducto.component.css']
})
export class DetalleproductoComponent implements OnInit {
  product: any;
  cartItemsCount = 0;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private router: Router,
    private location: Location // Inyecta Location
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.productService.getProductById(id).subscribe(product => {
      this.product = product;
    });

    this.cartService.cart$.subscribe(items => {
      this.cartItemsCount = items.length; // Actualizamos el contador
    });
  }

  // Método para añadir producto al carrito
  addToCart() {
    this.cartService.addToCart(this.product);
  }

  // Método para redirigir al carrito
  goToCart() {
    this.router.navigate(['/cart-form']);
  }

  // Método para regresar a la página anterior
  goBack() {
    this.location.back();
  }
}
