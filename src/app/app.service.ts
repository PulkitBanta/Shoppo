import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class MainService implements OnInit {

  constructor(private http: HttpClient) { }
  items = [];

  ngOnInit() { }

  getAll() {
    return this.http.get('./assets/main.json')
  }

  addToCart(product) {
    this.items.push(product);
  }

  getProducts() {
    return this.items;
  }

}