import { Component, OnInit } from '@angular/core';
import { MainService } from '../app.service'

@Component({
  selector: 'app-daily-needs',
  templateUrl: './daily-needs.component.html',
  styleUrls: ['./daily-needs.component.css']
})

export class DailyNeedsComponent implements OnInit {

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
    let copyCart = cart2.slice();
    // console.log(copyCart)
    this.sample.title = a.title;
    this.sample.price = a.price;
    this.sample.url = a.url;
    this.sample.data1 = a.data1;
    this.sample.data2 = a.data2;
    this.sample.data3 = a.data3;

    copyCart.push(this.sample);
    cart2 = copyCart
    // console.log(cart1)
  }
}
export var cart2 = []