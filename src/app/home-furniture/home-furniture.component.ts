import { Component, OnInit } from '@angular/core';
import { MainService } from '../app.service';

@Component({
  selector: 'app-home-furniture',
  templateUrl: './home-furniture.component.html',
  styleUrls: ['./home-furniture.component.css']
})

export class HomeFurnitureComponent implements OnInit {

  constructor(private mainService: MainService) { }
  products;
  sort = 'furniture'

  ngOnInit() {
    this.products = this.mainService.getAll()
  }

  add(product) {
    this.mainService.addToCart(product)
  }
}