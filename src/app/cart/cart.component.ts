import { Component, OnInit } from '@angular/core';
import { MainService } from '../app.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private mainService: MainService) {}

  products;

  ngOnInit() {
    this.products = this.mainService.getProducts();
  }

  clearCart() {
    this.products = [];
  }

}