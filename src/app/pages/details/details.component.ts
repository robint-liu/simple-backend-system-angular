import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService, Product} from '../../services/product.service';
import {FormControl, FormGroup} from '@angular/forms';

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
  private valid = true;
  ngOnInit() {
  }
  private handleSave(value) {
    console.log(value);
    if (value.productName === '') {
      this.valid = false;
    } else {
      this.valid = true;
      const resolution = this.productService.changeinfo(this.id, value.productName, value.productDesc);
      resolution.subscribe((res) => {
        confirm('保存成功！即将跳转页面···');
        this.router.navigate(['/products']);
      });
    }
  }
}
