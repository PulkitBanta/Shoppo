import { Component } from '@angular/core';
import { MainService } from '../app.service';

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.css']
})

export class ClothesComponent {

  constructor(private mainService: MainService) { }
  products;
  sort = 'clothes'

  ngOnInit() {
    this.products = this.mainService.getAll()
  }

  add(product) {
    this.mainService.addToCart(product)
  }
}