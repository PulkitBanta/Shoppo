import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit {

  constructor(private http: HttpClient) { }
  data: any;

  ngOnInit() {
    this.http.get('../../assets/main.json')
    .subscribe(
      (data) => {
        this.data = data;
      }
    );
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
    let copyCart = cart4.slice();
    // console.log(copyCart)
    this.sample.title = a.title;
    this.sample.price = a.price;
    this.sample.url = a.url;
    this.sample.data1 = a.data1;
    this.sample.data2 = a.data2;
    this.sample.data3 = a.data3;

    copyCart.push(this.sample);
    cart4 = copyCart
    // console.log(cart1)
  }
}
export var cart4 = []