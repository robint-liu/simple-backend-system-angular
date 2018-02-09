import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @ViewChild('child')
  private child;
  constructor() {
  }
  ngOnInit() {
    this.child.eret();
  }
}

