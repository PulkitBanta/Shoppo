import { Component } from '@angular/core';
import { MainService } from '../app.service'

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.css']
})

export class ClothesComponent {

  constructor(private mainService: MainService) { }
  data;

  ngOnInit() {
    this.data = this.mainService.getAll()
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
    let copyCart = cart3.slice();
    // console.log(copyCart)
    this.sample.title = a.title;
    this.sample.price = a.price;
    this.sample.url = a.url;
    this.sample.data1 = a.data1;
    this.sample.data2 = a.data2;
    this.sample.data3 = a.data3;

    copyCart.push(this.sample);
    cart3 = copyCart
    // console.log(cart1)
  }
}
export var cart3 = []