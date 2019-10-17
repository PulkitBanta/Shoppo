import { Component, OnInit } from '@angular/core';
import { ProductBoardService } from './product-board.service';
import { Product } from '../product/product.model';

@Component({
  selector: 'app-product-board',
  templateUrl: './product-board.component.html',
  styleUrls: ['./product-board.component.css']
})

export class ProductBoardComponent {

  constructor(private productBoardService: ProductBoardService) { }
  
  pro : Product[];

  ngOnInit() {
    this.pro = this.productBoardService.getAll();
  }

}