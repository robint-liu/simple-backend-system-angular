import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService, Product} from '../../services/product.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
    private id: number;
    private product: Product = new Product(0, '', '', '', 0, 0);
  constructor(private router: Router, route: ActivatedRoute, private productService: ProductService) {
    route.params.subscribe((params) => {
      this.id = parseInt(params.id, 10);
      const stream = this.productService.getProductById(this.id);
      stream.subscribe((res) => {
        this.product = res.data.product;
      });
    });
  }
  ngOnInit() {
  }
  private handleSave(name, desc) {
    this.productService.changeinfo(this.id, name, desc);
    this.router.navigate(['/products']);
  }
}
