import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class MainService {

  constructor(private http: HttpClient) { }
  items = [];

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