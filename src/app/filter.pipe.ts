import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(products: any, sort: any): any {
    // returns the array of products with specific type
    return products.filter(function (product) {
      return product.type.includes(sort);
    })
  }

}
