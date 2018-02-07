import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../services/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  private search = '';
  constructor(private productService: ProductService) { }
  private handleSearch(): void {
    this.productService.search(this.search);
  }
  ngOnInit() {
  }

}
