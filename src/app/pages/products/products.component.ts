import { Component, OnInit } from '@angular/core';
import {ProductService, Product} from '../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public products: Array<Product> = [];
  constructor(productService: ProductService) {
    this.products = productService.getProducts();
  }

  ngOnInit() {
  }
  private handleStarChange(star, index): void {
    this.products[index].stars = star;
  }
}

