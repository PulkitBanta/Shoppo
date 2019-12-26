import { Component, OnInit } from '@angular/core';
import { MainService } from '../app.service'

@Component({
  selector: 'app-home-furniture',
  templateUrl: './home-furniture.component.html',
  styleUrls: ['./home-furniture.component.css']
})

export class HomeFurnitureComponent implements OnInit {

  constructor(private mainService: MainService) { }
  data;

  ngOnInit() {
    this.data = this.mainService.getAll()
  }

  add(a) {
    this.mainService.addToCart(a)
  }

}

export var cart1 = []