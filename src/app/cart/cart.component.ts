import { Component, OnInit } from '@angular/core';
import { cart1 } from '../home-furniture/home-furniture.component';
import { cart2 } from '../daily-needs/daily-needs.component';
import { cart3 } from '../clothes/clothes.component';
import { cart4 } from '../electronics/electronics.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public scart = []

  ngOnInit() {
    for (var i = 0; i < cart1.length; i++)
      this.scart.push(cart1[i])
    for (var i = 0; i < cart2.length; i++)
      this.scart.push(cart2[i])
    for (var i = 0; i < cart3.length; i++)
      this.scart.push(cart3[i])
    for (var i = 0; i < cart4.length; i++)
      this.scart.push(cart4[i])
    // console.log(this.scart.length)
  }

  // cartLen(){
  //   return this.scart.length
  // }

}