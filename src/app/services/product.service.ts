import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  private products: Array<Product> = [
      new Product( 1006, '产品6', '详情6', '衬衫6', 4, 599),
      new Product( 1005, '产品5', '详情5', '衬衫5', 5, 499),
      new Product( 1004, '产品4', '详情4', '衬衫4', 4, 399),
      new Product( 1003, '产品3', '详情3', '衬衫3', 3, 299),
      new Product( 1002, '产品2', '详情2', '衬衫2', 2, 199),
      new Product( 1001, '产品1', '详情1', '衬衫1', 1, 99)
    ];
  constructor() { }

  public getProducts() {
    return this.products;
  }

  public getProductById(id: number) {
    let product = null;
    this.products.forEach((item) => {
      if (item.id === id ) {
        product = item;
      }
    });
    return product;
  }
  public changeName(id, name) {
    const product = this.getProductById(parseInt(id, 10));
    product.name = name;
  }

  public changeDesc(id, desc) {
    const product = this.getProductById(parseInt(id, 10));
    product.desc = desc;
  }
}
export class Product {
  constructor(
    public id: number,
    public name: string,
    public desc: string,
    public category: string,
    public stars: number,
    public price: number
  ) {}
}
