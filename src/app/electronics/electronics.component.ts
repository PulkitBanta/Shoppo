import { Component, OnInit } from '@angular/core';
import { MainService } from '../app.service';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})

export class ElectronicsComponent implements OnInit {

  constructor(private mainService: MainService) { }
  products;
  sort = 'electronics'

  ngOnInit() {
    this.products = this.mainService.getAll()
  }

  add(product) {
    this.mainService.addToCart(product)
  }
}