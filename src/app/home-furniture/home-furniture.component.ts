import { Component, OnInit } from '@angular/core';
import { HomeFurnitureService } from './home-furniture.service';

@Component({
  selector: 'app-home-furniture',
  templateUrl: './home-furniture.component.html',
  styleUrls: ['./home-furniture.component.css']
})

export class HomeFurnitureComponent implements OnInit {

  constructor(private HomeFurnitureData: HomeFurnitureService) { }
  data: any;

  ngOnInit() {
    this.data = this.HomeFurnitureData.getAll();
  }

  sample = {
    title: null,
    price: null,
    url: null,
    data1: null,
    data2: null,
    data3: null,
  }

  add(a: any) {
    let copyCart = cart1.slice();
    // console.log(copyCart)
    this.sample.title = a.title;
    this.sample.price = a.price;
    this.sample.url = a.url;
    this.sample.data1 = a.data1;
    this.sample.data2 = a.data2;
    this.sample.data3 = a.data3;

    copyCart.push(this.sample);
    cart1 = copyCart
    // console.log(cart1)
  }

}

export var cart1 = []