import { Component, OnInit } from '@angular/core';
import {Product, ProductService} from '../../../services/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public products: Array<Product> = [];
  private search = '';
  constructor(productService: ProductService) {
    const stream = productService.getProducts();
    stream.subscribe((res) => {
      this.products = res.data.products;
    });
    const events = productService.getEvents();
    events.subscribe((res) => {
      this.search = res;
    });
  }
  ngOnInit() {
  }
  eret() {
    // console.log(123);
  }
  private handleStarChange(star, index): void {
    this.products[index].stars = star;
  }
}
