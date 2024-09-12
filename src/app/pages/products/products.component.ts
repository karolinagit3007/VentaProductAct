import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterLink,RouterLinkActive],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  products:any[]=[];

  constructor(private productService:ProductService){}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(productList => {
      console.log('Products fetched:', productList);  // Añade esta línea para verificar los datos en la consola
      this.products = productList;
    });
  }

}
