import {EventEmitter, Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ProductService {
  private products: Array<Product> = [];
  constructor(private http: Http) { }
  private events: EventEmitter<string> = new EventEmitter();
  public getEvents() {
    return this.events;
  }
  public getProducts() {
    return this.http.get('/api/product.json').map((res) => res.json());
  }
  public getProductById(id: number) {
    return this.http.get('/api/details.json?id=' + id).map((res) => res.json());
  }
  public changeinfo(id, name, desc) {
    return this.http.get('/api/updateDetail.json', {params: {id: id, name: name, desc: desc}}).map((res) => res.json());
  }
  public search(value: string) {
    this.events.emit(value);
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
