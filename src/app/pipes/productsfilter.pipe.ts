import { Pipe, PipeTransform } from '@angular/core';
import {Product} from '../services/product.service';

@Pipe({
  name: 'productsfilter'
})
export class ProductsfilterPipe implements PipeTransform {
  transform(products: Array<Product>, search: string): any {
    return products.filter((value) => {
      if (value.name.indexOf(search) !== -1) {
        return true;
      }
    });
  }
}
