import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Location } from '@angular/common'; // Importa Location

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'] // Asegúrate de que esto sea styleUrls en lugar de styleUrl
})
export class ProductsComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService, private location: Location) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(productList => {
      console.log('Products fetched:', productList);  // Verifica los datos en la consola
      this.products = productList;
    });
  }

  
}
